function togglePanel() {
  const panel = document.getElementById('controlPanel');
  panel.classList.toggle('collapsed');
  document.getElementById('toggleIcon').textContent = panel.classList.contains('collapsed') ? '+' : '−';
}

function initializeFilters() {
  Object.values(markers).forEach(items => {
    const f = items[0].facility;
    filters.datasets[f.dataset] = true;
    filters.sectors[f.sector] = true;
    filters.subcategories[f.subcategory] = true;
  });
}

function buildUI() {
  buildDatasetFilters();
  buildSectorFilters();
  buildSubcategoryFilters();
  buildLegend();

  document.getElementById('totalCount').textContent =
    Object.values(markers).reduce((sum, items) => sum + items.length, 0);
}

function buildDatasetFilters() {
  let html = `<label class="checkbox-item" style="font-weight:600;">
    <input type="checkbox" id="selectAll-datasets" checked onchange="toggleAll('datasets', this.checked)">
    <span>Select All</span></label>`;
  Object.keys(filters.datasets).sort().forEach(d => {
    const escaped = d.replace(/'/g, "\\'");
    html += `<label class="checkbox-item">
      <input type="checkbox" data-key="${d}" checked onchange="toggleDataset('${escaped}')">${d}</label>`;
  });
  document.getElementById('datasetFilters').innerHTML = html;
}

function buildSectorFilters() {
  let html = `<label class="checkbox-item" style="font-weight:600;">
    <input type="checkbox" id="selectAll-sectors" checked onchange="toggleAll('sectors', this.checked)">
    <span>Select All</span></label>`;
  Object.keys(filters.sectors).sort().forEach(s => {
    const color = SECTOR_COLORS[s] || '#555';
    const escaped = s.replace(/'/g, "\\'");
    html += `<label class="checkbox-item">
      <input type="checkbox" data-key="${s}" checked onchange="toggleSector('${escaped}')">
      <span class="color-dot" style="background:${color}"></span>${s}</label>`;
  });
  document.getElementById('sectorFilters').innerHTML = html;
}

function buildSubcategoryFilters() {
  const UNIT_HINTS = { 'Crude Tank Farm':'bbl','Refined Product Terminal':'m³','Underground Gas Storage':'Bcf','LNG Storage':'m³','LPG/NGL Storage':'bbl','Gas Processing Plant':'MMcf/d','Oilseed':'MTPA','Pulse':'MTPA','Ethanol':'MTPA','Feed':'MTPA','Meat':'kMT/yr','Dairy':'kMT/yr','Seafood':'kMT/yr' };
  let html = `<label class="checkbox-item" style="font-weight:600;">
    <input type="checkbox" id="selectAll-subcategories" checked onchange="toggleAll('subcategories', this.checked)">
    <span>Select All</span></label>`;
  Object.keys(filters.subcategories).sort().forEach(s => {
    const color = SUBCATEGORY_COLORS[s] || '#555';
    const unit = UNIT_HINTS[s] ? `<span style="color:#6b7280;font-size:11px;">(${UNIT_HINTS[s]})</span>` : '';
    const escaped = s.replace(/'/g, "\\'");
    html += `<label class="checkbox-item">
      <input type="checkbox" data-key="${s}" checked onchange="toggleSubcategory('${escaped}')">
      <span class="color-dot" style="background:${color}"></span>
      <span style="font-size:12px;">${s}</span> ${unit}</label>`;
  });
  document.getElementById('subcategoryFilters').innerHTML = html;
}

function buildLegend() {
  let html = '';
  Object.entries(SECTOR_COLORS).forEach(([s, c]) => {
    html += `<div class="legend-item"><span class="color-dot" style="background:${c}"></span>${s}</div>`;
  });
  document.getElementById('legendContent').innerHTML = html;
}

function addAggregationToggle() {
  const panel = document.querySelector('.panel-content');

  const section = document.createElement('div');
  section.className = 'section';
  section.innerHTML = `
    <div class="section-title">🧩 Aggregation Mode</div>
    <label class="checkbox-item">
      <input type="checkbox" id="aggregateToggle" checked>
      <span>Enable aggregated pie view (3+ facilities / 50 km)</span>
    </label>
  `;
  panel.insertBefore(section, panel.querySelector('.download-btn'));

  document
    .getElementById('aggregateToggle')
    .addEventListener('change', e => setAggregationMode(e.target.checked));
}