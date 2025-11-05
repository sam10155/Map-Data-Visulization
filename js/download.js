function downloadCSV() {
  const rows = [['Name','Operator','City','Province','Sector','Subcategory','Capacity','Unit','Lat','Lon']];
  Object.values(markers).forEach(items => {
    items.forEach(({ marker, facility }) => {
      if (map.hasLayer(marker)) {
        rows.push([facility.name, facility.operator||'', facility.city, facility.province,
          facility.sector, facility.subcategory, facility.capacity||0, facility.unit,
          facility.lat, facility.lon]);
      }
    });
  });
  const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'canada_industrial_capacity.csv';
  a.click();
}
