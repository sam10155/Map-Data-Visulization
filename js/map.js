let map;
let markers = {};
window.filters = window.filters || { datasets: {}, sectors: {}, subcategories: {} };

function initMap() {
  map = L.map('map').setView([55, -100], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 11, attribution: '© OpenStreetMap'
  }).addTo(map);
  loadData();
}

function loadData() {
  const facilities = window.canadaIndustrialData ? window.canadaIndustrialData.all : [];
  if (!facilities.length) {
    alert('No data loaded! Make sure canada-data.js is in /data/.');
    return;
  }

  facilities.forEach(f => {
    const color = SUBCATEGORY_COLORS[f.subcategory] || SECTOR_COLORS[f.sector] || '#555';
    const radius = calculateRadius(f);
    const marker = L.circleMarker([f.lat, f.lon], {
      radius, color, fillColor: color, fillOpacity: 0.7, weight: 1
    }).bindPopup(createPopup(f)).bindTooltip(`${f.name} • ${f.subcategory}`);

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

function calculateRadius(f) {
  const scales = { 'bbl': 1e-5, 'm3': 0.01, 'Bcf': 1.0, 'tonnes': 2e-4, 'TEU/yr': 1e-4, 
                   'bbl/d': 0.003, 'MMcf/d': 0.12, 'MTPA': 150, 'kMT/yr': 0.2 };
  const val = f.capacity || 0, scale = scales[f.unit] || 1e-5;
  return Math.max(4, Math.min(Math.sqrt(val * scale) + 4, 30));
}

function createPopup(f) {
  return `<b>${f.name}</b><br>${f.operator || ''}<br>${f.city}, ${f.province}<br>
          <b>${f.subcategory}</b><br>${(f.capacity || 0).toLocaleString()} ${f.unit}`;
}