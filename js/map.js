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
  const facilities = window.canadaIndustrialData ? window.canadaIndustrialData.all : [];
  if (!facilities.length) {
    alert('No data loaded! Make sure canada-data.js is in /data/.');
    return;
  }

  facilities.forEach(f => {
    if (!f._originalCoords) {
      f._originalCoords = { originalLat: f.lat, originalLon: f.lon };
    }

    if (typeof applyPositionOverride === 'function') {
      applyPositionOverride(f);
    }

    const delKey = `delete:${f.name}`;
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

function addResetLocalEditsButton() {
  const btn = document.createElement('button');
  btn.id = 'resetEditsBtn';
  btn.className = 'reset-edits-btn hidden';
  btn.textContent = '↺ Reset Edits';
  btn.onclick = showResetConfirmationModal;

  document.body.appendChild(btn);
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