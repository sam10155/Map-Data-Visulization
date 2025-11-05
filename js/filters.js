function toggleDataset(d){ filters.datasets[d]=!filters.datasets[d]; syncSelectAllState('datasets'); updateVisibility(); }
function toggleSector(s){ filters.sectors[s]=!filters.sectors[s]; syncSelectAllState('sectors'); updateVisibility(); }
function toggleSubcategory(s){ filters.subcategories[s]=!filters.subcategories[s]; syncSelectAllState('subcategories'); updateVisibility(); }

function toggleAll(group, checked) {
  const container = document.getElementById(`${group}Filters`);
  if (!container) return console.warn(`toggleAll: #${group}Filters missing`);
  const boxes = container.querySelectorAll('.checkbox-item input[type="checkbox"]');
  boxes.forEach((box, i) => { if (i !== 0) box.checked = checked; });
  const target = filters[group]; if (!target) return;
  Object.keys(target).forEach(k => (target[k] = checked));
  updateVisibility(); syncSelectAllState(group);
}

function syncSelectAllState(group) {
  const container = document.getElementById(`${group}Filters`);
  if (!container) return;
  const selectAllBox = container.querySelector('.checkbox-item input[type="checkbox"]');
  const target = filters[group]; if (!target) return;
  const vals = Object.values(target);
  const allOn = vals.every(v => v);
  const allOff = vals.every(v => !v);
  selectAllBox.checked = allOn;
  selectAllBox.indeterminate = !allOn && !allOff;
}

function updateVisibility() {
  let visible = 0;
  Object.entries(markers).forEach(([key, items]) => {
    const [dataset, sector, ...subcategoryParts] = key.split('_');
    const subcategory = subcategoryParts.join('_');
    const show = filters.datasets[dataset] && filters.sectors[sector] && filters.subcategories[subcategory];
    items.forEach(({ marker }) => {
      if (show) { if (!map.hasLayer(marker)) marker.addTo(map); visible++; }
      else if (map.hasLayer(marker)) map.removeLayer(marker);
    });
  });
  document.getElementById('visibleCount').textContent = visible;
}
