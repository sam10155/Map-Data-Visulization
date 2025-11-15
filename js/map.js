let map;
let markers = {};
window.filters = window.filters || { datasets: {}, sectors: {}, subcategories: {} };

function initMap() {
  map = L.map('map').setView([55, -100], 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 3,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  installExclusivePopupMode();
  installDynamicRadiusScaling();
  addResetLocalEditsButton();

  loadData();
}

function installExclusivePopupMode() {
  map.on("popupopen", function (e) {
    map.eachLayer(layer => {
      if ((layer instanceof L.Marker || layer instanceof L.CircleMarker) &&
          layer !== e.popup._source &&
          layer.getPopup && layer.getPopup()) {
        layer.closePopup();
      }
    });
  });
}

function installDynamicRadiusScaling() {
  map.on("zoomend", () => {
    Object.values(markers)
      .flat()
      .forEach(({ marker, facility }) => {
        const r = calculateRadius(facility);
        marker.setRadius(r);
      });
  });
}

function addResetLocalEditsButton() {
  const btn = document.createElement('button');
  btn.id = 'resetEditsBtn';
  btn.className = 'reset-edits-btn hidden';
  btn.textContent = '↺ Reset Edits';
  btn.onclick = showResetConfirmationModal;

  document.body.appendChild(btn);
}

async function loadData() {
  const base = window.canadaIndustrialData ? window.canadaIndustrialData.all : [];
  if (!base.length) {
    alert('No data loaded! Make sure canada-data.js is in /data/.');
    return;
  }

  const facilities = [...base];

  if (window._attributeCache) {
    Object.values(window._attributeCache).forEach(attr => {
      if (attr && attr._isNew) {
        const f = {
          name: attr.name,
          operator: attr.operator,
          dataset: attr.dataset || "New",
          sector: attr.sector,
          subcategory: attr.subcategory,
          province: attr.province,
          city: attr.city,
          lat: attr.lat,
          lon: attr.lon,
          capacity: attr.capacity,
          unit: attr.unit,
          _isNew: true,

          _originalCoords: {
            originalLat: attr.lat,
            originalLon: attr.lon
          },
          _originalAttrs: { ...attr }
        };
        facilities.push(f);
      }
    });
  }

  facilities.forEach(f => {
    if (!f._originalCoords) {
      f._originalCoords = { originalLat: f.lat, originalLon: f.lon };
    }

    if (!f._originalAttrs) {
      f._originalAttrs = {
        name: f.name,
        operator: f.operator,
        city: f.city,
        province: f.province,
        sector: f.sector,
        subcategory: f.subcategory,
        capacity: f.capacity,
        unit: f.unit
      };
    }

    if (typeof applyPositionOverride === 'function') {
      applyPositionOverride(f);
    }

    if (typeof applyAttributeOverride === 'function') {
      applyAttributeOverride(f);
    }

    const delKey = `delete:${sanitizeStorageKey(f.name)}`;
    if (window._deleteCache && window._deleteCache[delKey]) return;
    
    const color = SUBCATEGORY_COLORS[f.subcategory] || SECTOR_COLORS[f.sector] || '#555';
    const radius = calculateRadius(f);
    const popupNode = createPopup(f); 

    const marker = L.circleMarker([f.lat, f.lon], {
      radius, color, fillColor: color, fillOpacity: 0.7, weight: 1
    })
    .bindPopup(popupNode, { closeOnClick: false, autoClose: false })
    .bindTooltip(`${f.name} • ${f.subcategory}`);

    marker._popupContent = popupNode;
    marker._facility = f; 

    if (typeof trackEditingMarker === 'function') {
      trackEditingMarker(marker, f);
    }

    const key = `${f.dataset}_${f.sector}_${f.subcategory}`;
    if (!markers[key]) markers[key] = [];
    markers[key].push({ marker, facility: f });
  });

  initializeFilters();
  addAggregationSlider();
  buildUI();
  updateVisibility();
}

function addAggregationSlider() {
  const searchBox = document.querySelector('.stats-box');
  const aggSection = document.createElement('div');
  aggSection.className = 'section';
  aggSection.style.marginTop = '8px';
  
  aggSection.innerHTML = `
    <div class="section-title">🧩 Aggregation Mode</div>
    <div class="aggregation-slider">
      <button id="agg-none" class="agg-option active" onclick="setAggregationMode('none')">None</button>
      <button id="agg-50km" class="agg-option" onclick="setAggregationMode('50km')">50km</button>
      <button id="agg-provinces" class="agg-option" onclick="setAggregationMode('provinces')">Provinces</button>
      <button id="agg-regions" class="agg-option" onclick="setAggregationMode('regions')">Regions</button>
    </div>
  `;
  
  searchBox.insertAdjacentElement('afterend', aggSection);
}

function createNewFacility() {
  if (!map) return;

  const center = map.getCenter();
  const lat = center.lat;
  const lon = center.lng;

  const province = typeof guessProvince === "function" ? guessProvince(lat, lon) : "";
  const city = typeof guessNearestCity === "function" ? guessNearestCity(lat, lon) : "";

  const facility = {
    name: "",
    operator: "",
    dataset: "New",
    sector: "",
    subcategory: "",
    province,
    city,
    lat,
    lon,
    capacity: "",
    unit: "",
    _isNew: true,
    _originalCoords: { originalLat: lat, originalLon: lon },
    _originalAttrs: {}
  };

  const color = "#2563eb";
  const marker = L.circleMarker([lat, lon], {
    radius: 10,
    color,
    fillColor: color,
    fillOpacity: 0.7,
    weight: 1
  }).addTo(map);

  marker._facility = facility;

  const popupNode = createEditablePopup(facility);
  marker._popupContent = popupNode;
  marker.bindPopup(popupNode, { closeOnClick: false, autoClose: false });

  if (typeof trackEditingMarker === "function") {
    trackEditingMarker(marker, facility);
  }

  const key = `${facility.dataset}_${facility.sector}_${facility.subcategory}`;
  if (!markers[key]) markers[key] = [];
  markers[key].push({ marker, facility });

  editingMarker = marker;
  editingFacility = facility;

  marker.openPopup();
  map.panTo([lat, lon], { animate: true });

  setTimeout(() => {
    const editBtn = document.getElementById("attributeEditBtn");
    if (!editBtn) return;

    if (!attributeEditMode) {
      toggleAttributeEditMode();
    }
  }, 80);
}


function guessProvince(lat, lon) {
  const P = [
    { name: "BC", minLat: 48, maxLat: 60, minLon: -139, maxLon: -114 },
    { name: "AB", minLat: 49, maxLat: 60, minLon: -120, maxLon: -110 },
    { name: "SK", minLat: 49, maxLat: 60, minLon: -110, maxLon: -101 },
    { name: "MB", minLat: 49, maxLat: 60, minLon: -101, maxLon: -89 },
    { name: "ON", minLat: 41.5, maxLat: 56, minLon: -95, maxLon: -74 },
    { name: "QC", minLat: 44, maxLat: 62, minLon: -80, maxLon: -57 },
    { name: "NB", minLat: 44, maxLat: 48.2, minLon: -68, maxLon: -63 },
    { name: "NS", minLat: 43, maxLat: 47.5, minLon: -66.5, maxLon: -59.5 },
    { name: "NL", minLat: 46, maxLat: 60, minLon: -60, maxLon: -52 },
    { name: "PE", minLat: 45.8, maxLat: 47.2, minLon: -64.4, maxLon: -61.9 }
  ];

  for (const p of P) {
    if (lat >= p.minLat && lat <= p.maxLat && lon >= p.minLon && lon <= p.maxLon) {
      return p.name;
    }
  }
  return "";
}

function guessNearestCity(lat, lon) {
  const facilities = window.canadaIndustrialData ? window.canadaIndustrialData.all : [];
  if (!facilities.length) return "";

  let best = null;
  let bestDist = Infinity;

  for (const f of facilities) {
    const d = Math.hypot(lat - f.lat, lon - f.lon);
    if (d < bestDist) {
      bestDist = d;
      best = f.city;
    }
  }
  return best || "";
}

function calculateRadius(f) {
  const scales = { 
    'bbl': 1e-5, 'm3': 0.01, 'Bcf': 1.0, 'tonnes': 2e-4, 'TEU/yr': 1e-4,
    'bbl/d': 0.003, 'MMcf/d': 0.12, 'MTPA': 150, 'kMT/yr': 0.2
  };

  const val = f.capacity || 0;
  const scale = scales[f.unit] || 1e-5;

  const base = Math.sqrt(val * scale) + 4;

  const zoom = map.getZoom ? map.getZoom() : 4;  
  const zoomFactor = 1 + (zoom - 4) * 0.15; 

  const radius = Math.max(6, Math.min(base * zoomFactor, 40));

  return radius;
}

function createPopup(f) {
  if (typeof createEditablePopup === 'function') {
    return createEditablePopup(f);
  }
  
  return `<b>${f.name}</b><br>${f.operator || ''}<br>${f.city}, ${f.province}<br>
          <b>${f.subcategory}</b><br>${(f.capacity || 0).toLocaleString()} ${f.unit}<br>
          <small style="color:#6b7280;font-size:10px;font-family:monospace;">📍 ${f.lat.toFixed(5)}, ${f.lon.toFixed(5)}</small>`;
}