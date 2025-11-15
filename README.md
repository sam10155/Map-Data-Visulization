# 🇨🇦 Canada Industrial Capacity Visualization

An interactive **web-based visualization** of Canada's industrial infrastructure — showing storage, processing, and manufacturing facilities across energy, agriculture, forestry, and materials sectors.  
The map aggregates facilities by type, capacity, and geography, allowing exploration of national-scale patterns and local details.

---

## 🖼️ Preview

**Interactive map example:**

![App Screenshot](docs/screenshot.png)

> Demo Site:[https://sam10155.github.io/Map-Data-Visulization/](https://sam10155.github.io/Map-Data-Visulization/)

---

## 🌍 Features

- 🗺️ **Interactive Leaflet Map** — pan/zoom, hover tooltips, capacity-scaled markers  
- 🧩 **Aggregation Mode (Pie View)** — cluster by 50 km radius, province, or region  
- 🔎 **Search** — real-time fuzzy search by name, operator, city  
- 🧮 **Filters** — dataset, sector, subcategory (with automatic unit hints)  
- 📊 **Dynamic Marker Scaling** — radius scales with capacity and zoom level  
- 💾 **Persistent Edits** — saved locally using the File System Access API  
- ✏️ **Attribute Editing** — edit name, operator, type, capacity, etc.  
- 📍 **Move Marker Mode** — drag markers to fix/improve coordinates  
- ➕ **New Facility Creation** — instantly open in edit mode at the map center  
- 🗑 **Delete Facility** — soft-delete for built-in data, full delete for new items  
- ↺ **Reset All Edits** — wipe all persistent changes and restore defaults  
- ⬇️ **CSV Export** — download the visible, filtered dataset  
- 📋 **Table View** — full sortable/filterable table for all visible facilities  

---

## 📂 Repository Structure

```
Visualization/
├── index.html                  # Main web interface
├── css/
│   └── style.css               # Layout and UI styling
├── js/
│ ├── main.js                   # App entry point & persistent storage setup
│ ├── map.js                    # Map initialization & marker creation
│ ├── edit.js                   # Editing system (move/edit/delete/save)
│ ├── filters.js                # Dataset / sector / subcategory filtering
│ ├── ui.js                     # Control panel, new facility button, legend
│ ├── aggregate.js              # Pie-chart aggregation logic
│ ├── search.js                 # Search functionality
│ ├── constants.js              # Colors, units, categories
│ └── download.js               # CSV export tools
├── data/
│   └── canada-data.js          # Core dataset (all facilities)
├── serve.py                    # Simple local HTTP server (with JS MIME types)
└── README.md
```

---

## ⚙️ Local Setup

### 1. Clone the repository
```bash
git clone git@github.com:sam10155/Map-Data-Visulization.git
cd Map-Data-Visulization
```

### 2. Run a local web server
Use the provided helper (ensures correct MIME types on Windows/macOS/Linux):
```bash
python serve.py
```
Or start a simple server manually (Python 3):
```bash
python -m http.server 8080
```

### 3. Open the app
```
http://localhost:8080/
```

> **Note:** If you see console warnings like “MIME type text/plain is not a valid JavaScript MIME type,” use `serve.py` (it sets `Content-Type: application/javascript`) or serve via any static server that sends correct MIME types.

---

## 🧱 Data Model

Each facility entry in `data/canada-data.js` follows this structure:

```js
{
  name: 'Enbridge Sarnia Terminal',
  operator: 'Enbridge',
  sector: 'Oil Storage',
  subcategory: 'Crude Tank Farm',
  province: 'ON',
  city: 'Sarnia',
  lat: 42.960,
  lon: -82.404,
  capacity: 2000000,
  unit: 'bbl'
}
```

The module exports:
- `storageData`
- `oilGasProcessingData`
- `rawMaterialsProcessingData`
- `agriProcessingData`
- `allFacilities` (combined)

And exposes `window.canadaIndustrialData = { storage, oilGasProcessing, rawMaterials, agriProcessing, all }` for the browser.

---

## 🧭 Controls Overview

| Control | Description |
|--------|-------------|
| **Search** | Live filtering by facility name, operator, or city |
| **Aggregation Mode** | None, 50 km cluster pies, provincial, or regional aggregation |
| **Datasets** | Toggle high-level datasets (Storage, Processing, Raw Materials, Agriculture) |
| **Sectors** | Toggle major industrial sectors with hierarchical grouping |
| **Subcategories** | Detailed facility-type filters (includes automatic unit hints like bbl, MMcf/d, MTPA) |
| **New Facility** | Creates a new marker at the map center and opens it in edit mode |
| **Edit / Move / Delete** | Modify attributes, reposition markers, or locally delete facilities |
| **Reset Edits** | Clears all persistent overrides and deletions |
| **Download Visible Facilities** | Exports the currently visible + filtered markers to CSV |
| **Table View** | Alternate sortable list view of all visible facilities |

---

## 🧰 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript  
- **Mapping:** Leaflet.js with OpenStreetMap tiles  
- **Persistent Storage:** File System Access API (Chrome / Edge)  
- **Data Source:** Static JS dataset (`canada-data.js`) + user overrides  
- **Local Server:** Python `serve.py` for correct JS/CSS MIME types  
- **Hosting:** Fully client-side (compatible with GitHub Pages)

---

## 🚀 Roadmap

- [ ] Dark/satellite basemap options
- [ ] Create backend database
- [ ] Improved Table View (side-by-side with map) 
- [ ] Automated ingestion from open government & regulatory datasets  

---

## 📜 License

**MIT License © 2025 Samuel Pacheco**  
Use, modify, and adapt freely with attribution.

---
