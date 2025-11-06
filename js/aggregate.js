/**
 * aggregate.js
 * Groups nearby facilities (~50 km) into pie-chart clusters (3+ only).
 */

let clusterMarkers = [];
const CLUSTER_RADIUS_KM = 50;
const PIE_ZOOM_THRESHOLD = 8;
let aggregationEnabled = true;

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

function computeSpatialClusters() {
  const facilities = Object.values(markers).flatMap(items => items.map(i => i.facility));
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

function createPieSVG(sectorCounts, size = 70) {
  const total = Object.values(sectorCounts).reduce((a, b) => a + b, 0);
  if (total === 0) return '';

  let cumulative = 0;
  const r = size / 2;
  let sliceId = 0;
  
  let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="pointer-events: all;">`;
  
  // Create paths for each sector
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
  
  // White center circle
  svg += `<circle cx="${r}" cy="${r}" r="${r * 0.35}" fill="white" stroke="#444" stroke-width="1.5"/>`;
  
  // Center text showing total count
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

// Global tooltip element for pie slices
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

function drawSpatialPies() {
  clearSpatialPies();
  const clusters = computeSpatialClusters();

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

    // Build detailed tooltip with breakdown
    let tooltipHtml = `<div style="font-size: 13px;"><strong>${c.members.length} facilities</strong><br><br>`;
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

function toggleAggregation() {
  if (!aggregationEnabled) {
    clearSpatialPies();
    updateVisibility();
    return;
  }

  const zoom = map.getZoom();
  if (zoom <= PIE_ZOOM_THRESHOLD) {
    Object.values(markers).forEach(items =>
      items.forEach(({ marker }) => map.removeLayer(marker))
    );
    drawSpatialPies();
  } else {
    clearSpatialPies();
    updateVisibility();
  }
}

function attachAggregationEvents() {
  map.on('zoomend', toggleAggregation);
}

function setAggregationMode(enabled) {
  aggregationEnabled = enabled;
  toggleAggregation();
}

// Make functions globally available
if (typeof window !== 'undefined') {
  window.showSliceTooltip = showSliceTooltip;
  window.hideSliceTooltip = hideSliceTooltip;
}