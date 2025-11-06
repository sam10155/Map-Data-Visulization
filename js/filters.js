function toggleDataset(d) { 
  filters.datasets[d] = !filters.datasets[d]; 
  syncSelectAllState('datasets'); 
  updateVisibility(); 
}

function toggleSector(s) { 
  filters.sectors[s] = !filters.sectors[s]; 
  syncSelectAllState('sectors'); 
  updateVisibility(); 
}

function toggleSubcategory(s) { 
  filters.subcategories[s] = !filters.subcategories[s]; 
  syncSelectAllState('subcategories'); 
  updateVisibility(); 
}

function toggleAll(group, checked) {
  const target = filters[group]; 
  if (!target) {
    console.warn(`toggleAll: filters.${group} is undefined`);
    return;
  }
  
  // Update all filter states first
  Object.keys(target).forEach(k => {
    target[k] = checked;
  });
  
  // Then update all checkboxes in the UI (skip the first one which is "Select All")
  const container = document.getElementById(`${group}Filters`);
  if (!container) {
    console.warn(`toggleAll: #${group}Filters container not found`);
    return;
  }
  
  const checkboxes = container.querySelectorAll('.checkbox-item input[type="checkbox"]');
  checkboxes.forEach((checkbox, index) => { 
    // Skip index 0 (the "Select All" checkbox itself)
    if (index > 0) {
      checkbox.checked = checked; 
    }
  });
  
  // Update visibility and sync the select-all state
  updateVisibility(); 
  syncSelectAllState(group);
}

function syncSelectAllState(group) {
  const container = document.getElementById(`${group}Filters`);
  if (!container) {
    console.warn(`syncSelectAllState: #${group}Filters container not found`);
    return;
  }
  
  const selectAllCheckbox = container.querySelector('.checkbox-item input[type="checkbox"]');
  if (!selectAllCheckbox) {
    console.warn(`syncSelectAllState: Select All checkbox not found in ${group}Filters`);
    return;
  }
  
  const target = filters[group]; 
  if (!target) {
    console.warn(`syncSelectAllState: filters.${group} is undefined`);
    return;
  }
  
  const filterValues = Object.values(target);
  const allChecked = filterValues.every(v => v === true);
  const noneChecked = filterValues.every(v => v === false);
  
  // Update the "Select All" checkbox state
  selectAllCheckbox.checked = allChecked;
  selectAllCheckbox.indeterminate = !allChecked && !noneChecked;
}

function updateVisibility() {
  let visible = 0;
  
  Object.entries(markers).forEach(([key, items]) => {
    const [dataset, sector, ...subcategoryParts] = key.split('_');
    const subcategory = subcategoryParts.join('_');
    
    const datasetEnabled = filters.datasets[dataset];
    const sectorEnabled = filters.sectors[sector];
    const subcategoryEnabled = filters.subcategories[subcategory];
    
    const shouldShow = datasetEnabled && sectorEnabled && subcategoryEnabled;
    
    items.forEach(({ marker }) => {
      if (shouldShow) { 
        if (!map.hasLayer(marker)) {
          marker.addTo(map);
        }
        visible++;
      } else {
        if (map.hasLayer(marker)) {
          map.removeLayer(marker);
        }
      }
    });
  });
  
  document.getElementById('visibleCount').textContent = visible;
}