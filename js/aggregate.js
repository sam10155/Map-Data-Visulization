/**
 * aggregate.js
 * Groups nearby facilities (~50 km) into pie-chart clusters (3+ only).
 */

let clusterMarkers = [];
const CLUSTER_RADIUS_KM = 50;
const PIE_ZOOM_THRESHOLD = 8;
let aggregationEnabled = true; // controlled by UI toggle

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/** Build clusters by distance */
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
      // recompute centroid
      cluster.lat =
        cluster.members.reduce((sum, m) => sum + m.lat, 0) / cluster.members.length;
      cluster.lon =
        cluster.members.reduce((sum, m) => sum + m.lon, 0) / cluster.members.length;
    }
  });

  // Only return clusters with 3+ members
  return clusters.filter(c => c.members.length >= 3);
}

/** Create the pie SVG representing sector mix */
function createPieSVG(sectorCounts, size = 70) {
  const total = Object.values(sectorCounts).reduce((a, b) => a + b, 0);
  if (total === 0) return '';

  let cumulative = 0;
  const r = size / 2;
  let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;
  for (const [sector, count] of Object.entries(sectorCounts)) {
    const portion = count / total;
    const [sx, sy] = polar(r, r, r, cumulative * 360);
    cumulative += portion;
    const [ex, ey] = polar(r, r, r, cumulative * 360);
    const large = portion > 0.5 ? 1 : 0;
    const color = SECTOR_COLORS[sector] || '#888';
    svg += `<path d="M${r},${r} L${sx},${sy} A${r},${r} 0 ${large},1 ${ex},${ey} Z"
              fill="${color}" stroke="white" stroke-width="1"/>`;
  }
  svg += `<circle cx="${r}" cy="${r}" r="${r * 0.35}" fill="white" stroke="#444" stroke-width="1"/>`;
  svg += `</svg>`;
  return svg;
}

function polar(cx, cy, r, angle) {
  const rad = (angle - 90) * Math.PI / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
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

    const tooltip = `${c.members.length} facilities`;
    const m = L.marker([c.lat, c.lon], { icon }).bindTooltip(tooltip);
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
