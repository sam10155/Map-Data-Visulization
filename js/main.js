window.addEventListener('load', () => {
  initMap();

  setTimeout(() => {
    buildSearchIndex();
    attachSearchUI();
	  attachAggregationEvents();
  }, 1000);
});
