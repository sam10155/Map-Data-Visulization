/**
 * aggregate.js
 * Groups nearby facilities with multiple aggregation modes:
 * - none: No aggregation
 * - 50km: Spatial clustering within 50km
 * - provinces: Group by province
 * - regions: Group by major regions
 */
let clusterMarkers = [];
const CLUSTER_RADIUS_KM = 50;
const PIE_ZOOM_THRESHOLD = 8;
let aggregationMode = 'none';

const PROVINCE_REGIONS = {
  'YT': { name: 'Yukon', lat: 64.0, lon: -135.0, region: 'Northern Territories' },
  'NT': { name: 'Northwest Territories', lat: 64.0, lon: -120.0, region: 'Northern Territories' },
  'NU': { name: 'Nunavut', lat: 70.0, lon: -95.0, region: 'Northern Territories' },
  'BC': { name: 'British Columbia', lat: 54.0, lon: -125.0, region: 'West Coast' },
  'AB': { name: 'Alberta', lat: 54.0, lon: -115.0, region: 'Prairies' },
  'SK': { name: 'Saskatchewan', lat: 54.0, lon: -106.0, region: 'Prairies' },
  'MB': { name: 'Manitoba', lat: 54.0, lon: -98.0, region: 'Prairies' },
  'ON': { name: 'Ontario', lat: 50.0, lon: -85.0, region: 'Central' },
  'QC': { name: 'Quebec', lat: 52.0, lon: -72.0, region: 'Central' },
  'NB': { name: 'New Brunswick', lat: 46.5, lon: -66.0, region: 'Atlantic' },
  'NS': { name: 'Nova Scotia', lat: 45.0, lon: -63.0, region: 'Atlantic' },
  'PE': { name: 'Prince Edward Island', lat: 46.5, lon: -63.5, region: 'Atlantic' },
  'NL': { name: 'Newfoundland and Labrador', lat: 53.0, lon: -60.0, region: 'Atlantic' }
};

const REGIONS = {
  'Northern Territories': { lat: 66.0, lon: -116.0 },
  'West Coast': { lat: 54.0, lon: -125.0 },
  'Prairies': { lat: 54.0, lon: -106.0 },
  'Central': { lat: 51.0, lon: -78.5 },
  'Atlantic': { lat: 46.0, lon: -63.0 }
};

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getFilteredFacilities() {
  return Object.values(markers)
    .flatMap(items => items.map(i => i.facility))
    .filter(f =>
      filters.datasets[f.dataset] &&
      filters.sectors[f.sector] &&
      filters.subcategories[f.subcategory]
    );
}

function computeSpatialClusters() {
  const facilities = getFilteredFacilities();
  const clusters = [];

  facilities.forEach(fac => {
    let cluster = clusters.find(
      c => haversine(c.lat, c.lon, fac.lat, fac.lon) < CLUSTER_RADIUS_KM
    );
    if (!cluster) {
      clusters.push({
        lat: fac.lat,
        lon: fac.lon,
        members: [fac],
      });
    } else {
      cluster.members.push(fac);
      cluster.lat =
        cluster.members.reduce((sum, m) => sum + m.lat, 0) / cluster.members.length;
      cluster.lon =
        cluster.members.reduce((sum, m) => sum + m.lon, 0) / cluster.members.length;
    }
  });

  return clusters.filter(c => c.members.length >= 3);
}

function computeProvinceClusters() {
  const facilities = getFilteredFacilities();
  const provinceGroups = {};

  facilities.forEach(f => {
    const prov = f.province.split('/')[0].trim();
    
    if (!provinceGroups[prov]) {
      const info = PROVINCE_REGIONS[prov] || { name: prov, lat: f.lat, lon: f.lon };
      provinceGroups[prov] = {
        lat: info.lat,
        lon: info.lon,
        members: [],
        name: info.name
      };
    }
    provinceGroups[prov].members.push(f);
  });

  return Object.values(provinceGroups).filter(c => c.members.length >= 1);
}

function computeRegionClusters() {
  const facilities = getFilteredFacilities();
  const regionGroups = {};

  facilities.forEach(f => {
    const firstProv = f.province.split('/')[0].trim();
    const provInfo = PROVINCE_REGIONS[firstProv];
    const region = provInfo ? provInfo.region : 'Other';
    
    if (!regionGroups[region]) {
      const info = REGIONS[region] || { lat: f.lat, lon: f.lon };
      regionGroups[region] = {
        lat: info.lat,
        lon: info.lon,
        members: [],
        name: region
      };
    }
    regionGroups[region].members.push(f);
  });

  return Object.values(regionGroups).filter(c => c.members.length >= 1);
}

function createPieSVG(sectorCounts, size = 70, overrideColor = null) {
  const total = Object.values(sectorCounts).reduce((a, b) => a + b, 0);
  if (total === 0) return '';

  const r = size / 2;
  const entries = Object.entries(sectorCounts).filter(([, c]) => c > 0);
  const keys = entries.map(e => e[0]);
  const fontSize = Math.max(10, Math.min(size * 0.25, 20));

  // --- Single-type (or effectively single) -> solid circle ring ---
  if (overrideColor) {
    let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="pointer-events: all;">`;
    svg += `<circle cx="${r}" cy="${r}" r="${r}" fill="${overrideColor}" stroke="white" stroke-width="1.5" />`;
    svg += `<circle cx="${r}" cy="${r}" r="${r * 0.35}" fill="white" stroke="#444" stroke-width="1.5"/>`;
    svg += `<text x="${r}" y="${r}" text-anchor="middle" dominant-baseline="middle"
                  font-size="${fontSize}" font-weight="bold" fill="#333"
                  style="pointer-events: none; user-select: none;">${total}</text>`;
    svg += `</svg>`;
    return svg;
  }

  // --- Multi-sector path-based pie ---
  let cumulative = 0;
  let sliceId = 0;
  let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="pointer-events: all;">`;

  entries.forEach(([sector, count]) => {
    const portion = count / total;
    const [sx, sy] = polar(r, r, r, cumulative * 360);
    cumulative += portion;
    const [ex, ey] = polar(r, r, r, cumulative * 360);
    const large = portion > 0.5 ? 1 : 0;
    const color =
      (window.SECTOR_COLORS && window.SECTOR_COLORS[sector]) ||
      (typeof SECTOR_COLORS !== 'undefined' ? SECTOR_COLORS[sector] : null) ||
      '#888';
    const percent = (portion * 100).toFixed(1);

    svg += `<path id="slice-${sliceId}" d="M${r},${r} L${sx},${sy} A${r},${r} 0 ${large},1 ${ex},${ey} Z"
              fill="${color}" stroke="white" stroke-width="1.5"
              style="cursor: pointer; transition: opacity 0.2s;"
              onmouseover="this.style.opacity='0.8'; showSliceTooltip(event, '${sector.replace(/'/g, "\\'")}', ${count}, '${percent}%')"
              onmouseout="this.style.opacity='1'; hideSliceTooltip()"
            />`;
    sliceId++;
  });

  svg += `<circle cx="${r}" cy="${r}" r="${r * 0.35}" fill="white" stroke="#444" stroke-width="1.5"/>`;
  svg += `<text x="${r}" y="${r}" text-anchor="middle" dominant-baseline="middle"
                font-size="${fontSize}" font-weight="bold" fill="#333"
                style="pointer-events: none; user-select: none;">${total}</text>`;
  svg += `</svg>`;
  return svg;
}

function polar(cx, cy, r, angle) {
  const rad = (angle - 90) * Math.PI / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

let aggregationPieTooltip = null;

function showSliceTooltip(event, sector, count, percent) {
  if (!aggregationPieTooltip) {
    aggregationPieTooltip = document.createElement('div');
    aggregationPieTooltip.style.cssText = `
      position: fixed;
      background: rgba(0,0,0,0.85);
      color: white;
      padding: 6px 10px;
      border-radius: 4px;
      font-size: 12px;
      pointer-events: none;
      z-index: 10000;
      white-space: nowrap;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(aggregationPieTooltip);
  }
  
  const facility = count === 1 ? 'facility' : 'facilities';
  aggregationPieTooltip.innerHTML = `<strong>${sector}</strong><br>${count} ${facility} (${percent})`;
  aggregationPieTooltip.style.display = 'block';
  aggregationPieTooltip.style.left = (event.clientX + 10) + 'px';
  aggregationPieTooltip.style.top = (event.clientY + 10) + 'px';
}

function hideSliceTooltip() {
  if (aggregationPieTooltip) {
    aggregationPieTooltip.style.display = 'none';
  }
}

function drawAggregatedPies(clusters, labelKey = null) {
  clearSpatialPies();

  clusters.forEach(c => {
    // Build sector counts and also track subcategories for single-type detection
    const sectorCounts = {};
    const sectorSet = new Set();
    const subcatSet = new Set();

    c.members.forEach(f => {
      const sector = (f.sector || '').trim();
      sectorCounts[sector] = (sectorCounts[sector] || 0) + 1;
      sectorSet.add(sector);
      subcatSet.add((f.subcategory || '').trim());
    });

    const total = Object.values(sectorCounts).reduce((a, b) => a + b, 0);
    const entries = Object.entries(sectorCounts).sort((a, b) => b[1] - a[1]);
    const dominant = entries.length ? entries[0] : null;
    const dominantRatio = dominant ? dominant[1] / Math.max(1, total) : 0;

    // Decide an override color when it's effectively a single type
    let overrideColor = null;
    if (entries.length === 1 || dominantRatio >= 0.999) {
      // Prefer subcategory color if there is exactly one subcategory
      if (subcatSet.size === 1) {
        const subcat = Array.from(subcatSet)[0];
        overrideColor =
          (window.SUBCATEGORY_COLORS && window.SUBCATEGORY_COLORS[subcat]) ||
          (typeof SUBCATEGORY_COLORS !== 'undefined' ? SUBCATEGORY_COLORS[subcat] : null);
      }
      // Fallback to sector color
      if (!overrideColor && dominant) {
        const sector = dominant[0];
        overrideColor =
          (window.SECTOR_COLORS && window.SECTOR_COLORS[sector]) ||
          (typeof SECTOR_COLORS !== 'undefined' ? SECTOR_COLORS[sector] : null) ||
          '#888';
      }
    }

    const size = Math.min(50 + c.members.length * 2, 120);
    const svg = createPieSVG(sectorCounts, size, overrideColor);

    const icon = L.divIcon({
      html: svg,
      className: 'pie-icon',
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
    });

    // Tooltip
    let tooltipHtml = `<div style="font-size: 13px;">`;
    if (c.name) tooltipHtml += `<strong>${c.name}</strong><br>`;
    tooltipHtml += `<strong>${c.members.length} facilities</strong><br><br>`;
    entries.forEach(([sector, count]) => {
      const percent = ((count / Math.max(1, total)) * 100).toFixed(1);
      const color =
        (window.SECTOR_COLORS && window.SECTOR_COLORS[sector]) ||
        (typeof SECTOR_COLORS !== 'undefined' ? SECTOR_COLORS[sector] : null) ||
        '#888';
      tooltipHtml += `<span style="display:inline-block;width:10px;height:10px;background:${color};margin-right:5px;"></span>${sector}: ${count} (${percent}%)<br>`;
    });
    tooltipHtml += `</div>`;

    const m = L.marker([c.lat, c.lon], { icon }).bindTooltip(tooltipHtml, {
      permanent: false,
      direction: 'top',
      offset: [0, -size / 2],
    });
    m.addTo(map);
    clusterMarkers.push(m);
  });
}

function clearSpatialPies() {
  clusterMarkers.forEach(m => map.removeLayer(m));
  clusterMarkers = [];
}

function applyAggregation() {
  clearSpatialPies();
  
  if (aggregationMode === 'none') {
    updateVisibility();
    return;
  }

  Object.values(markers).forEach(items =>
    items.forEach(({ marker }) => {
      if (map.hasLayer(marker)) {
        map.removeLayer(marker);
      }
    })
  );

  let clusters = [];
  
  switch(aggregationMode) {
    case '50km':
      clusters = computeSpatialClusters();
      drawAggregatedPies(clusters);
      break;
    case 'provinces':
      clusters = computeProvinceClusters();
      drawAggregatedPies(clusters);
      break;
    case 'regions':
      clusters = computeRegionClusters();
      drawAggregatedPies(clusters);
      break;
  }
}

function setAggregationMode(mode) {
  aggregationMode = mode;
  applyAggregation();
  
  const options = ['none', '50km', 'provinces', 'regions'];
  options.forEach(opt => {
    const btn = document.getElementById(`agg-${opt}`);
    if (btn) {
      if (opt === mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });
}

function attachAggregationEvents() {
  map.on('zoomend', () => {
    const zoom = map.getZoom();

    if (zoom > PIE_ZOOM_THRESHOLD) {
      clearSpatialPies();
      updateVisibility();
      return;
    }

    if (aggregationMode !== 'none') {
      applyAggregation();
    } else {
      updateVisibility();
    }
  });
}

if (typeof window !== 'undefined') {
  window.showSliceTooltip = showSliceTooltip;
  window.hideSliceTooltip = hideSliceTooltip;
  window.setAggregationMode = setAggregationMode;
}

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getFilteredFacilities() {
  return Object.values(markers)
    .flatMap(items => items.map(i => i.facility))
    .filter(f =>
      filters.datasets[f.dataset] &&
      filters.sectors[f.sector] &&
      filters.subcategories[f.subcategory]
    );
}

function computeSpatialClusters() {
  const facilities = getFilteredFacilities();
  const clusters = [];

  facilities.forEach(fac => {
    let cluster = clusters.find(
      c => haversine(c.lat, c.lon, fac.lat, fac.lon) < CLUSTER_RADIUS_KM
    );
    if (!cluster) {
      clusters.push({
        lat: fac.lat,
        lon: fac.lon,
        members: [fac],
      });
    } else {
      cluster.members.push(fac);
      cluster.lat =
        cluster.members.reduce((sum, m) => sum + m.lat, 0) / cluster.members.length;
      cluster.lon =
        cluster.members.reduce((sum, m) => sum + m.lon, 0) / cluster.members.length;
    }
  });

  return clusters.filter(c => c.members.length >= 3);
}

function computeProvinceClusters() {
  const facilities = getFilteredFacilities();
  const provinceGroups = {};

  facilities.forEach(f => {
    const prov = f.province;
    if (!provinceGroups[prov]) {
      const info = PROVINCE_REGIONS[prov] || { name: prov, lat: f.lat, lon: f.lon };
      provinceGroups[prov] = {
        lat: info.lat,
        lon: info.lon,
        members: [],
        name: info.name
      };
    }
    provinceGroups[prov].members.push(f);
  });

  return Object.values(provinceGroups).filter(c => c.members.length >= 1);
}

function computeRegionClusters() {
  const facilities = getFilteredFacilities();
  const regionGroups = {};

  facilities.forEach(f => {
    const provInfo = PROVINCE_REGIONS[f.province];
    const region = provInfo ? provInfo.region : 'Other';
    
    if (!regionGroups[region]) {
      const info = REGIONS[region] || { lat: f.lat, lon: f.lon };
      regionGroups[region] = {
        lat: info.lat,
        lon: info.lon,
        members: [],
        name: region
      };
    }
    regionGroups[region].members.push(f);
  });

  return Object.values(regionGroups).filter(c => c.members.length >= 1);
}

function createPieSVG(sectorCounts, size = 70) {
  const total = Object.values(sectorCounts).reduce((a, b) => a + b, 0);
  if (total === 0) return '';

  let cumulative = 0;
  const r = size / 2;
  let sliceId = 0;
  
  let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="pointer-events: all;">`;

  // Handle the single-sector case explicitly:
  if (Object.keys(sectorCounts).length === 1) {
    const sector = Object.keys(sectorCounts)[0];
    const color = SECTOR_COLORS[sector] || '#888';
    const percent = '100.0';
    const r = size / 2;
    const svg = `
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="pointer-events: all;">
        <path d="M${r},${r} m0,-${r} a${r},${r} 0 1,1 0,${2 * r} a${r},${r} 0 1,1 0,-${2 * r} Z"
              fill="${color}" stroke="white" stroke-width="1.5"
              style="cursor:pointer;transition:opacity 0.2s;"
              onmouseover="this.style.opacity='0.8'; showSliceTooltip(event, '${sector.replace(/'/g, "\\'")}', ${total}, '${percent}%')"
              onmouseout="this.style.opacity='1'; hideSliceTooltip()" />
        <circle cx="${r}" cy="${r}" r="${r * 0.35}" fill="white" stroke="#444" stroke-width="1.5" />
        <text x="${r}" y="${r}" text-anchor="middle" dominant-baseline="middle"
              font-size="${Math.max(10, Math.min(size * 0.25, 20))}" font-weight="bold" fill="#333"
              style="pointer-events:none;user-select:none;">${total}</text>
      </svg>`;
    return svg;
  }
  
  for (const [sector, count] of Object.entries(sectorCounts)) {
    const portion = count / total;
    const [sx, sy] = polar(r, r, r, cumulative * 360);
    cumulative += portion;
    const [ex, ey] = polar(r, r, r, cumulative * 360);
    const large = portion > 0.5 ? 1 : 0;
    const color = SECTOR_COLORS[sector] || '#888';
    const percent = (portion * 100).toFixed(1);
    
    svg += `<path id="slice-${sliceId}" d="M${r},${r} L${sx},${sy} A${r},${r} 0 ${large},1 ${ex},${ey} Z"
              fill="${color}" stroke="white" stroke-width="1.5" 
              style="cursor: pointer; transition: opacity 0.2s;"
              onmouseover="this.style.opacity='0.8'; showSliceTooltip(event, '${sector.replace(/'/g, "\\'")}', ${count}, '${percent}%')"
              onmouseout="this.style.opacity='1'; hideSliceTooltip()"
              />`;
    sliceId++;
  }
  
  svg += `<circle cx="${r}" cy="${r}" r="${r * 0.35}" fill="white" stroke="#444" stroke-width="1.5"/>`;
  
  const fontSize = Math.max(10, Math.min(size * 0.25, 20));
  svg += `<text x="${r}" y="${r}" text-anchor="middle" dominant-baseline="middle" 
                font-size="${fontSize}" font-weight="bold" fill="#333" 
                style="pointer-events: none; user-select: none;">${total}</text>`;
  svg += `</svg>`;
  return svg;
}

function polar(cx, cy, r, angle) {
  const rad = (angle - 90) * Math.PI / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

let pieTooltip = null;

function showSliceTooltip(event, sector, count, percent) {
  if (!pieTooltip) {
    pieTooltip = document.createElement('div');
    pieTooltip.style.cssText = `
      position: fixed;
      background: rgba(0,0,0,0.85);
      color: white;
      padding: 6px 10px;
      border-radius: 4px;
      font-size: 12px;
      pointer-events: none;
      z-index: 10000;
      white-space: nowrap;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(pieTooltip);
  }
  
  const facility = count === 1 ? 'facility' : 'facilities';
  pieTooltip.innerHTML = `<strong>${sector}</strong><br>${count} ${facility} (${percent})`;
  pieTooltip.style.display = 'block';
  pieTooltip.style.left = (event.clientX + 10) + 'px';
  pieTooltip.style.top = (event.clientY + 10) + 'px';
}

function hideSliceTooltip() {
  if (pieTooltip) {
    pieTooltip.style.display = 'none';
  }
}

function drawAggregatedPies(clusters, labelKey = null) {
  clearSpatialPies();

  clusters.forEach(c => {
    const sectorCounts = {};
    c.members.forEach(f => {
      const s = f.sector;
      sectorCounts[s] = (sectorCounts[s] || 0) + 1;
    });

    const size = Math.min(50 + c.members.length * 2, 120);
    const svg = createPieSVG(sectorCounts, size);
    const icon = L.divIcon({
      html: svg,
      className: 'pie-icon',
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
    });

    let tooltipHtml = `<div style="font-size: 13px;">`;
    if (c.name) {
      tooltipHtml += `<strong>${c.name}</strong><br>`;
    }
    tooltipHtml += `<strong>${c.members.length} facilities</strong><br><br>`;
    Object.entries(sectorCounts).sort((a, b) => b[1] - a[1]).forEach(([sector, count]) => {
      const percent = ((count / c.members.length) * 100).toFixed(1);
      const color = SECTOR_COLORS[sector] || '#888';
      tooltipHtml += `<span style="display:inline-block;width:10px;height:10px;background:${color};margin-right:5px;"></span>${sector}: ${count} (${percent}%)<br>`;
    });
    tooltipHtml += '</div>';

    const m = L.marker([c.lat, c.lon], { icon }).bindTooltip(tooltipHtml, {
      permanent: false,
      direction: 'top',
      offset: [0, -size/2]
    });
    m.addTo(map);
    clusterMarkers.push(m);
  });
}

function clearSpatialPies() {
  clusterMarkers.forEach(m => map.removeLayer(m));
  clusterMarkers = [];
}

function applyAggregation() {
  clearSpatialPies();
  
  if (aggregationMode === 'none') {
    updateVisibility();
    return;
  }

  // Hide individual markers
  Object.values(markers).forEach(items =>
    items.forEach(({ marker }) => {
      if (map.hasLayer(marker)) {
        map.removeLayer(marker);
      }
    })
  );

  let clusters = [];
  
  switch(aggregationMode) {
    case '50km':
      clusters = computeSpatialClusters();
      drawAggregatedPies(clusters);
      break;
    case 'regions':
      clusters = computeRegionClusters();
      drawAggregatedPies(clusters);
      break;
    case 'provinces':
      clusters = computeProvinceClusters();
      drawAggregatedPies(clusters);
      break;
  }
}

function setAggregationMode(mode) {
  aggregationMode = mode;
  applyAggregation();
  
  // Update UI slider
  const options = ['none', '50km', 'regions', 'provinces'];
  options.forEach(opt => {
    const btn = document.getElementById(`agg-${opt}`);
    if (btn) {
      if (opt === mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });
}

function attachAggregationEvents() {
  // Zoom changes only affect 50km mode
  map.on('zoomend', () => {
    if (aggregationMode === '50km') {
      const zoom = map.getZoom();
      if (zoom > PIE_ZOOM_THRESHOLD) {
        clearSpatialPies();
        updateVisibility();
      } else {
        applyAggregation();
      }
    }
  });
}

if (typeof window !== 'undefined') {
  const _originalUpdateVisibility = window.updateVisibility;
  window.updateVisibility = function () {
    if (
      aggregationMode !== 'none' &&
      map.getZoom() <= PIE_ZOOM_THRESHOLD
    ) {
      applyAggregation();
      return;
    }

    if (typeof _originalUpdateVisibility === 'function') {
      _originalUpdateVisibility();
    }
  };
}