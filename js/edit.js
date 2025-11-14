/**
 * edit.js - Marker editing system with persistent storage
 * Saves position changes across reloads and visits
 */

let editMode = false;
let editingMarker = null;
let editingFacility = null;
let isDragging = false;
let dragHandlers = null;

// Load position overrides on startup
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
  const key = `marker-pos:${facility.name}`;

  if (window._positionCache[key]) {
    const override = window._positionCache[key];
    facility.lat = override.lat;
    facility.lon = override.lon;
    return true;
  }

  return false;
}

async function savePositionOverride(facility) {
  const key = `marker-pos:${facility.name}`;
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
    await window.storage.set(key, JSON.stringify(data));
    
    if (!window._positionCache) window._positionCache = {};
    window._positionCache[key] = data;

    showResetButton();
    
    console.log(`✓ Position saved for: ${facility.name}`);
    return true;
  } catch (err) {
    console.error('Failed to save position:', err);
    return false;
  }
}

async function initPositionCache() {
  window._positionCache = {};
  window._deleteCache = {};

  if (!window.storage) {
    console.warn("⚠ No persistent storage available – cache empty");
    return;
  }

  try {
    const posResult = await window.storage.list("marker-pos:");
    if (posResult && posResult.keys) {
      for (const key of posResult.keys) {
        const stored = await window.storage.get(key);
        if (!stored || !stored.value) continue;

        const override = JSON.parse(stored.value);
        window._positionCache[key] = override;
      }
      console.log(`✓ Loaded ${posResult.keys.length} position overrides`);
    }

    const delResult = await window.storage.list("delete:");
    if (delResult && delResult.keys) {
      for (const key of delResult.keys) {
        const stored = await window.storage.get(key);
        if (stored && stored.value === "1") {
          window._deleteCache[key] = true;
        }
      }
      console.log(`✓ Loaded ${delResult.keys.length} deleted markers`);
    }

    setTimeout(() => {
      const hasEdits =
        Object.keys(window._positionCache).length > 0 ||
        Object.keys(window._deleteCache).length > 0;

      const btn = document.getElementById('resetEditsBtn');
      if (btn) btn.classList.toggle("hidden", !hasEdits);
    }, 50);

  } catch (err) {
    console.error("Error loading persistent caches:", err);
  }
}

async function revertMarkerPosition() {
  if (!editingMarker || !editingFacility) return;

  const key = `marker-pos:${editingFacility.name}`;

  if (window.storage) {
    await window.storage.set(key, null);
  }

  if (window._positionCache && window._positionCache[key]) {
    delete window._positionCache[key];
  }

  const { originalLat, originalLon } = editingFacility._originalCoords;

  editingFacility.lat = originalLat;
  editingFacility.lon = originalLon;

  editingMarker.setLatLng([originalLat, originalLon]);
  updateCoordinatesInPopup(editingFacility);

  showSaveNotification(editingFacility, true);
  showResetButton();
}

async function deleteMarker() {
  if (!editingMarker || !editingFacility) {
    console.warn("Delete requested but no editing marker active.");
    return;
  }

  editingMarker._deleted = true;

  const key = `delete:${editingFacility.name}`;

  try {
    if (window.storage) {
      await window.storage.set(key, "1");
    }

    if (!window._deleteCache) window._deleteCache = {};
    window._deleteCache[key] = true;

    map.removeLayer(editingMarker);

    if (editingMarker.getPopup()) {
      editingMarker.closePopup();
    }

    showSaveNotification(editingFacility, true);
    showResetButton();

  } catch (err) {
    console.error("Failed to delete marker:", err);
  }

  editingMarker = null;
  editingFacility = null;
}

function createEditButton() {
  const btn = document.createElement('button');
  btn.id = 'editToggleBtn';
  btn.className = 'edit-toggle-btn';
  btn.innerHTML = '✏️ Edit';
  btn.onclick = toggleEditMode;
  return btn;
}

function toggleEditMode() {
  editMode = !editMode;
  const btn = document.getElementById('editToggleBtn');
  
  if (!btn) {
    console.warn('Edit button not found');
    return;
  }
  
  if (editMode) {
    btn.innerHTML = '💾 Save';
    btn.classList.add('edit-active');
    if (editingMarker && editingFacility) {
      enableMarkerDragging(editingMarker, editingFacility);
    }
  } else {
    btn.innerHTML = '✏️ Edit';
    btn.classList.remove('edit-active');
    if (editingMarker) {
      saveMarkerPosition(editingMarker, editingFacility);
      disableMarkerDragging(editingMarker);
    }
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
      showSaveNotification(facility, true);
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
      showSaveNotification(facility, false);
    }
  }
}

function showSaveNotification(facility, success) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const notification = document.createElement('div');
  notification.className = 'save-notification';

  if (success) {
    notification.innerHTML = `
      <strong>✓ Position Saved!</strong><br>
      ${facility.name}<br>
      <small>New: ${facility.lat}, ${facility.lon}</small><br>
      <small>Change persists across reloads</small>
    `;
  } else {
    notification.style.background = '#ef4444';
    notification.innerHTML = `
      <strong>⚠ Save Failed</strong><br>
      ${facility.name}<br>
      <small>Could not save position changes</small>
    `;
  }

  container.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => notification.remove(), 500);
  }, success ? 4000 : 6000);
}

function createEditablePopup(facility) {
  const div = document.createElement('div');
  div.className = 'facility-popup';
  
  const hasOverride = window._positionCache && 
    window._positionCache[`marker-pos:${facility.name}`];
  
  const content = `
    <div class="popup-header">
        <b>${facility.name}</b>
        <div id="editToggleBtnContainer"></div>
    </div>
    ${facility.operator ? `<div>${facility.operator}</div>` : ''}
    <div>${facility.city}, ${facility.province}</div>
    <b>${facility.subcategory}</b><br>
    ${(facility.capacity || 0).toLocaleString()} ${facility.unit}<br>
    <small class="coord-display">📍 ${facility.lat.toFixed(5)}, ${facility.lon.toFixed(5)}</small>
    ${hasOverride ? '<br><small class="custom-position-indicator" style="color:#10b981;font-size:10px;">✓ Custom position</small>' : ''}

    <div id="editControls" style="margin-top:8px; display:flex; gap:6px;">
        <button class="edit-revert-btn" onclick="revertMarkerPosition()">↩ Revert</button>
        <button class="edit-delete-btn" onclick="deleteMarker()">🗑 Delete</button>
    </div>
  `;
  
  div.innerHTML = content;
  
  setTimeout(() => {
    const container = div.querySelector('#editToggleBtnContainer');
    if (container) {
      const editBtn = createEditButton();
      container.appendChild(editBtn);
    }
  }, 0);
  
  return div;
}

function trackEditingMarker(marker, facility) {
  marker.on('popupopen', function() {
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
          const btn = document.getElementById('editToggleBtn');
          if (btn) toggleEditMode();
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
    <ul style="text-align:left;margin:10px auto;width:200px;">
      <li>All moved marker positions</li>
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

  const del = await window.storage.list("delete:");
  if (del && del.keys) {
    for (const key of del.keys) {
      await window.storage.delete(key);
    }
  }

  window._positionCache = {};
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
  window.toggleEditMode = toggleEditMode;
  window.applyPositionOverride = applyPositionOverride;
  window.initPositionCache = initPositionCache;
}