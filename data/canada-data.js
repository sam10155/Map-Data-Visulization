// ============================================================
// DATASET 1: STORAGE INFRASTRUCTURE
// ============================================================
const storageData = [
  // Oil Storage - Crude Tank Farms (Alphabetical)
  {name:'Canaport Crude Terminal',operator:'Irving Oil',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'NB',city:'Saint John',lat:45.19,lon:-66.08,capacity:9500000,unit:'bbl'},
  {name:'Cenovus Lloydminster Tank Farm',operator:'Cenovus',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'SK',city:'Lloydminster',lat:53.27,lon:-110.01,capacity:1000000,unit:'bbl'},
  {name:'Enbridge Edmonton Terminal',operator:'Enbridge',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'AB',city:'Edmonton',lat:53.580,lon:-113.417,capacity:18000000,unit:'bbl'},
  {name:'Enbridge Kerrobert Terminal',operator:'Enbridge',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'SK',city:'Kerrobert',lat:51.59,lon:-109.11,capacity:3500000,unit:'bbl'},
  {name:'Enbridge Sarnia Terminal',operator:'Enbridge',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'ON',city:'Sarnia',lat:42.960,lon:-82.340,capacity:20000000,unit:'bbl'},
  {name:'Gibson Edmonton Terminal',operator:'Gibson Energy',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'AB',city:'Edmonton',lat:53.579,lon:-113.457,capacity:1700000,unit:'bbl'},
  {name:'Gibson Hardisty Terminal',operator:'Gibson Energy',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'AB',city:'Hardisty',lat:52.672,lon:-111.319,capacity:14000000,unit:'bbl'},
  {name:'Husky (Cenovus) Lloydminster Tank Farm',operator:'Cenovus',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'SK',city:'Lloydminster',lat:53.271,lon:-110.012,capacity:1000000,unit:'bbl'},
  {name:'Husky Superior Terminal (Canada side)',operator:'Cenovus Energy',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'ON',city:'Thunder Bay',lat:48.41,lon:-89.27,capacity:500000,unit:'bbl'},
  {name:'Irving Saint John East Tank Farm',operator:'Irving',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'NB',city:'Saint John',lat:45.265,lon:-66.020,capacity:6000000,unit:'bbl'},
  {name:'Newfoundland Transshipment Whiffen Head Terminal',operator:'Newfoundland Transshipment Limited',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'NL',city:'Whiffen Head (Placentia Bay)',lat:47.40,lon:-54.00,capacity:3300000,unit:'bbl'},
  {name:'Nipisi/Atlantic Terminal Red Earth',operator:'Plains Midstream',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'AB',city:'Red Earth',lat:54.680,lon:-111.340,capacity:590000,unit:'bbl'},
  {name:'Pembina Edmonton South Terminal',operator:'Pembina',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'AB',city:'Edmonton',lat:53.523,lon:-113.373,capacity:5100000,unit:'bbl'},
  {name:'Plains Hardisty Terminal',operator:'Plains Midstream',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'AB',city:'Hardisty',lat:52.678,lon:-111.305,capacity:25000000,unit:'bbl'},
  {name:'Plains Midstream Kerrobert Terminal',operator:'Plains Midstream Canada',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'SK',city:'Kerrobert',lat:51.58,lon:-109.10,capacity:2500000,unit:'bbl'},
  {name:'Sumas Terminal Abbotsford',operator:'Trans Mountain',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'BC',city:'Sumas',lat:49.00,lon:-122.300,capacity:890000,unit:'bbl'},
  {name:'Trans Mountain Burnaby Tank Farm',operator:'Trans Mountain',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'BC',city:'Burnaby',lat:49.260,lon:-122.950,capacity:1900000,unit:'bbl'},
  {name:'Trans Mountain Westridge Marine Terminal',operator:'Trans Mountain',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'BC',city:'Burnaby (Westridge)',lat:49.308,lon:-122.979,capacity:900000,unit:'bbl'},
  {name:'Valero Lévis Refinery East Tank Farm',operator:'Valero',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'QC',city:'Lévis',lat:46.74,lon:-71.25,capacity:7000000,unit:'bbl'},

  // Oil Storage - Refined Product Terminals (Alphabetical)
  {name:'Chevron (Parkland) Langley Terminal',operator:'Parkland',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'BC',city:'Langley',lat:49.11,lon:-122.65,capacity:400000,unit:'bbl'},
  {name:'Federated Co-op Carseland Terminal',operator:'Federated Co-operatives Ltd.',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'AB',city:'Carseland',lat:50.83,lon:-113.47,capacity:800000,unit:'bbl'},
  {name:'Federated Co-op Regina Terminal',operator:'Federated Co-op',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'SK',city:'Regina',lat:50.46,lon:-104.62,capacity:800000,unit:'bbl'},
  {name:'Holyrood Fuel Oil Terminal',operator:'Newfoundland & Labrador Hydro',sector:'Oil Storage',subcategory:'Fuel Oil Terminal',province:'NL',city:'Holyrood',lat:47.54,lon:-53.96,capacity:340000,unit:'bbl'},
  {name:'Imperial Calgary Glenmore Terminal',operator:'Imperial',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'AB',city:'Calgary',lat:50.975,lon:-114.002,capacity:1000000,unit:'bbl'},
  {name:'Imperial Edmonton Terminal',operator:'Imperial',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'AB',city:'Edmonton',lat:53.560,lon:-113.480,capacity:7000000,unit:'bbl'},
  {name:'Imperial Nanticoke Terminal',operator:'Imperial',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'ON',city:'Nanticoke',lat:42.806,lon:-80.051,capacity:1800000,unit:'bbl'},
  {name:'Imperial Oil Clarkson Terminal',operator:'Imperial Oil',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'ON',city:'Mississauga (Clarkson)',lat:43.50,lon:-79.62,capacity:1200000,unit:'bbl'},
  {name:'Imperial Oil Winnipeg Terminal',operator:'Imperial Oil',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'MB',city:'Winnipeg',lat:49.85,lon:-97.12,capacity:400000,unit:'bbl'},
  {name:'Inuvik Bulk Fuel Storage Terminal',operator:'GNWT Petroleum Products Program',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'NT',city:'Inuvik',lat:68.36,lon:-133.72,capacity:157200,unit:'bbl'},
  {name:'Irving Charlottetown Fuel Terminal',operator:'Irving Oil',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'PE',city:'Charlottetown',lat:46.23,lon:-63.11,capacity:250000,unit:'bbl'},
  {name:'Irving Halifax Harbour Terminal',operator:'Irving Oil',sector:'Oil Storage',subcategory:'Refined Product Marine Terminal',province:'NS',city:'Dartmouth (Woodside)',lat:44.65,lon:-63.54,capacity:1400000,unit:'bbl'},
  {name:'Irving Saint John Product Terminal',operator:'Irving',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'NB',city:'Saint John',lat:45.264,lon:-66.050,capacity:2500000,unit:'bbl'},
  {name:'Kinder Morgan Transmix Sarnia',operator:'KML',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'ON',city:'Sarnia',lat:42.985,lon:-82.372,capacity:2000000,unit:'bbl'},
  {name:'NB Power Coleson Cove Heavy Fuel Tank Farm',operator:'NB Power',sector:'Oil Storage',subcategory:'Fuel Oil Terminal',province:'NB',city:'Saint John',lat:45.18,lon:-66.19,capacity:900000,unit:'bbl'},
  {name:'North 60 Petroleum Whitehorse Fuel Terminal',operator:'North 60 Petroleum',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'YT',city:'Whitehorse',lat:60.72,lon:-135.06,capacity:113200,unit:'bbl'},
  {name:'North Atlantic (Braya) Come-by-Chance Terminal',operator:'Braya',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'NL',city:'Come By Chance',lat:47.812,lon:-54.018,capacity:2000000,unit:'bbl'},
  {name:'North Atlantic Holyrood Fuel Terminal',operator:'Braya/NARL',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'NL',city:'Holyrood',lat:47.38,lon:-53.12,capacity:900000,unit:'bbl'},
  {name:'Parkland Bowden Terminal',operator:'Parkland Corporation',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'AB',city:'Bowden',lat:51.93,lon:-114.03,capacity:500000,unit:'bbl'},
  {name:'Parkland Burnaby Terminal',operator:'Parkland',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'BC',city:'Burnaby',lat:49.170,lon:-123.020,capacity:1200000,unit:'bbl'},
  {name:'Petro-Canada (Suncor) Charlottetown Depot',operator:'Suncor Energy',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'PE',city:'Charlottetown',lat:46.24,lon:-63.11,capacity:180000,unit:'bbl'},
  {name:'Petro-Nav Québec City Terminal',operator:'Petro-Nav',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'QC',city:'Québec',lat:46.81,lon:-71.23,capacity:700000,unit:'bbl'},
  {name:'Plains Midstream Regina Terminal',operator:'Plains Midstream Canada',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'SK',city:'Regina',lat:50.45,lon:-104.57,capacity:500000,unit:'bbl'},
  {name:'Shell Brockville Terminal',operator:'Shell',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'ON',city:'Brockville',lat:44.59,lon:-75.68,capacity:400000,unit:'bbl'},
  {name:'Shell Burnaby Terminal (Boundary Bay)',operator:'Shell',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'BC',city:'Delta',lat:49.058,lon:-123.003,capacity:800000,unit:'bbl'},
  {name:'Shell Calgary Shepard Fuel Terminal',operator:'Shell',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'AB',city:'Calgary',lat:50.968,lon:-113.930,capacity:2000000,unit:'bbl'},
  {name:'Shell Montréal-Est Product Terminal',operator:'Shell',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'QC',city:'Montréal-Est',lat:45.63,lon:-73.52,capacity:800000,unit:'bbl'},
  {name:'Shell Vancouver Terminal (Boundary Bay)',operator:'Shell',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'BC',city:'Delta',lat:49.058,lon:-123.003,capacity:800000,unit:'bbl'},
  {name:'Strait Superport Tank Terminal',operator:'Strait Superport',sector:'Oil Storage',subcategory:'Refined Product Marine Terminal',province:'NS',city:'Port Hawkesbury',lat:45.613,lon:-61.350,capacity:400000,unit:'bbl'},
  {name:'Suncor Edmonton Rack Terminal',operator:'Suncor',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'AB',city:'Edmonton',lat:53.572,lon:-113.414,capacity:3000000,unit:'bbl'},
  {name:'Suncor Montréal-Est Product Terminal',operator:'Suncor',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'QC',city:'Montréal-Est',lat:45.629,lon:-73.501,capacity:900000,unit:'bbl'},
  {name:'Suncor Oakville Product Terminal',operator:'Suncor',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'ON',city:'Oakville',lat:43.421,lon:-79.668,capacity:1500000,unit:'bbl'},
  {name:'Suncor Port Moody Fuel Terminal',operator:'Suncor',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'BC',city:'Port Moody',lat:49.29,lon:-122.87,capacity:600000,unit:'bbl'},
  {name:'Suncor Toronto Terminal',operator:'Suncor',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'ON',city:'Toronto',lat:43.72,lon:-79.25,capacity:600000,unit:'bbl'},
  {name:'Suncor Winnipeg Terminal',operator:'Suncor',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'MB',city:'Winnipeg',lat:49.87,lon:-97.10,capacity:350000,unit:'bbl'},
  {name:'Trans-Northern Kamloops Terminal',operator:'Trans-Northern Pipelines',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'BC',city:'Kamloops',lat:50.68,lon:-120.39,capacity:250000,unit:'bbl'},
  {name:'Ultramar Montreal East Tank Terminal',operator:'Valero/Ultramar',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'QC',city:'Montréal-Est',lat:45.63,lon:-73.49,capacity:850000,unit:'bbl'},
  {name:'Ultramar Ottawa Terminal',operator:'Valero',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'ON',city:'Ottawa',lat:45.37,lon:-75.64,capacity:250000,unit:'bbl'},
  {name:'Uqsuq Corporation Iqaluit Fuel Tank Farm',operator:'Uqsuq Corporation',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'NU',city:'Iqaluit',lat:63.74,lon:-68.52,capacity:232700,unit:'bbl'},
  {name:'Valero Brandon Fuel Depot',operator:'Valero',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'MB',city:'Brandon',lat:49.84,lon:-99.97,capacity:200000,unit:'bbl'},
  {name:'Valero Lévis Product Terminal',operator:'Valero',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'QC',city:'Lévis',lat:46.755,lon:-71.214,capacity:1500000,unit:'bbl'},
  {name:'Wilsons Fuels Marine Terminal',operator:'Wilsons Fuels',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'NS',city:'Halifax',lat:44.673,lon:-63.600,capacity:300000,unit:'bbl'},

  // Gas Storage - Underground (Alphabetical)
  {name:'Aitken Creek Gas Storage',operator:'Enbridge',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'BC',city:'Fort St. John (Aitken Creek)',lat:56.900,lon:-121.100,capacity:77,unit:'Bcf'},
  {name:'AltaGas Brazeau Gas Storage',operator:'AltaGas',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'AB',city:'Brazeau',lat:53.240,lon:-115.090,capacity:27,unit:'Bcf'},
  {name:'Altagas Harmattan Gas Plant Caverns',operator:'AltaGas',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'AB',city:'Didsbury',lat:51.88,lon:-114.30,capacity:8,unit:'Bcf'},
  {name:'ATCO Fort Saskatchewan Caverns',operator:'ATCO',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'AB',city:'Fort Saskatchewan',lat:53.720,lon:-113.220,capacity:40,unit:'Bcf'},
  {name:'Enbridge Dawn Hub (incl. Tecumseh Pools)',operator:'TC Energy/Enbridge',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'ON',city:'Dawn-Euphemia',lat:42.840,lon:-82.090,capacity:288,unit:'Bcf'},
  {name:'Enbridge Tecumseh (subset of Dawn complex)',operator:'Enbridge Gas',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'ON',city:'Tecumseh area',lat:42.682,lon:-82.330,capacity:95,unit:'Bcf'},
  {name:'Sarnia Airport Gas Storage Pool',operator:'Sarnia Airport Storage Pool LP',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'ON',city:'Sarnia',lat:42.999,lon:-82.308,capacity:5.94,unit:'Bcf'},
  {name:'SaskEnergy Success Gas Storage Field',operator:'SaskEnergy',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'SK',city:'Success',lat:50.50,lon:-107.70,capacity:5,unit:'Bcf'},
  {name:'TC Energy Dawn Hub',operator:'TC Energy',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'ON',city:'Dawn-Euphemia',lat:42.840,lon:-82.090,capacity:288,unit:'Bcf'},
  
  // Gas Storage - LNG (Alphabetical)
  {name:'Canaport LNG Terminal',operator:'Repsol/Irving',sector:'Gas Storage',subcategory:'LNG Storage',province:'NB',city:'Saint John',lat:45.19,lon:-66.09,capacity:472000,unit:'m3'},
  {name:'Énergir Montréal-Est LNG Storage',operator:'Énergir',sector:'Gas Storage',subcategory:'LNG Storage',province:'QC',city:'Montréal-Est',lat:45.620,lon:-73.490,capacity:20000,unit:'m3'},
  {name:'FortisBC Tilbury LNG Storage',operator:'FortisBC',sector:'Gas Storage',subcategory:'LNG Storage',province:'BC',city:'Delta (Tilbury)',lat:49.130,lon:-123.060,capacity:46000,unit:'m3'},
  {name:'Heritage Gas Halifax LNG Peak Shaving Facility',operator:'Heritage Gas',sector:'Gas Storage',subcategory:'LNG Storage',province:'NS',city:'Dartmouth',lat:44.69,lon:-63.56,capacity:4000,unit:'m3'},
  {name:'Kitimat LNG (LNG Canada) Storage',operator:'LNG Canada',sector:'Gas Storage',subcategory:'LNG Storage',province:'BC',city:'Kitimat',lat:54.050,lon:-128.650,capacity:140000,unit:'m3'},
  {name:'Woodfibre LNG Site Storage',operator:'Woodfibre LNG',sector:'Gas Storage',subcategory:'LNG Storage',province:'BC',city:'Squamish',lat:49.645,lon:-123.153,capacity:125000,unit:'m3'},

  // Gas Storage - LPG/NGL (Alphabetical)
  {name:'AltaGas Harmattan NGL Caverns',operator:'AltaGas',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'AB',city:'Didsbury (Harmattan)',lat:51.88,lon:-114.31,capacity:2500000,unit:'bbl'},
  {name:'Cochin Pipeline Terminal (LPG/NGL)',operator:'Kinder Morgan',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'SK',city:'Maidstone',lat:53.08,lon:-109.28,capacity:1000000,unit:'bbl'},
  {name:'Ferus Natural Gas Liquids Elmworth Caverns',operator:'Ferus NGL',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'AB',city:'Elmworth',lat:55.13,lon:-119.60,capacity:2000000,unit:'bbl'},
  {name:'Kenmac Energy Bulk Terminal',operator:'Kenmac Energy',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'PE',city:'Charlottetown',lat:46.25,lon:-63.10,capacity:60000,unit:'bbl'},
  {name:'Keyera Fort Saskatchewan Caverns',operator:'Keyera',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'AB',city:'Fort Saskatchewan',lat:53.713,lon:-113.229,capacity:8000000,unit:'bbl'},
  {name:'Pembina Redwater Cavern LPG',operator:'Pembina',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'AB',city:'Redwater',lat:53.930,lon:-113.100,capacity:3000000,unit:'bbl'},
  {name:'Pembina Winnipeg LPG Terminal',operator:'Pembina Pipeline Corp.',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'MB',city:'Winnipeg',lat:49.85,lon:-97.06,capacity:90000,unit:'bbl'},
  {name:'Plains Fort Saskatchewan NGL Storage',operator:'Plains Midstream',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'AB',city:'Fort Saskatchewan',lat:53.72,lon:-113.22,capacity:7000000,unit:'bbl'},
  {name:'Plains Midstream Sarnia NGL Storage',operator:'Plains Midstream',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'ON',city:'Sarnia',lat:42.990,lon:-82.380,capacity:2000000,unit:'bbl'},
  {name:'RIPET (Ridley Island Propane Export) Tanks',operator:'AltaGas',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'BC',city:'Prince Rupert',lat:54.218,lon:-130.321,capacity:1000000,unit:'bbl'},

  // Agricultural Storage - Grain Elevators (West Coast) - Alphabetical
  {name:'Alliance Grain Terminal (Vancouver)',operator:'AGT',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Vancouver',lat:49.300,lon:-123.065,capacity:282830,unit:'tonnes'},
  {name:'Fraser Grain Terminal',operator:'FNA/P&H',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Surrey',lat:49.167,lon:-122.923,capacity:160000,unit:'tonnes'},
  {name:'G3 Terminal Vancouver',operator:'G3',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'North Vancouver',lat:49.310,lon:-123.070,capacity:180000,unit:'tonnes'},
  {name:'Parrish & Heimbecker Kamloops',operator:'P&H',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Kamloops',lat:50.692,lon:-120.342,capacity:45000,unit:'tonnes'},
  {name:'Richardson Kelowna Agri',operator:'Richardson',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Kelowna',lat:49.892,lon:-119.435,capacity:20000,unit:'tonnes'},
  {name:'Richardson Prince Rupert Terminal',operator:'Richardson',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Prince Rupert',lat:54.310,lon:-130.350,capacity:200000,unit:'tonnes'},
  {name:'Richardson Vancouver Terminal',operator:'Richardson',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Vancouver',lat:49.296,lon:-123.069,capacity:200000,unit:'tonnes'},
  {name:'Viterra Pacific Terminal (Vancouver)',operator:'Viterra',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Vancouver',lat:49.290,lon:-123.060,capacity:275000,unit:'tonnes'},
  {name:'Viterra Vernon Agri',operator:'Viterra',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Vernon',lat:50.260,lon:-119.274,capacity:25000,unit:'tonnes'},

  // Agricultural Storage - Grain Elevators (Ontario) - Alphabetical
  {name:'Cargill Thunder Bay Terminal',operator:'Cargill',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Thunder Bay',lat:48.385,lon:-89.236,capacity:250000,unit:'tonnes'},
  {name:'G3 Hamilton',operator:'G3',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Hamilton',lat:43.278,lon:-79.857,capacity:120000,unit:'tonnes'},
  {name:'Goderich Grain Terminal (P&H)',operator:'P&H',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Goderich',lat:43.74,lon:-81.72,capacity:100000,unit:'tonnes'},
  {name:'Great Lakes Grain Goderich',operator:'Great Lakes Grain',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Goderich',lat:43.741,lon:-81.710,capacity:120000,unit:'tonnes'},
  {name:'Oshawa Grain Terminal',operator:'QSL/Partners',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Oshawa',lat:43.875,lon:-78.804,capacity:20000,unit:'tonnes'},
  {name:'P&H Hamilton Grain',operator:'P&H',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Hamilton',lat:43.270,lon:-79.860,capacity:150000,unit:'tonnes'},
  {name:'Parrish & Heimbecker Thunder Bay',operator:'P&H',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Thunder Bay',lat:48.401,lon:-89.245,capacity:150000,unit:'tonnes'},
  {name:'Richardson Port Terminal (Hamilton)',operator:'Richardson International',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Hamilton',lat:43.27,lon:-79.86,capacity:100000,unit:'tonnes'},
  {name:'Richardson Thunder Bay Terminal',operator:'Richardson',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Thunder Bay',lat:48.420,lon:-89.200,capacity:200000,unit:'tonnes'},
  {name:'Viterra Thunder Bay Elevator',operator:'Viterra',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Thunder Bay',lat:48.415,lon:-89.210,capacity:180000,unit:'tonnes'},
  
  // Agricultural Storage - Grain Elevators (Quebec) - Alphabetical
  {name:'Québec City Grain Terminal',operator:'Sollio',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'QC',city:'Québec',lat:46.835,lon:-71.205,capacity:200000,unit:'tonnes'},
  {name:'Sollio (La Coop) Montreal Terminal',operator:'Sollio',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'QC',city:'Montréal',lat:45.545,lon:-73.500,capacity:160000,unit:'tonnes'},
  {name:'Sollio Trois-Rivières Grain',operator:'Sollio',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'QC',city:'Trois-Rivières',lat:46.360,lon:-72.558,capacity:70000,unit:'tonnes'},
  {name:'Viterra Montreal Grain Terminal',operator:'Viterra',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'QC',city:'Montréal',lat:45.520,lon:-73.520,capacity:180000,unit:'tonnes'},

  // Agricultural Storage - Grain Elevators (Prairies) - Alphabetical
  {name:'Cargill Clavet Canola',operator:'Cargill',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'SK',city:'Clavet',lat:52.047,lon:-106.352,capacity:200000,unit:'tonnes'},
  {name:'G3 St. Adolphe Terminal',operator:'G3 Canada',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'MB',city:'St. Adolphe',lat:49.69,lon:-97.11,capacity:70000,unit:'tonnes'},
  {name:'Parrish & Heimbecker Gladstone Elevator',operator:'P&H',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'MB',city:'Gladstone',lat:50.22,lon:-98.94,capacity:80000,unit:'tonnes'},
  {name:'Parrish & Heimbecker Moose Jaw Elevator',operator:'P&H',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'SK',city:'Moose Jaw',lat:50.38,lon:-105.54,capacity:80000,unit:'tonnes'},
  {name:'Parrish & Heimbecker Saskatoon Elevator',operator:'P&H',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'SK',city:'Saskatoon',lat:52.11,lon:-106.68,capacity:100000,unit:'tonnes'},
  {name:'Port of Churchill Grain Terminal',operator:'Arctic Gateway Group',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'MB',city:'Churchill',lat:58.768,lon:-94.165,capacity:140000,unit:'tonnes'},
  {name:'Richardson Swift Current Grain Terminal',operator:'Richardson International',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'SK',city:'Swift Current',lat:50.28,lon:-107.80,capacity:120000,unit:'tonnes'},
  {name:'Richardson Winnipeg Terminal',operator:'Richardson',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'MB',city:'Winnipeg',lat:49.900,lon:-97.140,capacity:250000,unit:'tonnes'},
  {name:'Viterra Brandon Grain Terminal',operator:'Viterra',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'MB',city:'Brandon',lat:49.85,lon:-99.96,capacity:110000,unit:'tonnes'},
  {name:'Viterra Moose Jaw',operator:'Viterra',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'SK',city:'Moose Jaw',lat:50.393,lon:-105.551,capacity:120000,unit:'tonnes'},
  {name:'Viterra Vegreville Grain Terminal',operator:'Viterra',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'AB',city:'Vegreville',lat:53.49,lon:-112.04,capacity:60000,unit:'tonnes'},

  // Agricultural Storage - Fertilizer (Alphabetical)
  {name:'CF Industries Courtright Fertilizer Terminal',operator:'CF Industries',sector:'Agricultural Storage',subcategory:'Fertilizer Terminal',province:'ON',city:'Courtright',lat:42.83,lon:-82.48,capacity:250000,unit:'tonnes'},
  {name:'CF Industries Portage la Prairie Terminal',operator:'CF Industries',sector:'Agricultural Storage',subcategory:'Fertilizer Terminal',province:'MB',city:'Portage la Prairie',lat:49.97,lon:-98.28,capacity:120000,unit:'tonnes'},
  {name:'G3 Hamilton Fertilizer Shed',operator:'G3',sector:'Agricultural Storage',subcategory:'Fertilizer Terminal',province:'ON',city:'Hamilton',lat:43.271,lon:-79.856,capacity:80000,unit:'tonnes'},
  {name:'Koch Fertilizer Terminal Stoney Creek',operator:'Koch Fertilizer',sector:'Agricultural Storage',subcategory:'Fertilizer Terminal',province:'ON',city:'Stoney Creek',lat:43.20,lon:-79.75,capacity:100000,unit:'tonnes'},
  {name:'Nutrien Brandon Fertilizer Terminal',operator:'Nutrien',sector:'Agricultural Storage',subcategory:'Fertilizer Terminal',province:'MB',city:'Brandon',lat:49.85,lon:-99.95,capacity:100000,unit:'tonnes'},
  {name:'Nutrien Carseland Product Terminal',operator:'Nutrien',sector:'Agricultural Storage',subcategory:'Fertilizer Terminal',province:'AB',city:'Carseland',lat:50.841,lon:-113.464,capacity:200000,unit:'tonnes'},
  {name:'Nutrien Harrow Fertilizer Warehouse',operator:'Nutrien Ag Solutions',sector:'Agricultural Storage',subcategory:'Fertilizer Terminal',province:'ON',city:'Harrow',lat:42.03,lon:-82.92,capacity:80000,unit:'tonnes'}, 
  {name:'Nutrien Redwater Fertilizer',operator:'Nutrien',sector:'Agricultural Storage',subcategory:'Fertilizer Terminal',province:'AB',city:'Redwater',lat:53.950,lon:-113.100,capacity:300000,unit:'tonnes'},
  {name:'Nutrien Rocanville Potash Mill',operator:'Nutrien',sector:'Agricultural Processing',subcategory:'Fertilizer Mill',province:'SK',city:'Rocanville',lat:50.47,lon:-102.33,capacity:2.7,unit:'MTPA'},
  {name:'Yara Belle Plaine Warehouse',operator:'Yara',sector:'Agricultural Storage',subcategory:'Fertilizer Terminal',province:'SK',city:'Belle Plaine',lat:50.469,lon:-105.080,capacity:150000,unit:'tonnes'},
  
  // Bulk Commodities - Coal/Ore Stockyards (Alphabetical)
  {name:'Algoma Steel Marine Terminal',operator:'Algoma Steel',sector:'Bulk Commodities',subcategory:'Steel Raw Material Dock',province:'ON',city:'Sault Ste. Marie',lat:46.53,lon:-84.36,capacity:1000000,unit:'tonnes'},
  {name:'Baffinland Milne Inlet Port & Stockyard',operator:'Baffinland Iron Mines',sector:'Bulk Commodities',subcategory:'Iron Ore Stockyard',province:'NU',city:'Milne Inlet',lat:71.26,lon:-80.03,capacity:6000000,unit:'tonnes'},
  {name:'Chemainus Log Sort Yard',operator:'Western Forest Products',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Chemainus',lat:48.919,lon:-123.726,capacity:200000,unit:'tonnes'},
  {name:'Corner Brook Pulp & Paper Storage',operator:'Kruger',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'NL',city:'Corner Brook',lat:48.950,lon:-57.931,capacity:250000,unit:'tonnes'},
  {name:'Duke Point Wood Pellet Terminal',operator:'Nanaimo Port Authority',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Nanaimo',lat:49.138,lon:-123.882,capacity:300000,unit:'tonnes'},
  {name:'Fibreco Export (Pellet Storage)',operator:'Fibreco',sector:'Bulk Commodities',subcategory:'Wood Pellet Storage',province:'BC',city:'North Vancouver',lat:49.313,lon:-123.084,capacity:21500,unit:'tonnes'},
  {name:'Fibreco Export (Wood Pellets)',operator:'Fibreco',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'North Vancouver',lat:49.314,lon:-123.078,capacity:500000,unit:'tonnes'},
  {name:'Halifax Ocean Terminals Bulk Facility',operator:'PSA/QSL',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'NS',city:'Halifax',lat:44.646,lon:-63.569,capacity:500000,unit:'tonnes'},
  {name:'Highland Valley Copper Concentrate Storage',operator:'Teck Resources',sector:'Bulk Commodities',subcategory:'Copper Concentrate Storage',province:'BC',city:'Logan Lake',lat:50.47,lon:-121.03,capacity:400000,unit:'tonnes'},
  {name:'Lafarge Exshaw Clinker Yard',operator:'Lafarge',sector:'Bulk Commodities',subcategory:'Potash/Cement Storage',province:'AB',city:'Exshaw',lat:51.086,lon:-115.190,capacity:250000,unit:'tonnes'},
  {name:'Mulgrave Marine Terminal',operator:'Strait Superport',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'NS',city:'Mulgrave',lat:45.615,lon:-61.395,capacity:250000,unit:'tonnes'},
  {name:'Neptune Potash Storage (NVT)',operator:'Neptune/Canpotex',sector:'Bulk Commodities',subcategory:'Potash/Cement Storage',province:'BC',city:'Vancouver (North Shore)',lat:49.312,lon:-123.086,capacity:210000,unit:'tonnes'},
  {name:'Neptune Terminals (Coal)',operator:'Neptune',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Vancouver (North Shore)',lat:49.310,lon:-123.070,capacity:1500000,unit:'tonnes'},
  {name:'Pacific Coast Terminals (Sulphur/Potash)',operator:'PCT',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Port Moody',lat:49.290,lon:-122.880,capacity:1300000,unit:'tonnes'},
  {name:'Port Alberni Log Export Yard',operator:'Port Alberni Port Authority',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Port Alberni',lat:49.23,lon:-124.82,capacity:400000,unit:'tonnes'},
  {name:'Port of Argentia Cooper Cove Marine Terminal',operator:'Port of Argentia',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'NL',city:'Argentia',lat:47.28,lon:-53.99,capacity:500000,unit:'tonnes'},
  {name:'Port of Baie-Comeau Bulk Terminal',operator:'QSL',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'QC',city:'Baie-Comeau',lat:49.21,lon:-68.15,capacity:400000,unit:'tonnes'},
  {name:'Port of Bayside General Cargo Terminal',operator:'Port Saint John Authority',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'NB',city:'Bayside',lat:45.11,lon:-67.12,capacity:300000,unit:'tonnes'},
  {name:'Port of Belledune Bulk Terminal',operator:'Belledune Port Authority',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'NB',city:'Belledune',lat:47.91,lon:-65.82,capacity:1000000,unit:'tonnes'},
  {name:'Port of Charlottetown Marine Terminal',operator:'Charlottetown Port Authority',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'PE',city:'Charlottetown',lat:46.23,lon:-63.12,capacity:200000,unit:'tonnes'},
  {name:'Port of Churchill Fuel & Ore Dock',operator:'Arctic Gateway Group',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'MB',city:'Churchill',lat:58.77,lon:-94.18,capacity:200000,unit:'tonnes'}, 
  {name:'Port of Goderich Salt Dock',operator:'Windsor Salt',sector:'Bulk Commodities',subcategory:'Salt Export Terminal',province:'ON',city:'Goderich',lat:43.75,lon:-81.71,capacity:500000,unit:'tonnes'},
  {name:'Port of Hamilton Bulk Terminal (P&H/ArcelorMittal)',operator:'Hamilton-Oshawa Port Authority',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'ON',city:'Hamilton',lat:43.27,lon:-79.85,capacity:1500000,unit:'tonnes'},
  {name:'Port of Kitimat Rio Tinto Wharf',operator:'Rio Tinto',sector:'Bulk Commodities',subcategory:'Aluminum/Raw Materials',province:'BC',city:'Kitimat',lat:54.02,lon:-128.67,capacity:500000,unit:'tonnes'},  
  {name:'Port of Oshawa Bulk Terminal',operator:'Hamilton-Oshawa Port Authority',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'ON',city:'Oshawa',lat:43.88,lon:-78.79,capacity:400000,unit:'tonnes'},
  {name:'Port of Saguenay La Baie Bulk Terminal',operator:'Saguenay Port Authority',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'QC',city:'La Baie (Saguenay)',lat:48.34,lon:-70.88,capacity:250000,unit:'tonnes'},
  {name:'Port of Saint John Dry Bulk Terminal',operator:'NB Power',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'NB',city:'Saint John',lat:45.24,lon:-66.05,capacity:1500000,unit:'tonnes'},
  {name:'Port of Sept-Îles Multi-User Dock',operator:'Sept-Îles Port Authority',sector:'Bulk Commodities',subcategory:'Iron Ore Terminal',province:'QC',city:'Sept-Îles',lat:50.21,lon:-66.38,capacity:5000000,unit:'tonnes'},
  {name:'Port of Sheet Harbour Bulk Terminal',operator:'Ceres/Port Authority',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'NS',city:'Sheet Harbour',lat:44.910,lon:-62.539,capacity:350000,unit:'tonnes'},
  {name:'Port of Summerside Bulk Dock',operator:'Summerside Port Corporation',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'PE',city:'Summerside',lat:46.39,lon:-63.78,capacity:120000,unit:'tonnes'},
  {name:'Port of Thunder Bay Keefer Terminal',operator:'Thunder Bay Port Authority',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'ON',city:'Thunder Bay',lat:48.41,lon:-89.23,capacity:400000,unit:'tonnes'},
  {name:'Port of Trois-Rivières Bulk Dock',operator:'Trois-Rivières Port Authority',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'QC',city:'Trois-Rivières',lat:46.36,lon:-72.55,capacity:300000,unit:'tonnes'},
  {name:'Port of Windsor Bulk Dock',operator:'Windsor Port Authority',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'ON',city:'Windsor',lat:42.30,lon:-83.06,capacity:600000,unit:'tonnes'},
  {name:'Prince Rupert Ridley Island Export Logistics (RIEL)',operator:'Ray-Mont Logistics',sector:'Bulk Commodities',subcategory:'Transload Facility',province:'BC',city:'Prince Rupert',lat:54.27,lon:-130.31,capacity:500000,unit:'tonnes'},
  {name:'QSL Sorel-Tracy Bulk Terminal',operator:'QSL',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'QC',city:'Sorel-Tracy',lat:46.043,lon:-73.123,capacity:400000,unit:'tonnes'},
  {name:'Quebec City Bulk Terminal',operator:'QSL',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'QC',city:'Québec',lat:46.831,lon:-71.207,capacity:400000,unit:'tonnes'},
  {name:'Ridley Terminals (RTI) Bulk',operator:'RTI',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Prince Rupert',lat:54.219,lon:-130.335,capacity:1200000,unit:'tonnes'},
  {name:'Sydney Marine Terminal Bulk Facility',operator:'Logistec',sector:'Bulk Commodities',subcategory:'General Bulk Terminal',province:'NS',city:'Sydney',lat:46.148,lon:-60.194,capacity:300000,unit:'tonnes'},
  {name:'Trigon Pacific Terminals (Coal/Petcoke)',operator:'Trigon',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Prince Rupert',lat:54.240,lon:-130.317,capacity:1800000,unit:'tonnes'},
  {name:'Vancouver Wharves (General Bulk)',operator:'DP World',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'North Vancouver',lat:49.314,lon:-123.102,capacity:600000,unit:'tonnes'},
  {name:'Westshore Terminals (Coal)',operator:'Westshore',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Delta (Roberts Bank)',lat:49.020,lon:-123.160,capacity:2000000,unit:'tonnes'},
  {name:'Westview (Prince Rupert) Pellet Storage',operator:'Drax/Westview',sector:'Bulk Commodities',subcategory:'Wood Pellet Storage',province:'BC',city:'Prince Rupert',lat:54.319,lon:-130.342,capacity:210000,unit:'tonnes'},

  // Bulk Commodities - Potash/Cement (Alphabetical)
  {name:'Lafarge Nanaimo Cement Terminal',operator:'Lafarge',sector:'Bulk Commodities',subcategory:'Potash/Cement Storage',province:'BC',city:'Nanaimo',lat:49.17,lon:-123.94,capacity:50000,unit:'tonnes'},
  {name:'Nutrien Vancouver (North Shore)',operator:'Nutrien',sector:'Bulk Commodities',subcategory:'Potash/Cement Storage',province:'BC',city:'Vancouver',lat:49.300,lon:-123.040,capacity:500000,unit:'tonnes'},
  {name:'St. Marys Bowmanville Clinker Storage',operator:'St. Marys',sector:'Bulk Commodities',subcategory:'Potash/Cement Storage',province:'ON',city:'Bowmanville',lat:43.900,lon:-78.690,capacity:300000,unit:'tonnes'},

  // Container & Intermodal - Seaport Terminals (Alphabetical)
  {name:'Annacis Auto Terminal',operator:'WWL/TSI',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'BC',city:'Delta (Annacis)',lat:49.168,lon:-122.936,capacity:300000,unit:'TEU/yr'},
  {name:'Autoport (Ro-Ro Vehicle Terminal)',operator:'Autoport',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'NS',city:'Halifax (Eastern Passage)',lat:44.622,lon:-63.468,capacity:200000,unit:'TEU/yr'},
  {name:'CN Halifax Fairview Cove Terminal',operator:'CN/PSA',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'NS',city:'Halifax',lat:44.67,lon:-63.61,capacity:600000,unit:'TEU/yr'},
  {name:'Corner Brook Port Multi-User Terminal',operator:'Corner Brook Port Corporation',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'NL',city:'Corner Brook',lat:48.95,lon:-57.93,capacity:6000,unit:'TEU/yr'},
  {name:'DP World Saint John',operator:'DP World',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'NB',city:'Saint John',lat:45.260,lon:-66.050,capacity:300000,unit:'TEU/yr'},
  {name:'Fraser Surrey (Multi-purpose)',operator:'DP World',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'BC',city:'Surrey',lat:49.165,lon:-122.930,capacity:400000,unit:'TEU/yr'},
  {name:'Fraser Wharves Auto Terminal',operator:'WWL',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'BC',city:'Richmond',lat:49.164,lon:-123.154,capacity:250000,unit:'TEU/yr'},
  {name:'Oceanex St. Johns Terminal Yard',operator:'Oceanex',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'NL',city:'St. Johns',lat:47.566,lon:-52.706,capacity:220000,unit:'TEU/yr'},
  {name:'Port of Montreal (Termont/PSA)',operator:'Termont/PSA',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'QC',city:'Montréal',lat:45.540,lon:-73.520,capacity:2000000,unit:'TEU/yr'},
  {name:'Port of Nanaimo Vehicle Processing Centre',operator:'Nanaimo Port Authority',sector:'Container & Intermodal',subcategory:'Seaport Vehicle/Container',province:'BC',city:'Nanaimo (Duke Point)',lat:49.170,lon:-123.936,capacity:45000,unit:'TEU/yr'},
  {name:'Prince Rupert Fairview Container Terminal',operator:'PSA/DP World',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'BC',city:'Prince Rupert',lat:54.250,lon:-130.330,capacity:1500000,unit:'TEU/yr'},
  {name:'PSA Halifax Atlantic Hub',operator:'PSA',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'NS',city:'Halifax',lat:44.650,lon:-63.570,capacity:1000000,unit:'TEU/yr'},
  {name:'Vancouver Centerm',operator:'DP World',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'BC',city:'Vancouver',lat:49.288,lon:-123.095,capacity:1800000,unit:'TEU/yr'},
  {name:'Vancouver Deltaport (T2/T3)',operator:'GCT',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'BC',city:'Delta (Roberts Bank)',lat:49.010,lon:-123.140,capacity:2400000,unit:'TEU/yr'},
  {name:'Vancouver Vanterm',operator:'GCT',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'BC',city:'Vancouver',lat:49.287,lon:-123.094,capacity:1000000,unit:'TEU/yr'},

  // Container & Intermodal - Inland Terminals (Alphabetical)
  {name:'CentrePort Winnipeg (Inland Port)',operator:'CentrePort',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'MB',city:'Winnipeg',lat:49.940,lon:-97.250,capacity:400000,unit:'TEU/yr'},
  {name:'CN Brampton Intermodal',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'ON',city:'Brampton',lat:43.720,lon:-79.670,capacity:750000,unit:'TEU/yr'},
  {name:'CN Calgary Logistics Park',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'AB',city:'Rocky View (Calgary)',lat:51.150,lon:-113.870,capacity:800000,unit:'TEU/yr'},
  {name:'CN Edmonton Intermodal',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'AB',city:'Edmonton',lat:53.570,lon:-113.500,capacity:500000,unit:'TEU/yr'},
  {name:'CN Edmonton Logistics Park Expansion',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'AB',city:'Edmonton',lat:53.57,lon:-113.50,capacity:800000,unit:'TEU/yr'},
  {name:'CN London Intermodal Terminal',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'ON',city:'London',lat:42.94,lon:-81.24,capacity:250000,unit:'TEU/yr'},
  {name:'CN Milton Logistics Hub',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'ON',city:'Milton',lat:43.54,lon:-79.89,capacity:450000,unit:'TEU/yr'},
  {name:'CN Moncton Intermodal',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'NB',city:'Moncton',lat:46.113,lon:-64.805,capacity:200000,unit:'TEU/yr'},
  {name:'CN Prince George Intermodal',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'BC',city:'Prince George',lat:53.892,lon:-122.736,capacity:200000,unit:'TEU/yr'},
  {name:'CN Quebec City Yard Intermodal',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'QC',city:'Québec',lat:46.80,lon:-71.25,capacity:200000,unit:'TEU/yr'},
  {name:'CN Saskatoon Intermodal',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'SK',city:'Saskatoon',lat:52.142,lon:-106.675,capacity:250000,unit:'TEU/yr'},
  {name:'CN Taschereau Yard Intermodal',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'QC',city:'Montréal (Taschereau)',lat:45.485,lon:-73.695,capacity:800000,unit:'TEU/yr'},
  {name:'CN Winnipeg Intermodal Terminal (Symington)',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'MB',city:'Winnipeg',lat:49.85,lon:-97.06,capacity:450000,unit:'TEU/yr'},
  {name:'CP Lachine Intermodal Terminal',operator:'CPKC',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'QC',city:'Lachine',lat:45.45,lon:-73.67,capacity:500000,unit:'TEU/yr'},
  {name:'CP Regina Intermodal Terminal',operator:'CPKC',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'SK',city:'Regina',lat:50.46,lon:-104.61,capacity:250000,unit:'TEU/yr'},
  {name:'CP Winnipeg Intermodal Terminal (Yard)',operator:'CPKC',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'MB',city:'Winnipeg',lat:49.87,lon:-97.17,capacity:400000,unit:'TEU/yr'},
  {name:'CPKC Calgary Intermodal (Alyth)',operator:'CPKC',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'AB',city:'Calgary',lat:51.025,lon:-114.023,capacity:400000,unit:'TEU/yr'},
  {name:'CPKC Pitt Meadows Logistics Hub',operator:'CPKC',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'BC',city:'Pitt Meadows',lat:49.22,lon:-122.68,capacity:300000,unit:'TEU/yr'},
  {name:'CPKC Toronto Agincourt Yard',operator:'CPKC',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'ON',city:'Scarborough (Agincourt)',lat:43.77,lon:-79.29,capacity:300000,unit:'TEU/yr'},
  {name:'CPKC Vaughan Intermodal',operator:'CPKC',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'ON',city:'Vaughan',lat:43.850,lon:-79.560,capacity:600000,unit:'TEU/yr'},
  {name:'Regina Global Transportation Hub',operator:'GTH',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'SK',city:'Regina',lat:50.420,lon:-104.760,capacity:200000,unit:'TEU/yr'}
];

// ============================================================
// DATASET 2: OIL & GAS PROCESSING
// ============================================================
const oilGasProcessingData = [
  // Oil Processing – Domestic Refineries
  {name:'Cenovus Lloydminster Upgrader/Refinery',operator:'Cenovus',sector:'Oil Processing',subcategory:'Domestic Crude Refinery',province:'AB',city:'Lloydminster',lat:53.285,lon:-110.012,capacity:115,unit:'kbbl/d'},
  {name:'CNRL Albian Sands Muskeg River Upgrader',operator:'CNRL',sector:'Oil Processing',subcategory:'Bitumen Upgrader',province:'AB',city:'Fort McMurray Region',lat:57.17,lon:-111.58,capacity:155,unit:'kbbl/d'},
  {name:'CNRL Horizon Upgrader',operator:'CNRL',sector:'Oil Processing',subcategory:'Bitumen Upgrader',province:'AB',city:'Fort McMurray',lat:57.32,lon:-111.78,capacity:250,unit:'kbbl/d'},
  {name:'Co-op Refinery Complex Regina',operator:'FCL',sector:'Oil Processing',subcategory:'Domestic Crude Refinery',province:'SK',city:'Regina',lat:50.49,lon:-104.56,capacity:130,unit:'kbbl/d'},
  {name:'Imperial Norman Wells Central Processing Facility',operator:'Imperial Oil',sector:'Oil Processing',subcategory:'Oil Processing Plant',province:'NT',city:'Norman Wells',lat:65.28,lon:-126.83,capacity:11,unit:'kbbl/d'},
  {name:'Imperial Oil Nanticoke Refinery',operator:'Imperial Oil',sector:'Oil Processing',subcategory:'Domestic Crude Refinery',province:'ON',city:'Nanticoke',lat:42.80,lon:-80.05,capacity:113.0,unit:'kbbl/d'},
  {name:'Imperial Oil Sarnia Refinery',operator:'Imperial Oil',sector:'Oil Processing',subcategory:'Domestic Crude Refinery',province:'ON',city:'Sarnia',lat:42.997,lon:-82.381,capacity:121,unit:'kbbl/d'},
  {name:'Imperial Strathcona Refinery',operator:'Imperial Oil',sector:'Oil Processing',subcategory:'Domestic Crude Refinery',province:'AB',city:'Strathcona County',lat:53.57,lon:-113.36,capacity:191,unit:'kbbl/d'},
  {name:'Irving Oil Refinery',operator:'Irving Oil',sector:'Oil Processing',subcategory:'Domestic Crude Refinery',province:'NB',city:'Saint John',lat:45.26,lon:-66.05,capacity:320000,unit:'bbl/d'},
  {name:'North West Redwater Sturgeon Refinery',operator:'NW Redwater Partnership',sector:'Oil Processing',subcategory:'Domestic Crude Refinery',province:'AB',city:'Sturgeon County',lat:53.88,lon:-113.32,capacity:80,unit:'kbbl/d'},
  {name:'Parkland Prince George Refinery',operator:'Parkland',sector:'Oil Processing',subcategory:'Domestic Crude Refinery',province:'BC',city:'Prince George',lat:53.95,lon:-122.78,capacity:12.0,unit:'kbbl/d'},
  {name:'Shell Scotford Upgrader',operator:'Shell Canada',sector:'Oil Processing',subcategory:'Bitumen Upgrader',province:'AB',city:'Fort Saskatchewan',lat:53.77,lon:-113.17,capacity:255,unit:'kbbl/d'},
  {name:'Suncor Base Plant Upgrader',operator:'Suncor',sector:'Oil Processing',subcategory:'Bitumen Upgrader',province:'AB',city:'Fort McMurray',lat:56.99,lon:-111.46,capacity:350,unit:'kbbl/d'},
  {name:'Suncor Edmonton Refinery',operator:'Suncor',sector:'Oil Processing',subcategory:'Domestic Crude Refinery',province:'AB',city:'Edmonton',lat:53.61,lon:-113.22,capacity:146,unit:'kbbl/d'},
  {name:'Suncor Fort Hills Bitumen Plant',operator:'Suncor',sector:'Oil Processing',subcategory:'Bitumen Upgrader',province:'AB',city:'Fort McMurray (Fort Hills)',lat:57.34,lon:-111.55,capacity:194,unit:'kbbl/d'},
  {name:'Syncrude Mildred Lake Upgrader',operator:'Suncor/Syncrude',sector:'Oil Processing',subcategory:'Bitumen Upgrader',province:'AB',city:'Fort McMurray',lat:57.03,lon:-111.61,capacity:350,unit:'kbbl/d'},

  // Oil Processing – Offshore Refineries
  {name:'Braya Refining (Renewables conversion site)',operator:'Braya',sector:'Oil Processing',subcategory:'Offshore Crude Refinery',province:'NL',city:'Come-by-Chance',lat:47.81,lon:-54.02,capacity:0,unit:'kbbl/d'},
  {name:'Irving Oil Saint John Refinery',operator:'Irving Oil',sector:'Oil Processing',subcategory:'Offshore Crude Refinery',province:'NB',city:'Saint John',lat:45.27,lon:-66.03,capacity:320,unit:'kbbl/d'},
  {name:'Suncor Montréal Refinery',operator:'Suncor',sector:'Oil Processing',subcategory:'Offshore Crude Refinery',province:'QC',city:'Montréal',lat:45.62,lon:-73.56,capacity:137,unit:'kbbl/d'},
  {name:'Valero Jean Gaulin Refinery (Lévis)',operator:'Valero',sector:'Oil Processing',subcategory:'Offshore Crude Refinery',province:'QC',city:'Lévis',lat:46.75,lon:-71.21,capacity:265,unit:'kbbl/d'},

  // Oil Processing – Petrochemical / Feedstock
  {name:'Dow Fort Saskatchewan Ethylene Complex',operator:'Dow',sector:'Oil Processing',subcategory:'Petrochemical/Feedstock',province:'AB',city:'Fort Saskatchewan',lat:53.71,lon:-113.19,capacity:180,unit:'kbbl/d eq'},
  {name:'NOVA Chemicals Corunna (Cracker/Fractionation)',operator:'NOVA Chemicals',sector:'Oil Processing',subcategory:'Petrochemical/Feedstock',province:'ON',city:'Corunna',lat:42.90,lon:-82.42,capacity:150,unit:'kbbl/d eq'},

  // Petrochemicals / Polymers
  {name:'Inter Pipeline Heartland PP Complex',operator:'Inter Pipeline',sector:'Oil Processing',subcategory:'Petrochemical/Polypropylene',province:'AB',city:'Strathcona County',lat:53.754,lon:-113.128,capacity:525,unit:'kT/yr'},
  {name:'NOVA Chemicals Joffre Complex (Ethylene)',operator:'NOVA Chemicals',sector:'Oil Processing',subcategory:'Petrochemical/Feedstock',province:'AB',city:'Joffre',lat:52.259,lon:-113.535,capacity:2800,unit:'kT/yr'},
  {name:'Pembina PDH/PP (Redwater)',operator:'Pembina',sector:'Oil Processing',subcategory:'Petrochemical/PDH+PP',province:'AB',city:'Redwater',lat:53.952,lon:-113.106,capacity:550,unit:'kT/yr'},

  // Oil Processing – Renewables
  {name:'Braya Renewable Fuels (Come-by-Chance)',operator:'Braya',sector:'Oil Processing',subcategory:'Renewables',province:'NL',city:'Come-by-Chance',lat:47.81,lon:-54.02,capacity:18.0,unit:'kbbl/d eq'},
  {name:'Parkland Burnaby (Co-processing)',operator:'Parkland',sector:'Oil Processing',subcategory:'Renewables',province:'BC',city:'Burnaby',lat:49.17,lon:-123.03,capacity:6.0,unit:'kbbl/d eq'},

  // Gas Processing – Gas Plants
  {name:'AltaGas Blair Creek Gas Plant',operator:'AltaGas',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'BC',city:'NE BC (Blair Creek)',lat:57.00,lon:-122.20,capacity:84.0,unit:'MMcf/d'},
  {name:'AltaGas Harmattan Gas Processing Complex',operator:'AltaGas',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'AB',city:'Didsbury (Harmattan)',lat:51.88,lon:-114.31,capacity:490,unit:'MMcf/d'},
  {name:'AltaGas Townsend Gas Plant',operator:'AltaGas',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'BC',city:'NE BC (Townsend)',lat:57.59,lon:-122.32,capacity:198,unit:'MMcf/d'},
  {name:'Cenovus Foster Creek Gas Plant',operator:'Cenovus',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'AB',city:'Cold Lake Region',lat:55.50,lon:-110.80,capacity:150,unit:'MMcf/d'},
  {name:'Coleville Gas Plant',operator:'ARC Resources',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'SK',city:'Coleville',lat:51.37,lon:-109.56,capacity:35,unit:'MMcf/d'},
  {name:'Empress Straddle Plant (AB side)',operator:'Multiple (Pembina/TC)',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'AB',city:'Empress',lat:50.05,lon:-110.00,capacity:2000,unit:'MMcf/d'},
  {name:'Husky Ram River Gas Plant',operator:'Cenovus (Husky)',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'AB',city:'Rocky Mountain House',lat:52.19,lon:-115.70,capacity:140,unit:'MMcf/d'},
  {name:'Keyera Fort Saskatchewan Gas Complex',operator:'Keyera',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'AB',city:'Fort Saskatchewan',lat:53.71,lon:-113.22,capacity:600,unit:'MMcf/d'},
  {name:'Keyera Simonette Gas Plant',operator:'Keyera',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'AB',city:'Grande Prairie (Simonette)',lat:54.07,lon:-118.70,capacity:300,unit:'MMcf/d'},
  {name:'Kindersley Gas Plant',operator:'Crescent Point Energy',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'SK',city:'Kindersley',lat:51.47,lon:-109.14,capacity:60,unit:'MMcf/d'},
  {name:'NB McCully Gas Plant (Sussex)',operator:'Headwater/Partner',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'NB',city:'Sussex (McCully)',lat:45.74,lon:-65.51,capacity:30.0,unit:'MMcf/d'},
  {name:'NorthRiver McMahon Gas Plant (Taylor)',operator:'NorthRiver Midstream',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'BC',city:'Taylor',lat:56.16,lon:-120.68,capacity:420,unit:'MMcf/d'},
  {name:'Pembina Duvernay Gas Plant',operator:'Pembina',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'AB',city:'Fox Creek',lat:54.35,lon:-116.80,capacity:200,unit:'MMcf/d'},
  {name:'Pembina Empress Straddle Plant (AB side)',operator:'Pembina',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'AB',city:'Empress',lat:50.05,lon:-110.00,capacity:2000,unit:'MMcf/d'},
  {name:'Pembina Saturn Gas Plant',operator:'Pembina',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'AB',city:'Fox Creek',lat:54.35,lon:-116.80,capacity:200,unit:'MMcf/d'},
  {name:'SemCAMS Wapiti Gas Plant',operator:'SemCAMS',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'AB',city:'Grande Prairie (Wapiti)',lat:55.00,lon:-118.95,capacity:200,unit:'MMcf/d'},
  {name:'Steelman Gas Plant',operator:'Whitecap Resources',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'SK',city:'Steelman',lat:49.46,lon:-102.08,capacity:30,unit:'MMcf/d'},
  {name:'TAQA North Crossfield Gas Plant',operator:'TAQA North',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'AB',city:'Crossfield',lat:51.46,lon:-114.05,capacity:120,unit:'MMcf/d'},

  // Gas Processing – NGL Fractionation
  {name:'AltaGas North Pine Liquids Separation',operator:'AltaGas',sector:'Gas Processing',subcategory:'NGL Fractionation',province:'BC',city:'North Pine (near FSJ)',lat:57.04,lon:-121.59,capacity:10.0,unit:'kbbl/d'},
  {name:'Keyera KFS Fractionators',operator:'Keyera',sector:'Gas Processing',subcategory:'NGL Fractionation',province:'AB',city:'Fort Saskatchewan',lat:53.73,lon:-113.24,capacity:110,unit:'kbbl/d'},
  {name:'NOVA Corunna Fractionator',operator:'NOVA Chemicals',sector:'Gas Processing',subcategory:'NGL Fractionation',province:'ON',city:'Corunna',lat:42.91,lon:-82.36,capacity:100,unit:'kbbl/d'},
  {name:'Pembina Redwater Fractionation Complex',operator:'Pembina',sector:'Gas Processing',subcategory:'NGL Fractionation',province:'AB',city:'Redwater',lat:53.94,lon:-113.10,capacity:200,unit:'kbbl/d'},

  // Gas Processing – LNG
  {name:'Énergir Montréal-Est LNG',operator:'Énergir (Gaz Métro)',sector:'Gas Processing',subcategory:'LNG Processing',province:'QC',city:'Montréal-Est',lat:45.62,lon:-73.49,capacity:0.3,unit:'MTPA'},
  {name:'FortisBC Tilbury LNG',operator:'FortisBC',sector:'Gas Processing',subcategory:'LNG Processing',province:'BC',city:'Delta (Tilbury)',lat:49.13,lon:-123.06,capacity:0.6,unit:'MTPA'},
  {name:'LNG Canada (Kitimat)',operator:'LNG Canada',sector:'Gas Processing',subcategory:'LNG Processing',province:'BC',city:'Kitimat',lat:54.01,lon:-128.65,capacity:14.0,unit:'MTPA'}
];

// ============================================================
// DATASET 3: RAW MATERIALS PROCESSING
// ============================================================
const rawMaterialsProcessingData = [
  // Metals – Steel
  {name:'Algoma Steel',operator:'Algoma Steel',sector:'Metals',subcategory:'Steel',province:'ON',city:'Sault Ste. Marie',lat:46.53,lon:-84.35,capacity:3.0,unit:'MTPA'},
  {name:'ArcelorMittal Dofasco',operator:'ArcelorMittal',sector:'Metals',subcategory:'Steel',province:'ON',city:'Hamilton',lat:43.26,lon:-79.83,capacity:2.5,unit:'MTPA'},
  {name:'ArcelorMittal Hamilton East (Finishing Works)',operator:'ArcelorMittal',sector:'Metals',subcategory:'Steel Finishing',province:'ON',city:'Hamilton',lat:43.27,lon:-79.84,capacity:1.0,unit:'MTPA'},
  {name:'Electro-Motive Diesel Plant',operator:'Progress Rail',sector:'Metals',subcategory:'Heavy Manufacturing',province:'ON',city:'London',lat:42.95,lon:-81.25,capacity:0.10,unit:'MTPA'},
  {name:'EVRAZ Regina',operator:'EVRAZ',sector:'Metals',subcategory:'Steel',province:'SK',city:'Regina',lat:50.48,lon:-104.64,capacity:0.7,unit:'MTPA'},
  {name:'Gerdau Whitby Steel Mill',operator:'Gerdau',sector:'Metals',subcategory:'Steel (Rebar/Merchant)',province:'ON',city:'Whitby',lat:43.86,lon:-78.94,capacity:0.90,unit:'MTPA'},
  {name:'Glencore Sudbury (Falconbridge) Smelter',operator:'Glencore',sector:'Metals',subcategory:'Copper/Nickel',province:'ON',city:'Sudbury',lat:46.55,lon:-80.87,capacity:0.25,unit:'MTPA'},
  {name:'Ivaco Rolling Mills',operator:'Ivaco Rolling Mills',sector:'Metals',subcategory:'Steel Wire Rod',province:'ON',city:'L-Orignal',lat:45.56,lon:-74.69,capacity:0.65,unit:'MTPA'},
  {name:'Rio Tinto Fer et Titane',operator:'Rio Tinto',sector:'Metals',subcategory:'Other',province:'QC',city:'Sorel-Tracy',lat:46.04,lon:-73.11,capacity:1.1,unit:'MTPA'},
  {name:'Stelco Lake Erie Works',operator:'Stelco',sector:'Metals',subcategory:'Steel',province:'ON',city:'Nanticoke',lat:42.783,lon:-80.054,capacity:2.6,unit:'MTPA'},
  {name:'Tenaris Algoma Tubes',operator:'Tenaris',sector:'Metals',subcategory:'Steel Pipe',province:'ON',city:'Sault Ste. Marie',lat:46.52,lon:-84.32,capacity:0.30,unit:'MTPA'},

  // Metals – Aluminum
  {name:'ABI - Aluminerie de Bécancour',operator:'Aluminerie de Bécancour (Alcoa/Rio Tinto JV)',sector:'Metals',subcategory:'Aluminum',province:'QC',city:'Bécancour',lat:46.40,lon:-72.37,capacity:0.450,unit:'MTPA'},
  {name:'Alcoa Baie-Comeau Smelter',operator:'Alcoa',sector:'Metals',subcategory:'Aluminum',province:'QC',city:'Baie-Comeau',lat:49.23,lon:-68.15,capacity:0.280,unit:'MTPA'},
  {name:'Alcoa Deschambault Smelter',operator:'Alcoa',sector:'Metals',subcategory:'Aluminum',province:'QC',city:'Deschambault-Grondines',lat:46.68,lon:-71.93,capacity:0.275,unit:'MTPA'},
  {name:'Alouette Sept-Îles',operator:'Alouette',sector:'Metals',subcategory:'Aluminum',province:'QC',city:'Sept-Îles',lat:50.21,lon:-66.38,capacity:0.60,unit:'MTPA'},
  {name:'Rio Tinto Alma Smelter',operator:'Rio Tinto', sector:'Metals', subcategory:'Aluminum',province:'QC', city:'Alma', lat:48.56, lon:-71.66, capacity:0.44, unit:'MTPA' },
  {name:'Rio Tinto Arvida AP60 Complex',operator:'Rio Tinto',sector:'Metals',subcategory:'Aluminum',province:'QC',city:'Saguenay (Arvida)',lat:48.41,lon:-71.10,capacity:0.060,unit:'MTPA'},
  {name:'Rio Tinto Fer et Titane',operator:'Rio Tinto',sector:'Metals',subcategory:'Titanium/Iron Smelter',province:'QC',city:'Sorel-Tracy',lat:46.04,lon:-73.11,capacity:1.1,unit:'MTPA'},
  {name:'Rio Tinto Grande-Baie Smelter',operator:'Rio Tinto',sector:'Metals',subcategory:'Aluminum',province:'QC',city:'Saguenay (Grande-Baie)',lat:48.35,lon:-70.88,capacity:0.207,unit:'MTPA'},
  {name:'Rio Tinto Kitimat',operator:'Rio Tinto',sector:'Metals',subcategory:'Aluminum',province:'BC',city:'Kitimat',lat:54.05,lon:-128.65,capacity:0.42,unit:'MTPA'},
  {name:'Rio Tinto Laterrière Smelter',operator:'Rio Tinto',sector:'Metals',subcategory:'Aluminum',province:'QC',city:'Saguenay (Laterrière)',lat:48.25,lon:-71.15,capacity:0.245,unit:'MTPA'},

  // Metals – Copper/Nickel/Zinc/Lead/Iron
  {name:'ArcelorMittal Mont-Wright Concentrator',operator:'ArcelorMittal Mines Canada',sector:'Metals',subcategory:'Iron Ore Concentrator',province:'QC',city:'Fermont (Mont-Wright)',lat:52.79,lon:-67.10,capacity:24,unit:'MTPA'},
  {name:'Baffinland Mary River Mine & Crusher',operator:'Baffinland Iron Mines',sector:'Metals',subcategory:'Iron Ore',province:'NU',city:'Mary River',lat:71.33,lon:-79.67,capacity:6,unit:'MTPA'},
  {name:'Glencore Horne Smelter (Rouyn-Noranda)',operator:'Glencore',sector:'Metals',subcategory:'Copper/Nickel',province:'QC',city:'Rouyn-Noranda',lat:48.24,lon:-79.02,capacity:0.210,unit:'MTPA'},
  {name:'Hecla Keno Hill Mill Complex',operator:'Hecla Mining',sector:'Metals',subcategory:'Silver/Lead/Zinc',province:'YT',city:'Keno City',lat:63.91,lon:-135.35,capacity:0.3,unit:'MTPA'},
  {name:'Highland Valley Copper Mine & Mill',operator:'Teck Resources',sector:'Metals',subcategory:'Copper Concentrator',province:'BC',city:'Logan Lake',lat:50.48,lon:-121.04,capacity:0.13,unit:'MTPA'},
  {name:'Hudbay Flin Flon Metals Smelter',operator:'Hudbay',sector:'Metals',subcategory:'Copper/Zinc',province:'MB',city:'Flin Flon',lat:54.77,lon:-101.87,capacity:0.12,unit:'MTPA'},
  {name:'Hudbay Flin Flon Smelter Site (Legacy)',operator:'Hudbay Minerals',sector:'Metals',subcategory:'Copper/Zinc Smelter',province:'MB',city:'Flin Flon',lat:54.77,lon:-101.87,capacity:0.5,unit:'MTPA'},
  {name:'IOC Carol Lake Concentrator',operator:'Iron Ore Company of Canada',sector:'Metals',subcategory:'Iron Ore Concentrator',province:'NL',city:'Labrador City',lat:52.95,lon:-66.93,capacity:22,unit:'MTPA'},
  {name:'NorZinc Prairie Creek Mill (Site)',operator:'NorZinc',sector:'Metals',subcategory:'Zinc/Lead',province:'NT',city:'Prairie Creek',lat:61.55,lon:-124.80,capacity:0.08,unit:'MTPA'},
  {name:'Teck Trail Smelter',operator:'Teck',sector:'Metals',subcategory:'Copper/Nickel',province:'BC',city:'Trail',lat:49.10,lon:-117.70,capacity:0.50,unit:'MTPA'},
  {name:'Vale Long Harbour Nickel Processing Plant',operator:'Vale',sector:'Metals',subcategory:'Nickel/Copper/Cobalt Processing',province:'NL',city:'Long Harbour',lat:47.43,lon:-54.05,capacity:0.05,unit:'MTPA'},
  {name:'Vale Sudbury Smelter',operator:'Vale',sector:'Metals',subcategory:'Copper/Nickel',province:'ON',city:'Sudbury',lat:46.49,lon:-81.01,capacity:0.40,unit:'MTPA'},
  
  // Metals - Gold
  {name:'Agnico Eagle Meadowbank/Amaruq Mill',operator:'Agnico Eagle',sector:'Metals',subcategory:'Gold',province:'NU',city:'Baker Lake',lat:65.00,lon:-96.08,capacity:0.45,unit:'MTPA'},
  {name:'Agnico Eagle Meliadine Gold Processing Plant',operator:'Agnico Eagle',sector:'Metals',subcategory:'Gold',province:'NU',city:'Rankin Inlet',lat:62.90,lon:-92.00,capacity:0.4,unit:'MTPA'},
  {name:'Beacon Mill (Val-d-Or)',operator:'Monarch Mining',sector:'Metals',subcategory:'Gold Processing Plant',province:'QC',city:'Val-d-Or',lat:48.10,lon:-77.78,capacity:0.274,unit:'MTPA'},
  {name:'Brucejack Processing Plant',operator:'Newmont',sector:'Metals',subcategory:'Gold Processing Plant',province:'BC',city:'Stewart area (Brucejack)',lat:56.47,lon:-130.02,capacity:1.39,unit:'MTPA'},
  {name:'Canadian Malartic - Processing Plant',operator:'Agnico Eagle',sector:'Metals',subcategory:'Gold Processing Plant',province:'QC',city:'Malartic',lat:48.14,lon:-78.13,capacity:20.1,unit:'MTPA'},
  {name:'Casa Berardi Mill',operator:'Hecla Mining',sector:'Metals',subcategory:'Gold Processing Plant',province:'QC',city:'La Sarre (Casa Berardi)',lat:49.41,lon:-78.63,capacity:1.97,unit:'MTPA'}, 
  {name:'Detour Lake Processing Plant',operator:'Agnico Eagle',sector:'Metals',subcategory:'Gold Processing Plant',province:'ON',city:'Cochrane District (Detour Lake)',lat:50.02,lon:-79.71,capacity:28.0,unit:'MTPA'},
  {name:'Kiena Mill',operator:'Wesdome',sector:'Metals',subcategory:'Gold Processing Plant',province:'QC',city:'Val-d-Or (Kiena)',lat:48.09,lon:-77.76,capacity:0.73,unit:'MTPA'}, 
  {name:'New Britannia Gold Mill',operator:'Hudbay',sector:'Metals',subcategory:'Gold Processing Plant',province:'MB',city:'Snow Lake',lat:54.88,lon:-100.02,capacity:0.548,unit:'MTPA'},
  {name:'San Gold Rice Lake Mill (Idle)',operator:'1911 Gold Corp.',sector:'Metals',subcategory:'Gold Processing Plant',province:'MB',city:'Bissett',lat:51.02,lon:-95.66,capacity:0.428,unit:'MTPA'},
  {name:'Victoria Gold Eagle Gold Mine',operator:'Victoria Gold',sector:'Metals',subcategory:'Gold',province:'YT',city:'Mayo (Dublin Gulch)',lat:63.91,lon:-135.38,capacity:0.6,unit:'MTPA'},
  {name:'Young-Davidson Processing Plant',operator:'Alamos Gold',sector:'Metals',subcategory:'Gold Processing Plant',province:'ON',city:'Matachewan',lat:48.22,lon:-80.64,capacity:2.92,unit:'MTPA'}, 
  
  // Minerals - Diamonds
  {name:'Diavik Diamond Mine Process Plant',operator:'Rio Tinto',sector:'Metals',subcategory:'Diamonds',province:'NT',city:'Lac de Gras',lat:64.49,lon:-110.28,capacity:6,unit:'MTPA'},
  {name:'Ekati Diamond Mine Process Plant',operator:'Arctic Canadian Diamond Company',sector:'Metals',subcategory:'Diamonds',province:'NT',city:'Lac de Gras',lat:64.70,lon:-110.55,capacity:6,unit:'MTPA'},
  {name:'Gahcho Kué Diamond Mine Mill',operator:'De Beers Canada',sector:'Metals',subcategory:'Diamonds',province:'NT',city:'Kennady Lake',lat:63.37,lon:-109.21,capacity:4.5,unit:'MTPA'},

  // Forest – Pulp
  {name:'AV Group Atholville Pulp Mill',operator:'AV Group',sector:'Forest',subcategory:'Pulp',province:'NB',city:'Atholville',lat:47.99,lon:-66.68,capacity:0.15,unit:'MTPA'},
  {name:'AV Group Nackawic Pulp Mill',operator:'AV Group',sector:'Forest',subcategory:'Pulp',province:'NB',city:'Nackawic',lat:45.97,lon:-67.25,capacity:0.15,unit:'MTPA'},
  {name:'Catalyst Paper Port Alberni Mill',operator:'Paper Excellence',sector:'Forest',subcategory:'Pulp/Paper',province:'BC',city:'Port Alberni',lat:49.24,lon:-124.82,capacity:0.33,unit:'MTPA'},
  {name:'Irving Pulp & Paper',operator:'Irving',sector:'Forest',subcategory:'Pulp',province:'NB',city:'Saint John',lat:45.27,lon:-66.06,capacity:0.32,unit:'MTPA'},
  {name:'J.D. Irving Lake Utopia Pulp Mill',operator:'Irving',sector:'Forest',subcategory:'Pulp',province:'NB',city:'Saint George',lat:45.13,lon:-66.85,capacity:0.35,unit:'MTPA'},
  {name:'Kruger Corner Brook Newsprint',operator:'Kruger',sector:'Forest',subcategory:'Pulp',province:'NL',city:'Corner Brook',lat:48.95,lon:-57.93,capacity:0.25,unit:'MTPA'},
  {name:'Paper Excellence Crofton',operator:'Paper Excellence',sector:'Forest',subcategory:'Pulp',province:'BC',city:'Crofton',lat:48.84,lon:-123.63,capacity:0.40,unit:'MTPA'},
  {name:'Port Hawkesbury Paper Mill',operator:'Port Hawkesbury Paper',sector:'Forest',subcategory:'Pulp',province:'NS',city:'Port Hawkesbury',lat:45.623,lon:-61.350,capacity:0.40,unit:'MTPA'},
  {name:'Resolute Gatineau Pulp Mill',operator:'Resolute Forest Products',sector:'Forest',subcategory:'Pulp',province:'QC',city:'Gatineau',lat:45.46,lon:-75.73,capacity:0.25,unit:'MTPA'},
  {name:'Resolute Thunder Bay',operator:'Resolute',sector:'Forest',subcategory:'Pulp',province:'ON',city:'Thunder Bay',lat:48.42,lon:-89.27,capacity:0.50,unit:'MTPA'},
  {name:'Scotia Atlantic Biomass Mill Site',operator:'Group Savoie',sector:'Forest',subcategory:'Pellet Plant',province:'NS',city:'Middleton',lat:45.007,lon:-65.160,capacity:0.12,unit:'MTPA'},
  {name:'Twin Rivers Paper Mill',operator:'Twin Rivers Paper',sector:'Forest',subcategory:'Pulp',province:'NB',city:'Edmundston',lat:47.37,lon:-68.32,capacity:0.18,unit:'MTPA'},

  // Forest – Sawmills & Panels
  {name:'Canfor Houston Sawmill',operator:'Canfor',sector:'Forest',subcategory:'Sawmills',province:'BC',city:'Houston',lat:54.40,lon:-126.64,capacity:650000,unit:'m3/yr'},
  {name:'Canfor Prince George',operator:'Canfor',sector:'Forest',subcategory:'Sawmills',province:'BC',city:'Prince George',lat:53.91,lon:-122.75,capacity:550000,unit:'m3/yr'},
  {name:'Interfor Castlegar Sawmill',operator:'Interfor',sector:'Forest',subcategory:'Sawmills',province:'BC',city:'Castlegar',lat:49.31,lon:-117.65,capacity:500000,unit:'m3/yr'},
  {name:'J.D. Irving Chipman Sawmill',operator:'J.D. Irving',sector:'Forest',subcategory:'Sawmills',province:'NB',city:'Chipman',lat:46.18,lon:-65.89,capacity:250000,unit:'m3/yr'},
  {name:'J.D. Irving Doaktown Sawmill',operator:'J.D. Irving',sector:'Forest',subcategory:'Sawmills',province:'NB',city:'Doaktown',lat:46.55,lon:-66.10,capacity:200000,unit:'m3/yr'},
  {name:'J.D. Irving Sussex Sawmill',operator:'J.D. Irving',sector:'Forest',subcategory:'Sawmills',province:'NB',city:'Sussex',lat:45.72,lon:-65.52,capacity:150000,unit:'m3/yr'},
  {name:'Lunenburg Lumber Treating Yard',operator:'Extreme Coatings',sector:'Forest',subcategory:'Wood Treatment Yard',province:'NS',city:'Lunenburg',lat:44.365,lon:-64.336,capacity:50000,unit:'m3/yr'},
  {name:'Norbord Grande Prairie',operator:'Norbord',sector:'Forest',subcategory:'Panels',province:'AB',city:'Grande Prairie',lat:55.17,lon:-118.80,capacity:300000,unit:'m3/yr'},
  {name:'Tolko Armstrong Lumber',operator:'Tolko',sector:'Forest',subcategory:'Sawmills',province:'BC',city:'Armstrong',lat:50.45,lon:-119.20,capacity:600000,unit:'m3/yr'},
  {name:'West Fraser Quesnel',operator:'West Fraser',sector:'Forest',subcategory:'Sawmills',province:'BC',city:'Quesnel',lat:52.98,lon:-122.49,capacity:600000,unit:'m3/yr'},
  {name:'West Fraser Quesnel Plywood',operator:'West Fraser',sector:'Forest',subcategory:'Panels',province:'BC',city:'Quesnel',lat:52.99,lon:-122.50,capacity:300000,unit:'m3/yr'},
  {name:'West Fraser Williams Lake Sawmill',operator:'West Fraser',sector:'Forest',subcategory:'Sawmills',province:'BC',city:'Williams Lake',lat:52.14,lon:-122.15,capacity:700000,unit:'m3/yr'},

  // Minerals – Cement
  {name:'Ash Grove Cement (Morden)',operator:'Ash Grove',sector:'Minerals',subcategory:'Cement',province:'MB',city:'Morden',lat:49.19,lon:-98.10,capacity:0.50,unit:'MTPA'},
  {name:'Blue Mountain Minerals Bowmanville',operator:'Blue Mountain Minerals',sector:'Minerals',subcategory:'Lime/Aggregate',province:'ON',city:'Bowmanville',lat:43.91,lon:-78.68,capacity:0.20,unit:'MTPA'},
  {name:'Carmeuse Beachville Lime Plant',operator:'Carmeuse',sector:'Minerals',subcategory:'Lime',province:'ON',city:'Beachville',lat:43.11,lon:-80.78,capacity:0.60,unit:'MTPA'},
  {name:'Ciment McInnis (Port-Daniel–Gascons)',operator:'Ciment Québec inc.',sector:'Minerals',subcategory:'Cement',province:'QC',city:'Port-Daniel–Gascons',lat:48.17,lon:-64.96,capacity:2.2,unit:'MTPA'},
  {name:'CRH Joliette Cement',operator:'CRH',sector:'Minerals',subcategory:'Cement',province:'QC',city:'Joliette',lat:46.01,lon:-73.40,capacity:1.2,unit:'MTPA'},
  {name:'CRH Mississauga Cement',operator:'CRH Canada',sector:'Minerals',subcategory:'Cement',province:'ON',city:'Mississauga',lat:43.57,lon:-79.67,capacity:1.5,unit:'MTPA'},
  {name:'Graymont Faulkner Lime Plant',operator:'Graymont',sector:'Minerals',subcategory:'Lime',province:'MB',city:'Faulkner',lat:50.18,lon:-100.06,capacity:0.15,unit:'MTPA'},
  {name:'Graymont Lime Plant (Exshaw)',operator:'Graymont',sector:'Minerals',subcategory:'Lime',province:'AB',city:'Exshaw',lat:51.08,lon:-115.17,capacity:0.30,unit:'MTPA'},
  {name:'Graymont Pavilion Lime Plant',operator:'Graymont',sector:'Minerals',subcategory:'Lime',province:'BC',city:'Lillooet (Pavilion)',lat:50.87,lon:-121.80,capacity:0.25,unit:'MTPA'},
  {name:'Heidelberg (Lehigh) Delta Cement',operator:'Heidelberg Materials',sector:'Minerals',subcategory:'Cement',province:'BC',city:'Delta',lat:49.14,lon:-122.95,capacity:0.80,unit:'MTPA'},
  {name:'Lafarge Exshaw Cement Plant',operator:'Lafarge',sector:'Minerals',subcategory:'Cement',province:'AB',city:'Exshaw',lat:51.09,lon:-115.19,capacity:2.5,unit:'MTPA'},
  {name:'Lafarge Richmond',operator:'Lafarge',sector:'Minerals',subcategory:'Cement',province:'BC',city:'Richmond',lat:49.17,lon:-123.10,capacity:1.0,unit:'MTPA'},
  {name:'Lehigh Inland Cement Plant (Edmonton)',operator:'Heidelberg Materials',sector:'Minerals',subcategory:'Cement',province:'AB',city:'Edmonton',lat:53.55,lon:-113.40,capacity:0.80,unit:'MTPA'},
  {name:'Port-Daniel–Gascons Cement Plant',operator:'Ciment McInnis / Ciment Québec inc.',sector:'Minerals',subcategory:'Cement',province:'QC',city:'Port-Daniel–Gascons',lat:48.17,lon:-64.96,capacity:2.2,unit:'MTPA'},
  {name:'St. Marys Bowmanville',operator:'St. Marys',sector:'Minerals',subcategory:'Cement',province:'ON',city:'Bowmanville',lat:43.90,lon:-78.69,capacity:1.5,unit:'MTPA'},

  // Minerals – Glass
  {name:'Owens-Illinois Montreal',operator:'Owens-Illinois',sector:'Minerals',subcategory:'Glass',province:'QC',city:'Montréal',lat:45.54,lon:-73.64,capacity:0.25,unit:'MTPA'},
  {name:'Owens-Illinois Montreal Glass Plant',operator:'O-I Glass',sector:'Minerals',subcategory:'Glass',province:'QC',city:'Montréal',lat:45.54,lon:-73.64,capacity:0.25,unit:'MTPA'},
  {name:'Vitro Flat Glass Windsor',operator:'Vitro',sector:'Minerals',subcategory:'Glass',province:'ON',city:'Windsor',lat:42.29,lon:-83.02,capacity:0.30,unit:'MTPA'},

  // Minerals - Uranium
  {name:'Cameco Cigar Lake Mine',operator:'Cameco',sector:'Metals',subcategory:'Uranium',province:'SK',city:'Cigar Lake',lat:58.07,lon:-104.52,capacity:9,unit:'MTPA'},
  {name:'Cameco Key Lake Mill',operator:'Cameco',sector:'Metals',subcategory:'Uranium',province:'SK',city:'Key Lake',lat:57.19,lon:-105.61,capacity:6.4,unit:'MTPA'},
  {name:'Cameco McClean Lake Mill',operator:'Orano/Cameco',sector:'Metals',subcategory:'Uranium',province:'SK',city:'McClean Lake',lat:58.36,lon:-104.72,capacity:12,unit:'MTPA'},

  // Minerals – Other (Salt / Potash etc.)
  {name:'Nutrien Rocanville',operator:'Nutrien',sector:'Minerals',subcategory:'Other',province:'SK',city:'Rocanville',lat:50.47,lon:-102.33,capacity:2.8,unit:'MTPA'},
  {name:'Windsor Salt',operator:'Windsor Salt',sector:'Minerals',subcategory:'Other',province:'ON',city:'Windsor',lat:42.31,lon:-83.06,capacity:0.60,unit:'MTPA'},
  {name:'Windsor Salt (Goderich surface ops)',operator:'Windsor Salt',sector:'Minerals',subcategory:'Salt Mine',province:'ON',city:'Goderich',lat:43.75,lon:-81.71,capacity:1.5,unit:'MTPA'},
  {name:'Windsor Salt Halifax Terminal',operator:'Windsor Salt',sector:'Minerals',subcategory:'Salt Terminal',province:'NS',city:'Halifax',lat:44.643,lon:-63.565,capacity:0.5,unit:'MTPA'},
  {name:'Windsor Salt Pugwash Mine',operator:'Windsor Salt',sector:'Minerals',subcategory:'Salt Mine',province:'NB',city:'Pugwash',lat:45.85,lon:-63.66,capacity:1.2,unit:'MTPA'}
];

// ============================================================
// DATASET 4: AGRICULTURAL PROCESSING
// ============================================================
const agriProcessingData = [
  // Crop-based – Oilseed 
  {name:'ADM Lloydminster (Canola)',operator:'ADM',sector:'Agricultural Processing',subcategory:'Oilseed',province:'AB',city:'Lloydminster',lat:53.28,lon:-110.03,capacity:1.2,unit:'MTPA'},
  {name:'ADM Windsor (Soy/Oilseeds)',operator:'ADM',sector:'Agricultural Processing',subcategory:'Oilseed',province:'ON',city:'Windsor',lat:42.30,lon:-83.06,capacity:1.3,unit:'MTPA'},
  {name:'Bunge Altona (Canola)',operator:'Bunge',sector:'Agricultural Processing',subcategory:'Oilseed',province:'MB',city:'Altona',lat:49.10,lon:-97.56,capacity:0.90,unit:'MTPA'},
  {name:'Bunge Altona Canola Plant',operator:'Bunge',sector:'Agricultural Processing',subcategory:'Oilseed',province:'MB',city:'Altona',lat:49.10,lon:-97.56,capacity:0.4,unit:'MTPA'},
  {name:'Bunge Canada Oakville Edible Oils',operator:'Bunge',sector:'Agricultural Processing',subcategory:'Oilseed',province:'ON',city:'Oakville',lat:43.41,lon:-79.70,capacity:0.30,unit:'MTPA'},
  {name:'Bunge Hamilton (Soybean)',operator:'Bunge',sector:'Agricultural Processing',subcategory:'Oilseed',province:'ON',city:'Hamilton',lat:43.27,lon:-79.84,capacity:0.9,unit:'MTPA'},
  {name:'Cargill Camrose (Canola)',operator:'Cargill',sector:'Agricultural Processing',subcategory:'Oilseed',province:'AB',city:'Camrose',lat:53.02,lon:-112.83,capacity:1.1,unit:'MTPA'},
  {name:'Cargill Clavet (Canola)',operator:'Cargill',sector:'Agricultural Processing',subcategory:'Oilseed',province:'SK',city:'Clavet',lat:52.05,lon:-106.36,capacity:1.5,unit:'MTPA'},
  {name:'Louis Dreyfus Yorkton Canola Plant',operator:'Louis Dreyfus Company',sector:'Agricultural Processing',subcategory:'Oilseed (Canola Crushing)',province:'SK',city:'Yorkton',lat:51.22,lon:-102.46,capacity:0.85,unit:'MTPA'},
  {name:'Richardson Lethbridge Canola',operator:'Richardson',sector:'Agricultural Processing',subcategory:'Oilseed',province:'AB',city:'Lethbridge',lat:49.71,lon:-112.80,capacity:1.6,unit:'MTPA'},
  {name:'Richardson Oilseed Winnipeg Plant',operator:'Richardson International',sector:'Agricultural Processing',subcategory:'Oilseed',province:'MB',city:'Winnipeg',lat:49.93,lon:-97.14,capacity:1.4,unit:'MTPA'},
  {name:'Richardson Winkler Canola Plant',operator:'Richardson International',sector:'Agricultural Processing',subcategory:'Oilseed',province:'MB',city:'Winkler',lat:49.18,lon:-97.93,capacity:1.4,unit:'MTPA'},
  {name:'Richardson Yorkton (Canola)',operator:'Richardson',sector:'Agricultural Processing',subcategory:'Oilseed',province:'SK',city:'Yorkton',lat:51.22,lon:-102.45,capacity:2.5,unit:'MTPA'},
  {name:'Richardson Yorkton Expansion Plant',operator:'Richardson International',sector:'Agricultural Processing',subcategory:'Oilseed (Canola Crushing)',province:'SK',city:'Yorkton',lat:51.22,lon:-102.43,capacity:2.2,unit:'MTPA'},
  {name:'Viterra Yorkton Canola Plant',operator:'Viterra',sector:'Agricultural Processing',subcategory:'Oilseed (Canola Crushing)',province:'SK',city:'Yorkton',lat:51.21,lon:-102.44,capacity:1.1,unit:'MTPA'},

  // Fertiliser - Processing
  {name:'K+S Bethune Potash Plant',operator:'K+S Potash Canada',sector:'Agricultural Processing',subcategory:'Fertilizer (Potash)',province:'SK',city:'Bethune',lat:50.80,lon:-105.24,capacity:2.0,unit:'MTPA'},
  {name:'Mosaic Esterhazy K3 Mine & Mill',operator:'Mosaic',sector:'Agricultural Processing',subcategory:'Fertilizer (Potash)',province:'SK',city:'Esterhazy',lat:50.65,lon:-102.05,capacity:4.0,unit:'MTPA'},
  {name:'Nutrien Carseland Fertilizer Complex',operator:'Nutrien',sector:'Agricultural Processing',subcategory:'Fertilizer (Nitrogen)',province:'AB',city:'Carseland',lat:50.84,lon:-113.46,capacity:0.60,unit:'MTPA'},
  {name:'Nutrien Penobsquis Potash Mine',operator:'Nutrien',sector:'Agricultural Processing',subcategory:'Fertilizer (Potash)',province:'NB',city:'Sussex',lat:45.71,lon:-65.43,capacity:2.0,unit:'MTPA'},
  {name:'Nutrien Redwater Fertilizer Complex',operator:'Nutrien',sector:'Agricultural Processing',subcategory:'Fertilizer (Nitrogen)',province:'AB',city:'Redwater',lat:53.95,lon:-113.10,capacity:0.90,unit:'MTPA'},
  {name:'Nutrien Vanscoy Potash Mine',operator:'Nutrien',sector:'Agricultural Processing',subcategory:'Fertilizer (Potash)',province:'SK',city:'Vanscoy',lat:51.94,lon:-107.06,capacity:2.7,unit:'MTPA'},
  {name:'Sussex Rail Potash Loadout',operator:'Nutrien',sector:'Agricultural Processing',subcategory:'Fertilizer (Potash)',province:'NB',city:'Penobsquis',lat:45.73,lon:-65.39,capacity:2.0,unit:'MTPA'},
  {name:'Yara Belle Plaine Ammonia/Urea',operator:'Yara',sector:'Agricultural Processing',subcategory:'Fertilizer (Nitrogen)',province:'SK',city:'Belle Plaine',lat:50.47,lon:-105.08,capacity:0.76,unit:'MTPA'},

  // Crop-based – Pulse
  {name:'AGT Foods Regina (Pulse)',operator:'AGT Foods',sector:'Agricultural Processing',subcategory:'Pulse',province:'SK',city:'Regina',lat:50.44,lon:-104.68,capacity:0.25,unit:'MTPA'},
  {name:'Roquette (Pea Protein)',operator:'Roquette',sector:'Agricultural Processing',subcategory:'Pulse',province:'MB',city:'Portage la Prairie',lat:49.99,lon:-98.34,capacity:0.25,unit:'MTPA'},

  // Crop-based – Ethanol
  {name:'Greenfield Ethanol Chatham',operator:'Greenfield',sector:'Agricultural Processing',subcategory:'Ethanol',province:'ON',city:'Chatham',lat:42.42,lon:-82.18,capacity:0.16,unit:'MTPA'},
  {name:'Greenfield Varennes (Ethanol)',operator:'Greenfield',sector:'Agricultural Processing',subcategory:'Ethanol',province:'QC',city:'Varennes',lat:45.69,lon:-73.44,capacity:0.32,unit:'MTPA'},
  {name:'Husky (FCL) Minnedosa Ethanol',operator:'Federated Co-op',sector:'Agricultural Processing',subcategory:'Ethanol',province:'MB',city:'Minnedosa',lat:50.24,lon:-99.84,capacity:0.10,unit:'MTPA'},
  {name:'Husky Ethanol Plant Lloydminster',operator:'Cenovus',sector:'Agricultural Processing',subcategory:'Ethanol',province:'SK',city:'Lloydminster',lat:53.29,lon:-110.02,capacity:0.13,unit:'MTPA'},
  {name:'IGPC Ethanol Aylmer',operator:'IGPC',sector:'Agricultural Processing',subcategory:'Ethanol',province:'ON',city:'Aylmer',lat:42.78,lon:-80.96,capacity:0.15,unit:'MTPA'},
  {name:'Pound-Maker Biofuels Lanigan',operator:'Pound-Maker',sector:'Agricultural Processing',subcategory:'Ethanol',province:'SK',city:'Lanigan',lat:51.86,lon:-105.04,capacity:0.15,unit:'MTPA'},
  {name:'Terra Grain Fuels Ethanol Plant',operator:'Terra Grain Fuels',sector:'Agricultural Processing',subcategory:'Ethanol',province:'SK',city:'Belle Plaine',lat:50.45,lon:-105.02,capacity:0.15,unit:'MTPA'},

  // Crop-based – Feed
  {name:'FCL Feed (Saskatoon)',operator:'FCL',sector:'Agricultural Processing',subcategory:'Feed',province:'SK',city:'Saskatoon',lat:52.12,lon:-106.67,capacity:0.20,unit:'MTPA'},
  {name:'FCL Feed Lethbridge',operator:'Federated Co-op',sector:'Agricultural Processing',subcategory:'Feed',province:'AB',city:'Lethbridge',lat:49.70,lon:-112.81,capacity:0.20,unit:'MTPA'},
  {name:'Hi-Pro Feeds Lethbridge',operator:'Hi-Pro',sector:'Agricultural Processing',subcategory:'Feed',province:'AB',city:'Lethbridge',lat:49.70,lon:-112.81,capacity:0.20,unit:'MTPA'},
  {name:'Maple Leaf Brandon Feed',operator:'Maple Leaf',sector:'Agricultural Processing',subcategory:'Feed',province:'MB',city:'Brandon',lat:49.86,lon:-99.98,capacity:0.30,unit:'MTPA'},

  // Animal – Meat
  {name:'Cargill Guelph (Beef)',operator:'Cargill',sector:'Agricultural Processing',subcategory:'Meat',province:'ON',city:'Guelph',lat:43.52,lon:-80.22,capacity:120,unit:'kMT/yr'},
  {name:'Cargill High River (Beef)',operator:'Cargill',sector:'Agricultural Processing',subcategory:'Meat',province:'AB',city:'High River',lat:50.59,lon:-113.87,capacity:450,unit:'kMT/yr'},
  {name:'JBS Brooks (Beef)',operator:'JBS',sector:'Agricultural Processing',subcategory:'Meat',province:'AB',city:'Brooks',lat:50.57,lon:-111.89,capacity:430,unit:'kMT/yr'},
  {name:'Maple Leaf Brandon (Pork)',operator:'Maple Leaf Foods',sector:'Agricultural Processing',subcategory:'Meat',province:'MB',city:'Brandon',lat:49.86,lon:-99.95,capacity:460,unit:'kMT/yr'},
  {name:'Maple Leaf Foods London Poultry Plant',operator:'Maple Leaf Foods',sector:'Agricultural Processing',subcategory:'Meat/Poultry',province:'ON',city:'London',lat:42.96,lon:-81.27,capacity:100,unit:'kMT/yr'},
  {name:'Maple Leaf Lethbridge Pork Plant',operator:'Maple Leaf Foods',sector:'Agricultural Processing',subcategory:'Meat',province:'AB',city:'Lethbridge',lat:49.68,lon:-112.81,capacity:220,unit:'kMT/yr'},
  {name:'Olymel Red Deer (Pork)',operator:'Olymel',sector:'Agricultural Processing',subcategory:'Meat',province:'AB',city:'Red Deer',lat:52.32,lon:-113.74,capacity:140,unit:'kMT/yr'},
  {name:'Sofina Burlington (Poultry)',operator:'Sofina Foods',sector:'Agricultural Processing',subcategory:'Meat',province:'ON',city:'Burlington',lat:43.32,lon:-79.81,capacity:45,unit:'kMT/yr'},

  // Crop-based – Sugar/Starch
  {name:'ADM Milling Mississauga',operator:'ADM',sector:'Agricultural Processing',subcategory:'Flour Milling',province:'ON',city:'Mississauga',lat:43.62,lon:-79.63,capacity:0.25,unit:'MTPA'},
  {name:'Parrish & Heimbecker Milling Plant',operator:'P&H',sector:'Agricultural Processing',subcategory:'Flour Milling',province:'MB',city:'Winnipeg',lat:49.91,lon:-97.10,capacity:0.25,unit:'MTPA'},
  {name:'Rogers Sugar (Taber)',operator:'Rogers Sugar',sector:'Agricultural Processing',subcategory:'Sugar/Starch',province:'AB',city:'Taber',lat:49.79,lon:-112.15,capacity:0.13,unit:'MTPA'},
  {name:'Rogers Sugar Montréal',operator:'Rogers Sugar',sector:'Agricultural Processing',subcategory:'Sugar/Starch',province:'QC',city:'Montréal',lat:45.54,lon:-73.53,capacity:0.24,unit:'MTPA'},
  {name:'Rogers Sugar Vancouver',operator:'Rogers Sugar',sector:'Agricultural Processing',subcategory:'Sugar/Starch',province:'BC',city:'Vancouver',lat:49.28,lon:-123.09,capacity:0.10,unit:'MTPA'},

  // Dairy Processing
  {name:'Agropur Saint-Laurent',operator:'Agropur',sector:'Agricultural Processing',subcategory:'Dairy',province:'QC',city:'Montréal (Saint-Laurent)',lat:45.50,lon:-73.69,capacity:300,unit:'kMT/yr'},
  {name:'Agropur St-Hyacinthe',operator:'Agropur',sector:'Agricultural Processing',subcategory:'Dairy',province:'QC',city:'St-Hyacinthe',lat:45.63,lon:-72.95,capacity:300,unit:'kMT/yr'},
  {name:'Amalgamated Dairies Limited (ADL) Summerside',operator:'ADL Co-op',sector:'Agricultural Processing',subcategory:'Dairy Products',province:'PE',city:'Summerside',lat:46.40,lon:-63.79,capacity:120,unit:'kMT/yr'},
  {name:'Cows Creamery Charlottetown',operator:'Cows Creamery',sector:'Agricultural Processing',subcategory:'Dairy',province:'PE',city:'Charlottetown',lat:46.26,lon:-63.13,capacity:40,unit:'kMT/yr'},
  {name:'Gay Lea Teeswater',operator:'Gay Lea',sector:'Agricultural Processing',subcategory:'Dairy',province:'ON',city:'Teeswater',lat:44.05,lon:-81.31,capacity:120,unit:'kMT/yr'},
  {name:'Lactalis (Parmalat) Winchester',operator:'Lactalis',sector:'Agricultural Processing',subcategory:'Dairy',province:'ON',city:'Winchester',lat:45.09,lon:-75.35,capacity:160,unit:'kMT/yr'},
  {name:'Nestlé Ice Cream Plant London',operator:'Nestlé Canada',sector:'Agricultural Processing',subcategory:'Dairy',province:'ON',city:'London',lat:42.97,lon:-81.25,capacity:200,unit:'kMT/yr'},
  {name:'Parmalat Belleville Dairy Plant',operator:'Lactalis (Parmalat)',sector:'Agricultural Processing',subcategory:'Dairy',province:'ON',city:'Belleville',lat:44.17,lon:-77.38,capacity:150,unit:'kMT/yr'},
  {name:'Saputo Burnaby',operator:'Saputo',sector:'Agricultural Processing',subcategory:'Dairy',province:'BC',city:'Burnaby',lat:49.25,lon:-122.99,capacity:120,unit:'kMT/yr'},
  {name:'Saputo Port Coquitlam',operator:'Saputo',sector:'Agricultural Processing',subcategory:'Dairy',province:'BC',city:'Port Coquitlam',lat:49.27,lon:-122.77,capacity:140,unit:'kMT/yr'},

  // Beverage
  {name:'Coca-Cola Brampton Bottling Facility',operator:'Coca-Cola Canada',sector:'Agricultural Processing',subcategory:'Beverage',province:'ON',city:'Brampton',lat:43.70,lon:-79.73,capacity:250,unit:'kMT/yr'},

  // General Foods
  {name:'Cavendish Farms New Annan Plant',operator:'Cavendish Farms',sector:'Agricultural Processing',subcategory:'Frozen Food (Potato Processing)',province:'PE',city:'New Annan',lat:46.42,lon:-63.73,capacity:300,unit:'kMT/yr'},
  {name:'Kellogg-s Cereal Plant Belleville',operator:'Kellogg-s',sector:'Agricultural Processing',subcategory:'Cereal/Grain Processing',province:'ON',city:'Belleville',lat:44.17,lon:-77.38,capacity:200,unit:'kMT/yr'},
  {name:'McCain Carberry Potato Plant',operator:'McCain Foods',sector:'Agricultural Processing',subcategory:'Potato Processing',province:'MB',city:'Carberry',lat:49.88,lon:-99.36,capacity:250,unit:'kMT/yr'},
  {name:'PepsiCo Frito-Lay Cambridge',operator:'PepsiCo',sector:'Agricultural Processing',subcategory:'Snacks (Potato/Corn)',province:'ON',city:'Cambridge',lat:43.37,lon:-80.29,capacity:300,unit:'kMT/yr'},

  // Seafood Processing
  {name:'Alder Point Fisheries Facility',operator:'Alder Point Fisheries',sector:'Agricultural Processing',subcategory:'Seafood',province:'NS',city:'Alder Point',lat:46.217,lon:-60.273,capacity:12,unit:'kMT/yr'},
  {name:'Clearwater Seafoods – Lunenburg',operator:'Clearwater',sector:'Agricultural Processing',subcategory:'Seafood',province:'NS',city:'Lunenburg',lat:44.37,lon:-64.32,capacity:20,unit:'kMT/yr'},
  {name:'Coast Tsimshian Seafood (Prince Rupert)',operator:'Lax Kw-alaams/Partners',sector:'Agricultural Processing',subcategory:'Seafood',province:'BC',city:'Prince Rupert',lat:54.32,lon:-130.33,capacity:66,unit:'kMT/yr'},
  {name:'Connors Bros. Sardine Plant',operator:'Connors Bros.',sector:'Agricultural Processing',subcategory:'Seafood',province:'NB',city:'Blacks Harbour',lat:45.05,lon:-66.78,capacity:25,unit:'kMT/yr'},
  {name:'Cooke Aquaculture',operator:'Cooke',sector:'Agricultural Processing',subcategory:'Seafood',province:'NB',city:'Blacks Harbour',lat:45.05,lon:-66.78,capacity:150,unit:'kMT/yr'},
  {name:'Cooke Aquaculture Blacks Harbour Processing Plant',operator:'Cooke Aquaculture',sector:'Agricultural Processing',subcategory:'Seafood',province:'NB',city:'Blacks Harbour',lat:45.05,lon:-66.79,capacity:40,unit:'kMT/yr'},
  {name:'Cooke Aquaculture St. George Cold Storage',operator:'Cooke Aquaculture',sector:'Agricultural Processing',subcategory:'Seafood Storage',province:'NB',city:'Saint George',lat:45.12,lon:-66.83,capacity:15,unit:'kMT/yr'},
  {name:'Delta Pacific Seafoods (Richmond)',operator:'Delta Pacific Seafoods',sector:'Agricultural Processing',subcategory:'Seafood',province:'BC',city:'Richmond',lat:49.15,lon:-123.06,capacity:30,unit:'kMT/yr'},
  {name:'East Coast Seafoods Processing Facility',operator:'East Coast Seafoods',sector:'Agricultural Processing',subcategory:'Seafood',province:'NB',city:'Lamèque',lat:47.79,lon:-64.66,capacity:10,unit:'kMT/yr'},
  {name:'Fogo Island Co-op Seafood',operator:'Fogo Island Co-op',sector:'Agricultural Processing',subcategory:'Seafood',province:'NL',city:'Fogo Island',lat:49.71,lon:-54.18,capacity:40,unit:'kMT/yr'},
  {name:'Gulf Shrimp Baie Verte Processing Plant',operator:'Gulf Shrimp Ltd.',sector:'Agricultural Processing',subcategory:'Seafood',province:'NL',city:'Baie Verte',lat:49.78,lon:-56.29,capacity:10,unit:'kMT/yr'},
  {name:'High Liner Lunenburg',operator:'High Liner',sector:'Agricultural Processing',subcategory:'Seafood',province:'NS',city:'Lunenburg',lat:44.38,lon:-64.31,capacity:250,unit:'kMT/yr'},
  {name:'Louisbourg Seafoods',operator:'Louisbourg Seafoods',sector:'Agricultural Processing',subcategory:'Seafood',province:'NS',city:'Louisbourg',lat:45.919,lon:-59.987,capacity:35,unit:'kMT/yr'},
  {name:'Meridian Seafoods Dartmouth',operator:'Meridian Seafoods',sector:'Agricultural Processing',subcategory:'Seafood',province:'NS',city:'Dartmouth',lat:44.682,lon:-63.543,capacity:5,unit:'kMT/yr'},
  {name:'Ocean Brands Packaging Facility (Richmond)',operator:'Ocean Brands',sector:'Agricultural Processing',subcategory:'Seafood Packaging',province:'BC',city:'Richmond',lat:49.17,lon:-123.08,capacity:25,unit:'kMT/yr'},
  {name:'Ocean Choice Harbour Grace',operator:'Ocean Choice International',sector:'Agricultural Processing',subcategory:'Seafood',province:'NL',city:'Harbour Grace',lat:47.68,lon:-53.23,capacity:22,unit:'kMT/yr'},
  {name:'Ocean Choice International – St. Johns',operator:'OCI',sector:'Agricultural Processing',subcategory:'Seafood',province:'NL',city:'St. Johns',lat:47.57,lon:-52.71,capacity:16,unit:'kMT/yr'},
  {name:'Royal Star Foods Plant',operator:'Royal Star Foods',sector:'Agricultural Processing',subcategory:'Seafood',province:'PE',city:'Tignish',lat:46.95,lon:-64.00,capacity:12,unit:'kMT/yr'},
  {name:'Sea Treat Charlottetown Seafood Plant',operator:'Sea Treat Ltd.',sector:'Agricultural Processing',subcategory:'Seafood',province:'PE',city:'Charlottetown',lat:46.23,lon:-63.11,capacity:8,unit:'kMT/yr'},
  {name:'St. Jean-s Cannery & Smokehouse',operator:'St. Jean-s',sector:'Agricultural Processing',subcategory:'Seafood',province:'BC',city:'Nanaimo',lat:49.17,lon:-123.95,capacity:13,unit:'kMT/yr'},
  {name:'True North Salmon Processing Facility',operator:'Cooke Aquaculture',sector:'Agricultural Processing',subcategory:'Seafood',province:'NB',city:'St. George',lat:45.13,lon:-66.86,capacity:20,unit:'kMT/yr'},
  {name:'Victoria Co-op Fisheries',operator:'Victoria Co-op',sector:'Agricultural Processing',subcategory:'Seafood',province:'NS',city:'Neils Harbour',lat:46.807,lon:-60.345,capacity:20,unit:'kMT/yr'}
];

// ============================================================
// EXPORT FOR USE IN VIEWER
// ============================================================
const allFacilities = [
  ...storageData.map(f => ({...f, dataset: 'Storage'})),
  ...oilGasProcessingData.map(f => ({...f, dataset: 'Oil & Gas Processing'})),
  ...rawMaterialsProcessingData.map(f => ({...f, dataset: 'Raw Materials'})),
  ...agriProcessingData.map(f => ({...f, dataset: 'Agricultural Processing'}))
];

if (typeof window !== 'undefined') {
  window.canadaIndustrialData = {
    storage: storageData,
    oilGasProcessing: oilGasProcessingData,
    rawMaterials: rawMaterialsProcessingData,
    agriProcessing: agriProcessingData,
    all: allFacilities
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    storageData,
    oilGasProcessingData,
    rawMaterialsProcessingData,
    agriProcessingData,
    allFacilities
  };
}

// Log summary
console.log('Dataset Summary:');
console.log(`Storage facilities: ${storageData.length}`);
console.log(`Oil & Gas Processing facilities: ${oilGasProcessingData.length}`);
console.log(`Raw Materials facilities: ${rawMaterialsProcessingData.length}`);
console.log(`Agricultural Processing facilities: ${agriProcessingData.length}`);
console.log(`Total facilities: ${allFacilities.length}`);