/**
 * edit.js - Enhanced marker editing system with attribute editing
 * Saves position and attribute changes across reloads and visits
 */

let editMode = false;
let attributeEditMode = false;
let editingMarker = null;
let editingFacility = null;
let isDragging = false;
let dragHandlers = null;

function sanitizeStorageKey(str) {
  return str
    .replace(/[\s\/\\'"]/g, '-')
    .replace(/[^a-zA-Z0-9\-:]/g, '')
    .substring(0, 180);
}

async function loadPositionOverrides() {
  try {
    const result = await window.storage.list('marker-pos:');
    if (result && result.keys) {
      for (const key of result.keys) {
        const data = await window.storage.get(key);
        if (data && data.value) {
          const override = JSON.parse(data.value);
          console.log(`Loaded position override for: ${override.name}`);
        }
      }
    }
  } catch (err) {
    console.log('No position overrides found (first run)');
  }
}

function applyPositionOverride(facility) {
  const safeKey = `marker-pos:${sanitizeStorageKey(facility.name)}`;

  if (window._positionCache[safeKey]) {
    const override = window._positionCache[safeKey];
    facility.lat = override.lat;
    facility.lon = override.lon;
    return true;
  }

  return false;
}

function applyAttributeOverride(facility) {
  const safeKey = `marker-attr:${sanitizeStorageKey(facility.name)}`;

  if (window._attributeCache && window._attributeCache[safeKey]) {
    const override = window._attributeCache[safeKey];
    Object.assign(facility, override);
    return true;
  }

  return false;
}

async function savePositionOverride(facility) {
  const safeKey = `marker-pos:${sanitizeStorageKey(facility.name)}`;
  const data = {
    name: facility.name,
    operator: facility.operator,
    sector: facility.sector,
    subcategory: facility.subcategory,
    lat: facility.lat,
    lon: facility.lon,
    timestamp: new Date().toISOString()
  };
  
  try {
    await window.storage.set(safeKey, JSON.stringify(data));
    
    if (!window._positionCache) window._positionCache = {};
    window._positionCache[safeKey] = data;

    showResetButton();
    
    console.log(`✓ Position saved for: ${facility.name}`);
    return true;
  } catch (err) {
    console.error('Failed to save position:', err);
    return false;
  }
}

async function saveAttributeOverride(facility) {
  const safeKey = `marker-attr:${sanitizeStorageKey(facility.name)}`;
  const data = {
    name: facility.name,
    operator: facility.operator,
    city: facility.city,
    province: facility.province,
    sector: facility.sector,
    subcategory: facility.subcategory,

    capacity: facility.capacity,
    unit: facility.unit,

    lat: facility.lat,
    lon: facility.lon,
    dataset: facility.dataset || "New",

    _isNew: !!facility._isNew,

    timestamp: new Date().toISOString()
  };
  
  try {
    await window.storage.set(safeKey, JSON.stringify(data));
    
    if (!window._attributeCache) window._attributeCache = {};
    window._attributeCache[safeKey] = data;

    showResetButton();
    
    console.log(`✓ Attributes saved for: ${facility.name}`);
    return true;
  } catch (err) {
    console.error('Failed to save attributes:', err);
    return false;
  }
}

async function initPositionCache() {
  window._positionCache = {};
  window._attributeCache = {};
  window._deleteCache = {};

  if (!window.storage) {
    console.warn("⚠ No persistent storage available – cache empty");
    return;
  }

  let posCount = 0;
  let attrCount = 0;
  let newFacilityCount = 0;
  let delCount = 0;

  try {
    const posResult = await window.storage.list("marker-pos:");
    if (posResult && posResult.keys) {
      for (const key of posResult.keys) {
        const stored = await window.storage.get(key);
        if (!stored?.value) continue;
        window._positionCache[key] = JSON.parse(stored.value);
      }
      posCount = posResult.keys.length;
    }

    const attrResult = await window.storage.list("marker-attr:");
    if (attrResult && attrResult.keys) {
      for (const key of attrResult.keys) {
        const stored = await window.storage.get(key);
        if (!stored?.value) continue;
        const override = JSON.parse(stored.value);
        window._attributeCache[key] = override;

        const delKey = `delete:${key}`;
        const deleted = window._deleteCache && window._deleteCache[delKey];

        if (override && override._isNew && !deleted) {
            newFacilityCount++;
        }
      }
      attrCount = attrResult.keys.length;
    }

    const delResult = await window.storage.list("delete:");
    if (delResult && delResult.keys) {
      for (const key of delResult.keys) {
        const stored = await window.storage.get(key);
        if (stored && stored.value === "1") window._deleteCache[key] = true;
      }
      delCount = delResult.keys.length;
    }

    console.log(
      `[-] Persistent Load Summary: ${posCount} positions, ${attrCount} attributes, ${newFacilityCount} new facilities, ${delCount} deletions`
    );

    setTimeout(() => {
      const hasEdits = posCount > 0 || attrCount > 0 || delCount > 0;
      const btn = document.getElementById('resetEditsBtn');
      if (btn) btn.classList.toggle("hidden", !hasEdits);
    }, 50);

  } catch (err) {
    console.error("Error loading persistent caches:", err);
  }
}

async function revertMarkerPosition() {
  if (!editingMarker || !editingFacility) return;

  const safeKey = `marker-pos:${sanitizeStorageKey(editingFacility.name)}`;

  if (window.storage) {
    await window.storage.delete(safeKey);
  }

  if (window._positionCache && window._positionCache[safeKey]) {
    delete window._positionCache[safeKey];
  }

  const { originalLat, originalLon } = editingFacility._originalCoords;

  editingFacility.lat = originalLat;
  editingFacility.lon = originalLon;

  editingMarker.setLatLng([originalLat, originalLon]);
  updateCoordinatesInPopup(editingFacility);

  showSaveNotification('Position reverted', true);
  showResetButton();
}

async function revertMarkerAttributes() {
  if (!editingMarker || !editingFacility) return;

  const safeKey = `marker-attr:${sanitizeStorageKey(editingFacility.name)}`;

  if (window.storage) {
    await window.storage.delete(safeKey);
  }

  if (window._attributeCache && window._attributeCache[safeKey]) {
    delete window._attributeCache[safeKey];
  }

  if (editingFacility._originalAttrs) {
    Object.assign(editingFacility, editingFacility._originalAttrs);
  }

  editingMarker.closePopup();
  setTimeout(() => {
    const newPopup = createEditablePopup(editingFacility);
    editingMarker.setPopupContent(newPopup);
    editingMarker._popupContent = newPopup;
    editingMarker.openPopup();
  }, 100);

  showSaveNotification('Attributes reverted', true);
  showResetButton();
}

async function deleteMarker() {
  if (!editingMarker || !editingFacility) return;

  const key = sanitizeStorageKey(editingFacility.name);

  const delKey = `delete:${key}`;
  const attrKey = `marker-attr:${key}`;

  try {
    if (window.storage) {
      await window.storage.set(delKey, "1");

      await window.storage.delete(attrKey);

      if (window._attributeCache && window._attributeCache[attrKey]) {
        delete window._attributeCache[attrKey];
      }
    }

    editingMarker._deleted = true;
    map.removeLayer(editingMarker);

    showSaveNotification("Facility deleted", true);
    showResetButton();
  } catch (err) {
    console.error("Delete failed:", err);
    showSaveNotification("Failed to delete facility", false);
  }
}

function createMoveButton() {
  const btn = document.createElement('button');
  btn.id = 'moveToggleBtn';
  btn.className = 'edit-toggle-btn';
  btn.innerHTML = '🔀 Move';
  btn.onclick = toggleMoveMode;
  return btn;
}

function createAttributeEditButton() {
  const btn = document.createElement('button');
  btn.id = 'attributeEditBtn';
  btn.className = 'edit-toggle-btn';
  btn.innerHTML = '✏️ Edit';
  btn.onclick = toggleAttributeEditMode;
  return btn;
}

function toggleMoveMode() {
  editMode = !editMode;
  const btn = document.getElementById('moveToggleBtn');
  
  if (!btn) {
    console.warn('Move button not found');
    return;
  }
  
  if (editMode) {
    btn.innerHTML = '💾 Save';
    btn.classList.add('edit-active');
    if (editingMarker && editingFacility) {
      enableMarkerDragging(editingMarker, editingFacility);
    }
  } else {
    btn.innerHTML = '🔀 Move';
    btn.classList.remove('edit-active');
    if (editingMarker) {
      saveMarkerPosition(editingMarker, editingFacility);
      disableMarkerDragging(editingMarker);
    }
  }
}

function toggleAttributeEditMode() {
  attributeEditMode = !attributeEditMode;
  const btn = document.getElementById('attributeEditBtn');
  
  if (!btn) {
    console.warn('Attribute edit button not found');
    return;
  }
  
  if (attributeEditMode) {
    btn.innerHTML = '💾 Save';
    btn.classList.add('edit-active');
    showAttributeEditForm();
    
    setTimeout(() => {
      if (editingMarker && map) {
        const markerLatLng = editingMarker.getLatLng();
        map.panTo(markerLatLng, {
          animate: true,
          duration: 0.5
        });
      }
    }, 100);
  } else {
    btn.innerHTML = '✏️ Edit';
    btn.classList.remove('edit-active');
    saveAttributeChanges();
  }
}

function showAttributeEditForm() {
  if (!editingMarker || !editingFacility) return;

  const popup = editingMarker.getPopup();
  if (!popup) return;

  const allCities = [...new Set(window.canadaIndustrialData.all.map(f => f.city))].sort();
  const allProvinces = [...new Set(window.canadaIndustrialData.all.map(f => f.province))].sort();
  const allSectors = [...new Set(window.canadaIndustrialData.all.map(f => f.sector))].sort();
  const allSubcategories = [...new Set(window.canadaIndustrialData.all.map(f => f.subcategory))].sort();
  const allUnits = [...new Set(window.canadaIndustrialData.all.map(f => f.unit))].sort();

  const form = document.createElement('div');
  form.className = 'attribute-edit-form';
  form.style.cssText = 'margin-top: 12px; padding-top: 12px; border-top: 2px solid #e5e7eb;';
  
  form.innerHTML = `
    <div style="font-size: 12px; font-weight: 600; margin-bottom: 8px; color: #2563eb;">
      ✏️ Editing Attributes
    </div>
    
    <div style="margin-bottom: 6px;">
      <label style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 2px;">Name:</label>
      <input type="text" id="edit-name" value="${editingFacility.name}" 
             style="width: 100%; padding: 4px; font-size: 12px; border: 1px solid #d1d5db; border-radius: 3px;">
    </div>
    
    <div style="margin-bottom: 6px;">
      <label style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 2px;">Operator:</label>
      <input type="text" id="edit-operator" value="${editingFacility.operator || ''}" 
             style="width: 100%; padding: 4px; font-size: 12px; border: 1px solid #d1d5db; border-radius: 3px;">
    </div>
    
    <div style="margin-bottom: 6px;">
      <label style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 2px;">City:</label>
      <input type="text" id="edit-city" value="${editingFacility.city}" list="city-options"
             style="width: 100%; padding: 4px; font-size: 12px; border: 1px solid #d1d5db; border-radius: 3px;">
      <datalist id="city-options">
        ${allCities.map(c => `<option value="${c}">`).join('')}
      </datalist>
    </div>
    
    <div style="margin-bottom: 6px;">
      <label style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 2px;">Province:</label>
      <select id="edit-province" style="width: 100%; padding: 4px; font-size: 12px; border: 1px solid #d1d5db; border-radius: 3px;">
        ${allProvinces.map(p => `<option value="${p}" ${p === editingFacility.province ? 'selected' : ''}>${p}</option>`).join('')}
      </select>
    </div>
    
    <div style="margin-bottom: 6px;">
      <label style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 2px;">Sector:</label>
      <select id="edit-sector" style="width: 100%; padding: 4px; font-size: 12px; border: 1px solid #d1d5db; border-radius: 3px;">
        ${allSectors.map(s => `<option value="${s}" ${s === editingFacility.sector ? 'selected' : ''}>${s}</option>`).join('')}
      </select>
    </div>
    
    <div style="margin-bottom: 6px;">
      <label style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 2px;">Subcategory:</label>
      <input type="text" id="edit-subcategory" value="${editingFacility.subcategory}" list="subcat-options"
             style="width: 100%; padding: 4px; font-size: 12px; border: 1px solid #d1d5db; border-radius: 3px;">
      <datalist id="subcat-options">
        ${allSubcategories.map(s => `<option value="${s}">`).join('')}
      </datalist>
    </div>
    
    <div style="display: flex; gap: 6px; margin-bottom: 6px;">
      <div style="flex: 1;">
        <label style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 2px;">Capacity:</label>
        <input type="number" id="edit-capacity" value="${editingFacility.capacity || 0}" 
               style="width: 100%; padding: 4px; font-size: 12px; border: 1px solid #d1d5db; border-radius: 3px;">
      </div>
      <div style="flex: 1;">
        <label style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 2px;">Unit:</label>
        <select id="edit-unit" style="width: 100%; padding: 4px; font-size: 12px; border: 1px solid #d1d5db; border-radius: 3px;">
          ${allUnits.map(u => `<option value="${u}" ${u === editingFacility.unit ? 'selected' : ''}>${u}</option>`).join('')}
        </select>
      </div>
    </div>
  `;

  const existingForm = popup._contentNode.querySelector('.attribute-edit-form');
  if (existingForm) {
    existingForm.remove();
  }

  popup._contentNode.appendChild(form);
}

async function saveAttributeChanges() {
  if (!editingMarker || !editingFacility) {
    console.warn("saveAttributeChanges called with no active editing marker/facility");
    attributeEditMode = false;
    return;
  }

  const marker = editingMarker;
  const facility = editingFacility;

  const name = document.getElementById('edit-name')?.value;
  const operator = document.getElementById('edit-operator')?.value;
  const city = document.getElementById('edit-city')?.value;
  const province = document.getElementById('edit-province')?.value;
  const sector = document.getElementById('edit-sector')?.value;
  const subcategory = document.getElementById('edit-subcategory')?.value;
  const capacity = parseFloat(document.getElementById('edit-capacity')?.value) || 0;
  const unit = document.getElementById('edit-unit')?.value;

  if (!facility._originalAttrs) {
    facility._originalAttrs = {
      name: facility.name,
      operator: facility.operator,
      city: facility.city,
      province: facility.province,
      sector: facility.sector,
      subcategory: facility.subcategory,
      capacity: facility.capacity,
      unit: facility.unit
    };
  }

  const changed = 
    name !== facility.name ||
    operator !== facility.operator ||
    city !== facility.city ||
    province !== facility.province ||
    sector !== facility.sector ||
    subcategory !== facility.subcategory ||
    capacity !== facility.capacity ||
    unit !== facility.unit;

  if (!changed) return;

  facility.name = name;
  facility.operator = operator;
  facility.city = city;
  facility.province = province;
  facility.sector = sector;
  facility.subcategory = subcategory;
  facility.capacity = capacity;
  facility.unit = unit;

  const color = SUBCATEGORY_COLORS[subcategory] || SECTOR_COLORS[sector] || '#555';
  marker.setStyle({ color, fillColor: color });

  marker.unbindTooltip();
  marker.bindTooltip(`${name} • ${subcategory}`);

  const success = await saveAttributeOverride(facility);
  
  if (success) {
    showSaveNotification('Attributes updated', true);
    showResetButton();
  } else {
    showSaveNotification('Failed to save attributes', false);
  }

  if (!marker) return;

  try {
    marker.closePopup();
    setTimeout(() => {
      const newPopup = createEditablePopup(facility);
      marker.setPopupContent(newPopup);
      marker._popupContent = newPopup;
      marker.openPopup();
    }, 100);
  } catch (e) {
    console.warn("Failed to refresh popup after save:", e);
  }
}

function enableMarkerDragging(marker, facility) {
  facility._originalCoords = { 
    originalLat: facility.lat, 
    originalLon: facility.lon 
  };

  marker.setStyle({ opacity: 0.7, fillOpacity: 0.5, weight: 3 });

  if (marker.getTooltip()) {
    marker.unbindTooltip();
  }
  marker._tooltipDisabled = true;
  
  const instructionDiv = document.createElement('div');
  instructionDiv.id = 'drag-instruction';
  instructionDiv.style.cssText = `
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: #3b82f6;
    color: white;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    pointer-events: none;
  `;
  instructionDiv.textContent = '🖱️ Click and drag the marker to move it';
  document.body.appendChild(instructionDiv);
  
  setTimeout(() => {
    if (instructionDiv.parentNode) {
      instructionDiv.style.transition = 'opacity 0.5s';
      instructionDiv.style.opacity = '0';
      setTimeout(() => instructionDiv.remove(), 500);
    }
  }, 3000);
  
  let startLatLng = null;
  
  function onMouseDown(e) {
    if (!editMode) return;

    marker.off('mouseover');
    marker.off('mouseout');
    if (marker.getTooltip()) marker.unbindTooltip();

    L.DomEvent.stopPropagation(e);
    L.DomEvent.preventDefault(e);

    isDragging = true;
    marker._dragging = true;

    if (marker.getPopup()) {
        const p = marker.getPopup();
        p.options.closeOnClick = false;
        p.options.autoClose = false;
        p.options.closeOnEscapeKey = false;
        p.options.keepInView = true;
    }

    map.dragging.disable();
    map.getContainer().style.cursor = "move";

    map.on('mousemove', onDrag);
    map.on('mouseup', onDragEnd);
  }
  
  function onDrag(e) {
    if (!isDragging) return;
    L.DomEvent.stopPropagation(e);
    marker.setLatLng(e.latlng);
  }
  
  function onDragEnd(e) {
    if (!isDragging) return;
    
    L.DomEvent.stopPropagation(e);
    
    isDragging = false;
    marker._dragging = false; 
    map.dragging.enable();
    map.getContainer().style.cursor = '';

    marker.getPopup().options.autoClose = true;
    marker.getPopup().options.closeOnClick = true;
    
    map.off('mousemove', onDrag);
    map.off('mouseup', onDragEnd);
    
    const newPos = marker.getLatLng();
    facility.lat = parseFloat(newPos.lat.toFixed(5));
    facility.lon = parseFloat(newPos.lng.toFixed(5));
    
    updateCoordinatesInPopup(facility);

    if (!marker.getTooltip()) {
        marker.bindTooltip(`${facility.name} • ${facility.subcategory}`);
    }
  }
  
  marker.on('mousedown', onMouseDown);
  
  dragHandlers = { onMouseDown, onDrag, onDragEnd };
}

function updateCoordinatesInPopup(facility) {
  if (!editingMarker || !editingMarker._popupContent) return;

  const div = editingMarker._popupContent;
  const coordDisplay = div.querySelector('.coord-display');

  if (coordDisplay) {
    coordDisplay.textContent = `📍 ${facility.lat.toFixed(5)}, ${facility.lon.toFixed(5)}`;
  }
}

function disableMarkerDragging(marker) {
  marker.setStyle({ opacity: 1, fillOpacity: 0.7, weight: 1 });

  if (marker._tooltipDisabled) {
    const facility = marker._facility;
    if (facility) {
      marker.bindTooltip(`${facility.name} • ${facility.subcategory}`);
    }
    delete marker._tooltipDisabled;
  }

  if (dragHandlers) {
    marker.off('mousedown', dragHandlers.onMouseDown);
    map.off('mousemove', dragHandlers.onDrag);
    map.off('mouseup', dragHandlers.onDragEnd);
    dragHandlers = null;
  }

  map.dragging.enable();
  map.getContainer().style.cursor = '';
  isDragging = false;

  if (marker.getPopup()) {
    marker.getPopup().options.closeOnClick = true;
  }

  const instruction = document.getElementById('drag-instruction');
  if (instruction) instruction.remove();
}

async function saveMarkerPosition(marker, facility) {
  if (!facility._originalCoords) return;

  const changed =
    Math.abs(facility._originalCoords.originalLat - facility.lat) > 0.00001 ||
    Math.abs(facility._originalCoords.originalLon - facility.lon) > 0.00001;

  if (changed) {
    const success = await savePositionOverride(facility);
    if (success) {
      showSaveNotification('Position saved', true);
      showResetButton();

      const existingIndicator = document.querySelector('.custom-position-indicator');
      if (!existingIndicator) {
        const popup = marker.getPopup();
        if (popup && popup._contentNode) {
          const indicator = document.createElement('small');
          indicator.className = 'custom-position-indicator';
          indicator.style.cssText = 'color:#10b981;font-size:10px;';
          indicator.innerHTML = '<br>✓ Custom position';
          popup._contentNode.appendChild(indicator);
        }
      }
    } else {
      showSaveNotification('Failed to save position', false);
    }
  }
}

function showSaveNotification(message, success) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const notification = document.createElement('div');
  notification.className = 'save-notification';

  if (success) {
    notification.innerHTML = `<strong>✓ ${message}</strong>`;
  } else {
    notification.style.background = '#ef4444';
    notification.innerHTML = `<strong>⚠ ${message}</strong>`;
  }

  container.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => notification.remove(), 500);
  }, success ? 3000 : 5000);
}

function createEditablePopup(facility) {
  const div = document.createElement('div');
  div.className = 'facility-popup';
  
  const safeKey = `marker-pos:${sanitizeStorageKey(facility.name)}`;
  const attrKey = `marker-attr:${sanitizeStorageKey(facility.name)}`;
  const hasPositionOverride = window._positionCache && window._positionCache[safeKey];
  const hasAttributeOverride = window._attributeCache && window._attributeCache[attrKey];
  
  const content = `
    <div class="popup-header">
        <b>${facility.name}</b>
        <div style="display: flex; gap: 4px;" id="editButtonsContainer"></div>
    </div>
    ${facility.operator ? `<div>${facility.operator}</div>` : ''}
    <div>${facility.city}, ${facility.province}</div>
    <b>${facility.subcategory}</b><br>
    ${(facility.capacity || 0).toLocaleString()} ${facility.unit}<br>
    <small class="coord-display">📍 ${facility.lat.toFixed(5)}, ${facility.lon.toFixed(5)}</small>
    ${hasPositionOverride ? '<br><small class="custom-position-indicator" style="color:#10b981;font-size:10px;">✓ Custom position</small>' : ''}
    ${hasAttributeOverride ? '<br><small class="custom-position-indicator" style="color:#10b981;font-size:10px;">✓ Custom attributes</small>' : ''}

    <div id="editControls" style="margin-top:8px; display:flex; gap:6px;">
        <button class="edit-revert-btn" onclick="revertMarkerPosition()">↩ Revert Pos</button>
        <button class="edit-revert-btn" onclick="revertMarkerAttributes()">↩ Revert Attr</button>
        <button class="edit-delete-btn" onclick="deleteMarker()">🗑 Delete</button>
    </div>
  `;
  
  div.innerHTML = content;
  
  setTimeout(() => {
    const container = div.querySelector('#editButtonsContainer');
    if (container) {
      const moveBtn = createMoveButton();
      const editBtn = createAttributeEditButton();
      container.appendChild(moveBtn);
      container.appendChild(editBtn);
    }
  }, 0);
  
  return div;
}

function trackEditingMarker(marker, facility) {
  marker.on('popupopen', function () {
    if (marker._dragging) return;

    editingMarker = marker;
    editingFacility = facility;
    
    if (editMode) {
      enableMarkerDragging(marker, facility);
    }
  });
  
  marker.on('popupclose', function () {
    if (marker._deleted || marker._dragging || isDragging) return;

    if (editMode) {
      const btn = document.getElementById('moveToggleBtn');
      if (btn) toggleMoveMode();
    }

    if (attributeEditMode) {
      const btn = document.getElementById('attributeEditBtn');
      if (btn) toggleAttributeEditMode();
    }

    editingMarker = null;
    editingFacility = null;
  });
}

function showResetConfirmationModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  const box = document.createElement('div');
  box.className = 'modal-box';
  box.innerHTML = `
    <h3>Reset All Edits?</h3>
    <p>This will permanently delete:</p>
    <ul style="text-align:left;margin:10px auto;width:220px;">
      <li>All moved marker positions</li>
      <li>All attribute changes</li>
      <li>All deleted markers</li>
    </ul>
    <p>Changes cannot be undone.</p>
    <div class="modal-buttons">
      <button class="modal-btn modal-confirm">Reset</button>
      <button class="modal-btn modal-cancel">Cancel</button>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(box);

  box.querySelector('.modal-cancel').onclick = () => {
    overlay.remove();
    box.remove();
  };

  box.querySelector('.modal-confirm').onclick = async () => {
    await resetAllEdits();
    overlay.remove();
    box.remove();
  };
}

async function resetAllEdits() {
  if (!window.storage) return;

  const pos = await window.storage.list("marker-pos:");
  if (pos && pos.keys) {
    for (const key of pos.keys) {
      await window.storage.delete(key);
    }
  }

  const attr = await window.storage.list("marker-attr:");
  if (attr && attr.keys) {
    for (const key of attr.keys) {
      await window.storage.delete(key);
    }
  }

  const del = await window.storage.list("delete:");
  if (del && del.keys) {
    for (const key of del.keys) {
      await window.storage.delete(key);
    }
  }

  window._positionCache = {};
  window._attributeCache = {};
  window._deleteCache = {};

  console.log("✓ All persistent edits FULLY cleared");

  const btn = document.getElementById("resetEditsBtn");
  if (btn) btn.classList.add("hidden");

  location.reload();
}

function showResetButton() {
  const btn = document.getElementById("resetEditsBtn");
  if (btn) btn.classList.remove("hidden");
}

if (typeof window !== 'undefined') {
  window.createEditablePopup = createEditablePopup;
  window.trackEditingMarker = trackEditingMarker;
  window.toggleMoveMode = toggleMoveMode;
  window.toggleAttributeEditMode = toggleAttributeEditMode;
  window.applyPositionOverride = applyPositionOverride;
  window.applyAttributeOverride = applyAttributeOverride;
  window.initPositionCache = initPositionCache;
  window.sanitizeStorageKey = sanitizeStorageKey;
  window.revertMarkerPosition = revertMarkerPosition;
  window.revertMarkerAttributes = revertMarkerAttributes;
  window.deleteMarker = deleteMarker;
  window.showResetConfirmationModal = showResetConfirmationModal;
}