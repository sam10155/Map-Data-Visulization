// ============================================================
// DATASET 1: STORAGE INFRASTRUCTURE
// ============================================================
const storageData = [
  // Oil Storage - Crude Tank Farms
  {name:'Plains Hardisty Terminal',operator:'Plains Midstream',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'AB',city:'Hardisty',lat:52.678,lon:-111.305,capacity:25000000,unit:'bbl'},
  {name:'Enbridge Edmonton Terminal',operator:'Enbridge',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'AB',city:'Edmonton',lat:53.580,lon:-113.417,capacity:18000000,unit:'bbl'},
  {name:'Enbridge Sarnia Terminal',operator:'Enbridge',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'ON',city:'Sarnia',lat:42.960,lon:-82.340,capacity:20000000,unit:'bbl'},
  {name:'Trans Mountain Burnaby Tank Farm',operator:'Trans Mountain',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'BC',city:'Burnaby',lat:49.260,lon:-122.950,capacity:1900000,unit:'bbl'},
  {name:'Trans Mountain Westridge Marine Terminal',operator:'Trans Mountain',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'BC',city:'Burnaby (Westridge)',lat:49.308,lon:-122.979,capacity:900000,unit:'bbl'},
  {name:'Gibson Hardisty Terminal',operator:'Gibson Energy',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'AB',city:'Hardisty',lat:52.672,lon:-111.319,capacity:14000000,unit:'bbl'},
  {name:'Gibson Edmonton Terminal',operator:'Gibson Energy',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'AB',city:'Edmonton',lat:53.579,lon:-113.457,capacity:1700000,unit:'bbl'},
  {name:'Pembina Edmonton South Terminal',operator:'Pembina',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'AB',city:'Edmonton',lat:53.523,lon:-113.373,capacity:5100000,unit:'bbl'},
  {name:'Husky (Cenovus) Lloydminster Tank Farm',operator:'Cenovus',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'SK',city:'Lloydminster',lat:53.271,lon:-110.012,capacity:1000000,unit:'bbl'},
  {name:'Irving Saint John East Tank Farm',operator:'Irving',sector:'Oil Storage',subcategory:'Crude Tank Farm',province:'NB',city:'Saint John',lat:45.265,lon:-66.020,capacity:6000000,unit:'bbl'},

  // Oil Storage - Refined Product Terminals
  {name:'Imperial Edmonton Terminal',operator:'Imperial',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'AB',city:'Edmonton',lat:53.560,lon:-113.480,capacity:7000000,unit:'bbl'},
  {name:'Suncor Edmonton Rack Terminal',operator:'Suncor',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'AB',city:'Edmonton',lat:53.572,lon:-113.414,capacity:3000000,unit:'bbl'},
  {name:'Shell Calgary Shepard Fuel Terminal',operator:'Shell',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'AB',city:'Calgary',lat:50.968,lon:-113.930,capacity:2000000,unit:'bbl'},
  {name:'Kinder Morgan Transmix Sarnia',operator:'KML',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'ON',city:'Sarnia',lat:42.985,lon:-82.372,capacity:2000000,unit:'bbl'},
  {name:'Suncor Oakville Product Terminal',operator:'Suncor',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'ON',city:'Oakville',lat:43.421,lon:-79.668,capacity:1500000,unit:'bbl'},
  {name:'Imperial Nanticoke Terminal',operator:'Imperial',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'ON',city:'Nanticoke',lat:42.806,lon:-80.051,capacity:1800000,unit:'bbl'},
  {name:'Valero Lévis Product Terminal',operator:'Valero',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'QC',city:'Lévis',lat:46.755,lon:-71.214,capacity:1500000,unit:'bbl'},
  {name:'Irving Saint John Product Terminal',operator:'Irving',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'NB',city:'Saint John',lat:45.264,lon:-66.050,capacity:2500000,unit:'bbl'},
  {name:'North Atlantic (Braya) Come-by-Chance Terminal',operator:'Braya',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'NL',city:'Come By Chance',lat:47.812,lon:-54.018,capacity:2000000,unit:'bbl'},
  {name:'Parkland Burnaby Terminal',operator:'Parkland',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'BC',city:'Burnaby',lat:49.170,lon:-123.020,capacity:1200000,unit:'bbl'},
  {name:'Shell Vancouver Terminal (Boundary Bay)',operator:'Shell',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'BC',city:'Delta',lat:49.058,lon:-123.003,capacity:800000,unit:'bbl'},
  {name:'Imperial Calgary Glenmore Terminal',operator:'Imperial',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'AB',city:'Calgary',lat:50.975,lon:-114.002,capacity:1000000,unit:'bbl'},
  {name:'Suncor Montréal-Est Product Terminal',operator:'Suncor',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'QC',city:'Montréal-Est',lat:45.629,lon:-73.501,capacity:900000,unit:'bbl'},
  {name:'Irving Dartmouth Product Terminal',operator:'Irving',sector:'Oil Storage',subcategory:'Refined Product Terminal',province:'NS',city:'Dartmouth',lat:44.656,lon:-63.530,capacity:1200000,unit:'bbl'},

  // Gas Storage - Underground
  {name:'TC Energy Dawn Hub',operator:'TC Energy',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'ON',city:'Dawn-Euphemia',lat:42.840,lon:-82.090,capacity:288,unit:'Bcf'},
  {name:'ATCO Fort Saskatchewan Caverns',operator:'ATCO',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'AB',city:'Fort Saskatchewan',lat:53.720,lon:-113.220,capacity:40,unit:'Bcf'},
  {name:'AltaGas Brazeau Gas Storage',operator:'AltaGas',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'AB',city:'Brazeau',lat:53.240,lon:-115.090,capacity:27,unit:'Bcf'},
  {name:'Enbridge Dawn Hub (incl. Tecumseh Pools)',operator:'TC Energy/Enbridge',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'ON',city:'Dawn-Euphemia',lat:42.840,lon:-82.090,capacity:288,unit:'Bcf'},
  {name:'Enbridge Tecumseh (subset of Dawn complex)',operator:'Enbridge Gas',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'ON',city:'Tecumseh area',lat:42.682,lon:-82.330,capacity:95,unit:'Bcf'},
  {name:'Aitken Creek Gas Storage',operator:'Enbridge',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'BC',city:'Fort St. John (Aitken Creek)',lat:56.900,lon:-121.100,capacity:77,unit:'Bcf'},
  {name:'Sarnia Airport Gas Storage Pool',operator:'Sarnia Airport Storage Pool LP',sector:'Gas Storage',subcategory:'Underground Gas Storage',province:'ON',city:'Sarnia',lat:42.999,lon:-82.308,capacity:5.94,unit:'Bcf'},

  // Gas Storage - LNG
  {name:'FortisBC Tilbury LNG Storage',operator:'FortisBC',sector:'Gas Storage',subcategory:'LNG Storage',province:'BC',city:'Delta (Tilbury)',lat:49.130,lon:-123.060,capacity:46000,unit:'m3'},
  {name:'Énergir Montréal-Est LNG Storage',operator:'Énergir',sector:'Gas Storage',subcategory:'LNG Storage',province:'QC',city:'Montréal-Est',lat:45.620,lon:-73.490,capacity:20000,unit:'m3'},
  {name:'Canaport LNG Storage',operator:'Repsol',sector:'Gas Storage',subcategory:'LNG Storage',province:'NB',city:'Saint John',lat:45.223,lon:-66.037,capacity:160000,unit:'m3'},
  {name:'Woodfibre LNG Site Storage',operator:'Woodfibre LNG',sector:'Gas Storage',subcategory:'LNG Storage',province:'BC',city:'Squamish',lat:49.645,lon:-123.153,capacity:125000,unit:'m3'},
  {name:'Kitimat LNG (LNG Canada) Storage',operator:'LNG Canada',sector:'Gas Storage',subcategory:'LNG Storage',province:'BC',city:'Kitimat',lat:54.050,lon:-128.650,capacity:140000,unit:'m3'},

  // Gas Storage - LPG/NGL
  {name:'Pembina Redwater Cavern LPG',operator:'Pembina',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'AB',city:'Redwater',lat:53.930,lon:-113.100,capacity:3000000,unit:'bbl'},
  {name:'RIPET (Ridley Island Propane Export) Tanks',operator:'AltaGas',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'BC',city:'Prince Rupert',lat:54.218,lon:-130.321,capacity:1000000,unit:'bbl'},
  {name:'Keyera Fort Saskatchewan Caverns',operator:'Keyera',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'AB',city:'Fort Saskatchewan',lat:53.713,lon:-113.229,capacity:8000000,unit:'bbl'},
  {name:'Pembina Redwater Cavern LPG',operator:'Pembina',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'AB',city:'Redwater',lat:53.930,lon:-113.100,capacity:3000000,unit:'bbl'},
  {name:'Plains Midstream Sarnia NGL Storage',operator:'Plains Midstream',sector:'Gas Storage',subcategory:'LPG/NGL Storage',province:'ON',city:'Sarnia',lat:42.990,lon:-82.380,capacity:2000000,unit:'bbl'},

  // Agricultural Storage - Grain Elevators (West Coast)
  {name:'Viterra Pacific Terminal (Vancouver)',operator:'Viterra',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Vancouver',lat:49.290,lon:-123.060,capacity:275000,unit:'tonnes'},
  {name:'G3 Terminal Vancouver',operator:'G3',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'North Vancouver',lat:49.310,lon:-123.070,capacity:180000,unit:'tonnes'},
  {name:'Richardson Vancouver Terminal',operator:'Richardson',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Vancouver',lat:49.296,lon:-123.069,capacity:200000,unit:'tonnes'},
  {name:'Fraser Grain Terminal',operator:'FNA/P&H',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Surrey',lat:49.167,lon:-122.923,capacity:160000,unit:'tonnes'},
  {name:'Richardson Prince Rupert Terminal',operator:'Richardson',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Prince Rupert',lat:54.310,lon:-130.350,capacity:200000,unit:'tonnes'},
  {name:'Parrish & Heimbecker Kamloops',operator:'P&H',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Kamloops',lat:50.692,lon:-120.342,capacity:45000,unit:'tonnes'},
  {name:'Viterra Vernon Agri',operator:'Viterra',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Vernon',lat:50.260,lon:-119.274,capacity:25000,unit:'tonnes'},
  {name:'Richardson Kelowna Agri',operator:'Richardson',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Kelowna',lat:49.892,lon:-119.435,capacity:20000,unit:'tonnes'},
  {name:'Alliance Grain Terminal (Vancouver)',operator:'AGT',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'BC',city:'Vancouver',lat:49.300,lon:-123.065,capacity:282830,unit:'tonnes'},

  // Agricultural Storage - Grain Elevators (Great Lakes - Ontario)
  {name:'Cargill Thunder Bay Terminal',operator:'Cargill',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Thunder Bay',lat:48.385,lon:-89.236,capacity:250000,unit:'tonnes'},
  {name:'Richardson Thunder Bay Terminal',operator:'Richardson',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Thunder Bay',lat:48.420,lon:-89.200,capacity:200000,unit:'tonnes'},
  {name:'Viterra Thunder Bay Elevator',operator:'Viterra',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Thunder Bay',lat:48.415,lon:-89.210,capacity:180000,unit:'tonnes'},
  {name:'Parrish & Heimbecker Thunder Bay',operator:'P&H',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Thunder Bay',lat:48.401,lon:-89.245,capacity:150000,unit:'tonnes'},
  {name:'Great Lakes Grain Goderich',operator:'Great Lakes Grain',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Goderich',lat:43.741,lon:-81.710,capacity:120000,unit:'tonnes'},
  {name:'P&H Hamilton Grain',operator:'P&H',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Hamilton',lat:43.270,lon:-79.860,capacity:150000,unit:'tonnes'},
  {name:'G3 Hamilton',operator:'G3',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Hamilton',lat:43.278,lon:-79.857,capacity:120000,unit:'tonnes'},
  {name:'Oshawa Grain Terminal',operator:'QSL/Partners',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'ON',city:'Oshawa',lat:43.875,lon:-78.804,capacity:20000,unit:'tonnes'},
  
  // Agricultural Storage - Grain Elevators (Quebec)
  {name:'Viterra Montreal Grain Terminal',operator:'Viterra',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'QC',city:'Montréal',lat:45.520,lon:-73.520,capacity:180000,unit:'tonnes'},
  {name:'Sollio (La Coop) Montreal Terminal',operator:'Sollio',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'QC',city:'Montréal',lat:45.545,lon:-73.500,capacity:160000,unit:'tonnes'},
  {name:'Québec City Grain Terminal',operator:'Sollio',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'QC',city:'Québec',lat:46.835,lon:-71.205,capacity:200000,unit:'tonnes'},
  {name:'Sollio Trois-Rivières Grain',operator:'Sollio',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'QC',city:'Trois-Rivières',lat:46.360,lon:-72.558,capacity:70000,unit:'tonnes'},

  // Agricultural Storage - Grain Elevators (Prairies)
  {name:'Richardson Winnipeg Terminal',operator:'Richardson',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'MB',city:'Winnipeg',lat:49.900,lon:-97.140,capacity:250000,unit:'tonnes'},
  {name:'Port of Churchill Grain Terminal',operator:'Arctic Gateway Group',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'MB',city:'Churchill',lat:58.768,lon:-94.165,capacity:140000,unit:'tonnes'},
  {name:'Viterra Moose Jaw',operator:'Viterra',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'SK',city:'Moose Jaw',lat:50.393,lon:-105.551,capacity:120000,unit:'tonnes'},
  {name:'Cargill Clavet Canola',operator:'Cargill',sector:'Agricultural Storage',subcategory:'Grain Elevator',province:'SK',city:'Clavet',lat:52.047,lon:-106.352,capacity:200000,unit:'tonnes'},

  // Agricultural Storage - Fertilizer
  {name:'Nutrien Redwater Fertilizer',operator:'Nutrien',sector:'Agricultural Storage',subcategory:'Fertilizer Terminal',province:'AB',city:'Redwater',lat:53.950,lon:-113.100,capacity:300000,unit:'tonnes'},
  {name:'Nutrien Carseland Product Terminal',operator:'Nutrien',sector:'Agricultural Storage',subcategory:'Fertilizer Terminal',province:'AB',city:'Carseland',lat:50.841,lon:-113.464,capacity:200000,unit:'tonnes'},
  {name:'Yara Belle Plaine Warehouse',operator:'Yara',sector:'Agricultural Storage',subcategory:'Fertilizer Terminal',province:'SK',city:'Belle Plaine',lat:50.469,lon:-105.080,capacity:150000,unit:'tonnes'},
  {name:'G3 Hamilton Fertilizer Shed',operator:'G3',sector:'Agricultural Storage',subcategory:'Fertilizer Terminal',province:'ON',city:'Hamilton',lat:43.271,lon:-79.856,capacity:80000,unit:'tonnes'},

  // Bulk Commodities - Coal/Ore Stockyards
  {name:'Westshore Terminals (Coal)',operator:'Westshore',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Delta (Roberts Bank)',lat:49.020,lon:-123.160,capacity:2000000,unit:'tonnes'},
  {name:'Trigon Pacific Terminals (Coal/Petcoke)',operator:'Trigon',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Prince Rupert',lat:54.240,lon:-130.317,capacity:1800000,unit:'tonnes'},
  {name:'Neptune Terminals (Coal)',operator:'Neptune',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Vancouver (North Shore)',lat:49.310,lon:-123.070,capacity:1500000,unit:'tonnes'},
  {name:'Pacific Coast Terminals (Sulphur/Potash)',operator:'PCT',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Port Moody',lat:49.290,lon:-122.880,capacity:1300000,unit:'tonnes'},
  {name:'Vancouver Wharves (General Bulk)',operator:'DP World',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'North Vancouver',lat:49.314,lon:-123.102,capacity:600000,unit:'tonnes'},
  {name:'Ridley Terminals (RTI) Bulk',operator:'RTI',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Prince Rupert',lat:54.219,lon:-130.335,capacity:1200000,unit:'tonnes'},
  {name:'Fibreco Export (Wood Pellets)',operator:'Fibreco',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'North Vancouver',lat:49.314,lon:-123.078,capacity:500000,unit:'tonnes'},
  {name:'Duke Point Wood Pellet Terminal',operator:'Nanaimo Port Authority',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Nanaimo',lat:49.138,lon:-123.882,capacity:300000,unit:'tonnes'},
  {name:'Chemainus Log Sort Yard',operator:'Western Forest Products',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'BC',city:'Chemainus',lat:48.919,lon:-123.726,capacity:200000,unit:'tonnes'},
  {name:'Corner Brook Pulp & Paper Storage',operator:'Kruger',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'NL',city:'Corner Brook',lat:48.950,lon:-57.931,capacity:250000,unit:'tonnes'},
  {name:'Quebec City Bulk Terminal',operator:'QSL',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'QC',city:'Québec',lat:46.831,lon:-71.207,capacity:400000,unit:'tonnes'},
  {name:'Neptune Potash Storage (NVT)',operator:'Neptune/Canpotex',sector:'Bulk Commodities',subcategory:'Potash/Cement Storage',province:'BC',city:'Vancouver (North Shore)',lat:49.312,lon:-123.086,capacity:210000,unit:'tonnes'},
  {name:'QSL Sorel-Tracy Bulk Terminal',operator:'QSL',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'QC',city:'Sorel-Tracy',lat:46.043,lon:-73.123,capacity:400000,unit:'tonnes'},
  {name:'Port of Belledune Bulk Terminal',operator:'Belledune Port Authority',sector:'Bulk Commodities',subcategory:'Coal/Ore Stockyard',province:'NB',city:'Belledune',lat:47.912,lon:-65.823,capacity:500000,unit:'tonnes'},
  {name:'Lafarge Exshaw Clinker Yard',operator:'Lafarge',sector:'Bulk Commodities',subcategory:'Potash/Cement Storage',province:'AB',city:'Exshaw',lat:51.086,lon:-115.190,capacity:250000,unit:'tonnes'},
  {name:'Fibreco Export (Pellet Storage)',operator:'Fibreco',sector:'Bulk Commodities',subcategory:'Wood Pellet Storage',province:'BC',city:'North Vancouver',lat:49.313,lon:-123.084,capacity:21500,unit:'tonnes'},
  {name:'Westview (Prince Rupert) Pellet Storage',operator:'Drax/Westview',sector:'Bulk Commodities',subcategory:'Wood Pellet Storage',province:'BC',city:'Prince Rupert',lat:54.319,lon:-130.342,capacity:210000,unit:'tonnes'},

  // Bulk Commodities - Potash/Cement
  {name:'St. Marys Bowmanville Clinker Storage',operator:'St. Marys',sector:'Bulk Commodities',subcategory:'Potash/Cement Storage',province:'ON',city:'Bowmanville',lat:43.900,lon:-78.690,capacity:300000,unit:'tonnes'},
  {name:'Nutrien Vancouver (North Shore)',operator:'Nutrien',sector:'Bulk Commodities',subcategory:'Potash/Cement Storage',province:'BC',city:'Vancouver',lat:49.300,lon:-123.040,capacity:500000,unit:'tonnes'},

  // Container & Intermodal - Seaport Terminals
  {name:'Prince Rupert Fairview Container Terminal',operator:'PSA/DP World',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'BC',city:'Prince Rupert',lat:54.250,lon:-130.330,capacity:1500000,unit:'TEU/yr'},
  {name:'Vancouver Deltaport (T2/T3)',operator:'GCT',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'BC',city:'Delta (Roberts Bank)',lat:49.010,lon:-123.140,capacity:2400000,unit:'TEU/yr'},
  {name:'Vancouver Centerm',operator:'DP World',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'BC',city:'Vancouver',lat:49.288,lon:-123.095,capacity:1800000,unit:'TEU/yr'},
  {name:'Vancouver Vanterm',operator:'GCT',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'BC',city:'Vancouver',lat:49.287,lon:-123.094,capacity:1000000,unit:'TEU/yr'},
  {name:'Fraser Surrey (Multi-purpose)',operator:'DP World',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'BC',city:'Surrey',lat:49.165,lon:-122.930,capacity:400000,unit:'TEU/yr'},
  {name:'Annacis Auto Terminal',operator:'WWL/TSI',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'BC',city:'Delta (Annacis)',lat:49.168,lon:-122.936,capacity:300000,unit:'TEU/yr'},
  {name:'Fraser Wharves Auto Terminal',operator:'WWL',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'BC',city:'Richmond',lat:49.164,lon:-123.154,capacity:250000,unit:'TEU/yr'},
  {name:'Port of Montreal (Termont/PSA)',operator:'Termont/PSA',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'QC',city:'Montréal',lat:45.540,lon:-73.520,capacity:2000000,unit:'TEU/yr'},
  {name:'PSA Halifax Atlantic Hub',operator:'PSA',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'NS',city:'Halifax',lat:44.650,lon:-63.570,capacity:1000000,unit:'TEU/yr'},
  {name:'DP World Saint John',operator:'DP World',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'NB',city:'Saint John',lat:45.260,lon:-66.050,capacity:300000,unit:'TEU/yr'},
  {name:'Autoport (Ro-Ro Vehicle Terminal)',operator:'Autoport',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'NS',city:'Halifax (Eastern Passage)',lat:44.622,lon:-63.468,capacity:200000,unit:'TEU/yr'},
  {name:'Port of Nanaimo Vehicle Processing Centre',operator:'Nanaimo Port Authority',sector:'Container & Intermodal',subcategory:'Seaport Vehicle/Container',province:'BC',city:'Nanaimo (Duke Point)',lat:49.170,lon:-123.936,capacity:45000,unit:'TEU/yr'},
  {name:'Oceanex St. John’s Terminal Yard',operator:'Oceanex',sector:'Container & Intermodal',subcategory:'Seaport Container Terminal',province:'NL',city:'St. John’s',lat:47.566,lon:-52.706,capacity:220000,unit:'TEU/yr'},

  // Container & Intermodal - Inland Terminals
  {name:'CN Brampton Intermodal',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'ON',city:'Brampton',lat:43.720,lon:-79.670,capacity:750000,unit:'TEU/yr'},
  {name:'CPKC Vaughan Intermodal',operator:'CPKC',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'ON',city:'Vaughan',lat:43.850,lon:-79.560,capacity:600000,unit:'TEU/yr'},
  {name:'CN Taschereau Yard Intermodal',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'QC',city:'Montréal (Taschereau)',lat:45.485,lon:-73.695,capacity:800000,unit:'TEU/yr'},
  {name:'CN Edmonton Intermodal',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'AB',city:'Edmonton',lat:53.570,lon:-113.500,capacity:500000,unit:'TEU/yr'},
  {name:'CN Calgary Logistics Park',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'AB',city:'Rocky View (Calgary)',lat:51.150,lon:-113.870,capacity:500000,unit:'TEU/yr'},
  {name:'CPKC Calgary Intermodal (Alyth)',operator:'CPKC',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'AB',city:'Calgary',lat:51.025,lon:-114.023,capacity:400000,unit:'TEU/yr'},
  {name:'CentrePort Winnipeg (Inland Port)',operator:'CentrePort',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'MB',city:'Winnipeg',lat:49.940,lon:-97.250,capacity:400000,unit:'TEU/yr'},
  {name:'Regina Global Transportation Hub',operator:'GTH',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'SK',city:'Regina',lat:50.420,lon:-104.760,capacity:200000,unit:'TEU/yr'},
  {name:'CN Saskatoon Intermodal',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'SK',city:'Saskatoon',lat:52.142,lon:-106.675,capacity:250000,unit:'TEU/yr'},
  {name:'CN Prince George Intermodal',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'BC',city:'Prince George',lat:53.892,lon:-122.736,capacity:200000,unit:'TEU/yr'},
  {name:'CN Moncton Intermodal',operator:'CN',sector:'Container & Intermodal',subcategory:'Inland Intermodal Terminal',province:'NB',city:'Moncton',lat:46.113,lon:-64.805,capacity:200000,unit:'TEU/yr'}
];

// ============================================================
// DATASET 2: OIL & GAS PROCESSING
// ============================================================
const oilGasProcessingData = [
  // ===== Oil Processing – Domestic Refineries =====
  {name:'Suncor Edmonton Refinery',operator:'Suncor',sector:'Oil Processing',subcategory:'Domestic Crude Refinery',province:'AB',city:'Edmonton',lat:53.61,lon:-113.22,capacity:146,unit:'kbbl/d'},
  {name:'Imperial Oil Sarnia Refinery',operator:'Imperial Oil',sector:'Oil Processing',subcategory:'Domestic Crude Refinery',province:'ON',city:'Sarnia',lat:42.997,lon:-82.381,capacity:121,unit:'kbbl/d'},
  {name:'Co-op Refinery Complex Regina',operator:'FCL',sector:'Oil Processing',subcategory:'Domestic Crude Refinery',province:'SK',city:'Regina',lat:50.49,lon:-104.56,capacity:130,unit:'kbbl/d'},
  {name:'Parkland Prince George Refinery',operator:'Parkland',sector:'Oil Processing',subcategory:'Domestic Crude Refinery',province:'BC',city:'Prince George',lat:53.95,lon:-122.78,capacity:12.0,unit:'kbbl/d'},
  {name:'Cenovus Lloydminster Upgrader/Refinery',operator:'Cenovus',sector:'Oil Processing',subcategory:'Domestic Crude Refinery',province:'SK/AB',city:'Lloydminster',lat:53.285,lon:-110.012,capacity:115,unit:'kbbl/d'},

  // ===== Oil Processing – Offshore Refineries =====
  {name:'Valero Jean Gaulin Refinery (Lévis)',operator:'Valero',sector:'Oil Processing',subcategory:'Offshore Crude Refinery',province:'QC',city:'Lévis',lat:46.75,lon:-71.21,capacity:265,unit:'kbbl/d'},
  {name:'Suncor Montréal Refinery',operator:'Suncor',sector:'Oil Processing',subcategory:'Offshore Crude Refinery',province:'QC',city:'Montréal',lat:45.62,lon:-73.56,capacity:137,unit:'kbbl/d'},
  {name:'Irving Oil Saint John Refinery',operator:'Irving Oil',sector:'Oil Processing',subcategory:'Offshore Crude Refinery',province:'NB',city:'Saint John',lat:45.27,lon:-66.03,capacity:320,unit:'kbbl/d'},
  {name:'Braya Refining (Renewables conversion site)',operator:'Braya',sector:'Oil Processing',subcategory:'Offshore Crude Refinery',province:'NL',city:'Come-by-Chance',lat:47.81,lon:-54.02,capacity:0,unit:'kbbl/d'},

  // ===== Oil Processing – Petrochemical / Feedstock =====
  {name:'Shell Scotford Upgrader & Chemicals',operator:'Shell',sector:'Oil Processing',subcategory:'Petrochemical/Feedstock',province:'AB',city:'Fort Saskatchewan',lat:53.77,lon:-113.17,capacity:255,unit:'kbbl/d eq'},
  {name:'NOVA Chemicals Corunna (Cracker/Fractionation)',operator:'NOVA Chemicals',sector:'Oil Processing',subcategory:'Petrochemical/Feedstock',province:'ON',city:'Corunna',lat:42.90,lon:-82.42,capacity:150,unit:'kbbl/d eq'},
  {name:'Dow Fort Saskatchewan',operator:'Dow',sector:'Oil Processing',subcategory:'Petrochemical/Feedstock',province:'AB',city:'Fort Saskatchewan',lat:53.71,lon:-113.19,capacity:180,unit:'kbbl/d eq'},

  // ===== Petrochemicals / Polymers =====
  {name:'Inter Pipeline Heartland PP Complex',operator:'Inter Pipeline',sector:'Oil Processing',subcategory:'Petrochemical/Polypropylene',province:'AB',city:'Strathcona County',lat:53.754,lon:-113.128,capacity:525,unit:'kT/yr'},
  {name:'Pembina PDH/PP (Redwater)',operator:'Pembina',sector:'Oil Processing',subcategory:'Petrochemical/PDH+PP',province:'AB',city:'Redwater',lat:53.952,lon:-113.106,capacity:550,unit:'kT/yr'},
  {name:'NOVA Chemicals Joffre Complex (Ethylene)',operator:'NOVA Chemicals',sector:'Oil Processing',subcategory:'Petrochemical/Feedstock',province:'AB',city:'Joffre',lat:52.259,lon:-113.535,capacity:2800,unit:'kT/yr'},

  // ===== Oil Processing – Renewables =====
  {name:'Braya Renewable Fuels (Come-by-Chance)',operator:'Braya',sector:'Oil Processing',subcategory:'Renewables',province:'NL',city:'Come-by-Chance',lat:47.81,lon:-54.02,capacity:18.0,unit:'kbbl/d eq'},
  {name:'Parkland Burnaby (Co-processing)',operator:'Parkland',sector:'Oil Processing',subcategory:'Renewables',province:'BC',city:'Burnaby',lat:49.17,lon:-123.03,capacity:6.0,unit:'kbbl/d eq'},

  // ===== Gas Processing – Gas Plants =====
  {name:'Keyera Fort Saskatchewan Gas Complex',operator:'Keyera',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'AB',city:'Fort Saskatchewan',lat:53.71,lon:-113.22,capacity:600,unit:'MMcf/d'},
  {name:'AltaGas Harmattan Gas Processing Complex',operator:'AltaGas',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'AB',city:'Didsbury (Harmattan)',lat:51.88,lon:-114.31,capacity:490,unit:'MMcf/d'},
  {name:'Empress Straddle Plant (AB side)',operator:'Multiple (Pembina/TC)',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'AB',city:'Empress',lat:50.05,lon:-110.00,capacity:2000,unit:'MMcf/d'},
  {name:'AltaGas Blair Creek Gas Plant',operator:'AltaGas',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'BC',city:'NE BC (Blair Creek)',lat:57.00,lon:-122.20,capacity:84.0,unit:'MMcf/d'},
  {name:'AltaGas Townsend Gas Plant',operator:'AltaGas',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'BC',city:'NE BC (Townsend)',lat:57.59,lon:-122.32,capacity:198,unit:'MMcf/d'},
  {name:'NorthRiver McMahon Gas Plant (Taylor)',operator:'NorthRiver Midstream',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'BC',city:'Taylor',lat:56.16,lon:-120.68,capacity:420,unit:'MMcf/d'},
  {name:'NB McCully Gas Plant (Sussex)',operator:'Headwater/Partner',sector:'Gas Processing',subcategory:'Gas Processing Plant',province:'NB',city:'Sussex (McCully)',lat:45.74,lon:-65.51,capacity:30.0,unit:'MMcf/d'},

  // ===== Gas Processing – NGL Fractionation =====
  {name:'Pembina Redwater Fractionation Complex',operator:'Pembina',sector:'Gas Processing',subcategory:'NGL Fractionation',province:'AB',city:'Redwater',lat:53.94,lon:-113.10,capacity:200,unit:'kbbl/d'},
  {name:'Keyera KFS Fractionators',operator:'Keyera',sector:'Gas Processing',subcategory:'NGL Fractionation',province:'AB',city:'Fort Saskatchewan',lat:53.73,lon:-113.24,capacity:110,unit:'kbbl/d'},
  {name:'AltaGas North Pine Liquids Separation',operator:'AltaGas',sector:'Gas Processing',subcategory:'NGL Fractionation',province:'BC',city:'North Pine (near FSJ)',lat:57.04,lon:-121.59,capacity:10.0,unit:'kbbl/d'},
  {name:'NOVA Corunna Fractionator',operator:'NOVA Chemicals',sector:'Gas Processing',subcategory:'NGL Fractionation',province:'ON',city:'Corunna',lat:42.91,lon:-82.36,capacity:100,unit:'kbbl/d'},

  // ===== Gas Processing – LNG =====
  {name:'LNG Canada (Kitimat)',operator:'LNG Canada',sector:'Gas Processing',subcategory:'LNG Processing',province:'BC',city:'Kitimat',lat:54.01,lon:-128.65,capacity:14.0,unit:'MTPA'},
  {name:'FortisBC Tilbury LNG',operator:'FortisBC',sector:'Gas Processing',subcategory:'LNG Processing',province:'BC',city:'Delta (Tilbury)',lat:49.13,lon:-123.06,capacity:0.6,unit:'MTPA'},
  {name:'Énergir Montréal-Est LNG',operator:'Énergir (Gaz Métro)',sector:'Gas Processing',subcategory:'LNG Processing',province:'QC',city:'Montréal-Est',lat:45.62,lon:-73.49,capacity:0.3,unit:'MTPA'}
];

// ============================================================
// DATASET 3: RAW MATERIALS PROCESSING
// ============================================================
const rawMaterialsProcessingData = [
  // ===== Metals – Steel =====
  {name:'ArcelorMittal Dofasco',operator:'ArcelorMittal',sector:'Metals',subcategory:'Steel',province:'ON',city:'Hamilton',lat:43.26,lon:-79.83,capacity:2.5,unit:'MTPA'},
  {name:'Algoma Steel',operator:'Algoma Steel',sector:'Metals',subcategory:'Steel',province:'ON',city:'Sault Ste. Marie',lat:46.53,lon:-84.35,capacity:3.0,unit:'MTPA'},
  {name:'EVRAZ Regina',operator:'EVRAZ',sector:'Metals',subcategory:'Steel',province:'SK',city:'Regina',lat:50.48,lon:-104.64,capacity:0.7,unit:'MTPA'},
  {name:'Stelco Lake Erie Works',operator:'Stelco',sector:'Metals',subcategory:'Steel',province:'ON',city:'Nanticoke',lat:42.783,lon:-80.054,capacity:2.6,unit:'MTPA'},
  {name:'Glencore Sudbury (Falconbridge) Smelter',operator:'Glencore',sector:'Metals',subcategory:'Copper/Nickel',province:'ON',city:'Sudbury',lat:46.55,lon:-80.87,capacity:0.25,unit:'MTPA'},
  {name:'Rio Tinto Fer et Titane',operator:'Rio Tinto',sector:'Metals',subcategory:'Other',province:'QC',city:'Sorel-Tracy',lat:46.04,lon:-73.11,capacity:1.1,unit:'MTPA'},

  // ===== Metals – Aluminum =====
  {name:'Rio Tinto Kitimat',operator:'Rio Tinto',sector:'Metals',subcategory:'Aluminum',province:'BC',city:'Kitimat',lat:54.05,lon:-128.65,capacity:0.42,unit:'MTPA'},
  {name:'Alouette Sept-Îles',operator:'Alouette',sector:'Metals',subcategory:'Aluminum',province:'QC',city:'Sept-Îles',lat:50.21,lon:-66.38,capacity:0.60,unit:'MTPA'},

  // ===== Metals – Copper/Nickel =====
  {name:'Vale Sudbury Smelter',operator:'Vale',sector:'Metals',subcategory:'Copper/Nickel',province:'ON',city:'Sudbury',lat:46.49,lon:-81.01,capacity:0.40,unit:'MTPA'},
  {name:'Teck Trail Smelter',operator:'Teck',sector:'Metals',subcategory:'Copper/Nickel',province:'BC',city:'Trail',lat:49.10,lon:-117.70,capacity:0.50,unit:'MTPA'},

  // ===== Forest – Pulp =====
  {name:'Resolute Thunder Bay',operator:'Resolute',sector:'Forest',subcategory:'Pulp',province:'ON',city:'Thunder Bay',lat:48.42,lon:-89.27,capacity:0.50,unit:'MTPA'},
  {name:'Irving Pulp & Paper',operator:'Irving',sector:'Forest',subcategory:'Pulp',province:'NB',city:'Saint John',lat:45.27,lon:-66.06,capacity:0.32,unit:'MTPA'},
  {name:'Paper Excellence Crofton',operator:'Paper Excellence',sector:'Forest',subcategory:'Pulp',province:'BC',city:'Crofton',lat:48.84,lon:-123.63,capacity:0.40,unit:'MTPA'},

  // ===== Forest – Sawmills & Panels =====
  {name:'West Fraser Quesnel',operator:'West Fraser',sector:'Forest',subcategory:'Sawmills',province:'BC',city:'Quesnel',lat:52.98,lon:-122.49,capacity:600,unit:'k m³/yr'},
  {name:'Canfor Prince George',operator:'Canfor',sector:'Forest',subcategory:'Sawmills',province:'BC',city:'Prince George',lat:53.91,lon:-122.75,capacity:550,unit:'k m³/yr'},
  {name:'Tolko Armstrong Lumber',operator:'Tolko',sector:'Forest',subcategory:'Sawmills',province:'BC',city:'Armstrong',lat:50.45,lon:-119.20,capacity:600,unit:'k m³/yr'},
  {name:'West Fraser Williams Lake Sawmill',operator:'West Fraser',sector:'Forest',subcategory:'Sawmills',province:'BC',city:'Williams Lake',lat:52.14,lon:-122.15,capacity:700,unit:'k m³/yr'},
  {name:'Canfor Houston Sawmill',operator:'Canfor',sector:'Forest',subcategory:'Sawmills',province:'BC',city:'Houston',lat:54.40,lon:-126.64,capacity:650,unit:'k m³/yr'},
  {name:'Interfor Castlegar Sawmill',operator:'Interfor',sector:'Forest',subcategory:'Sawmills',province:'BC',city:'Castlegar',lat:49.31,lon:-117.65,capacity:500,unit:'k m³/yr'},
  {name:'West Fraser Quesnel Plywood',operator:'West Fraser',sector:'Forest',subcategory:'Panels',province:'BC',city:'Quesnel',lat:52.99,lon:-122.50,capacity:300,unit:'k m³/yr'},
  {name:'Norbord Grande Prairie',operator:'Norbord',sector:'Forest',subcategory:'Panels',province:'AB',city:'Grande Prairie',lat:55.17,lon:-118.80,capacity:300,unit:'k m³/yr'},

  // ===== Minerals – Cement =====
  {name:'Lafarge Richmond',operator:'Lafarge',sector:'Minerals',subcategory:'Cement',province:'BC',city:'Richmond',lat:49.17,lon:-123.10,capacity:1.0,unit:'MTPA'},
  {name:'Ash Grove Cement (Morden)',operator:'Ash Grove',sector:'Minerals',subcategory:'Cement',province:'MB',city:'Morden',lat:49.19,lon:-98.10,capacity:0.50,unit:'MTPA'},
  {name:'St. Marys Bowmanville',operator:'St. Marys',sector:'Minerals',subcategory:'Cement',province:'ON',city:'Bowmanville',lat:43.90,lon:-78.69,capacity:1.5,unit:'MTPA'},
  {name:'Lafarge Exshaw Cement Plant',operator:'Lafarge',sector:'Minerals',subcategory:'Cement',province:'AB',city:'Exshaw',lat:51.09,lon:-115.19,capacity:2.5,unit:'MTPA'},
  {name:'CRH Joliette Cement',operator:'CRH',sector:'Minerals',subcategory:'Cement',province:'QC',city:'Joliette',lat:46.01,lon:-73.40,capacity:1.2,unit:'MTPA'},
  {name:'Heidelberg (Lehigh) Delta Cement',operator:'Heidelberg Materials',sector:'Minerals',subcategory:'Cement',province:'BC',city:'Delta',lat:49.14,lon:-122.95,capacity:0.80,unit:'MTPA'},

  // ===== Minerals – Glass =====
  {name:'Owens-Illinois Montreal',operator:'Owens-Illinois',sector:'Minerals',subcategory:'Glass',province:'QC',city:'Montréal',lat:45.54,lon:-73.64,capacity:0.25,unit:'MTPA'},
  {name:'Vitro Flat Glass Windsor',operator:'Vitro',sector:'Minerals',subcategory:'Glass',province:'ON',city:'Windsor',lat:42.29,lon:-83.02,capacity:0.30,unit:'MTPA'},

  // ===== Minerals – Other (Salt / Potash etc.) =====
  {name:'Windsor Salt',operator:'Windsor Salt',sector:'Minerals',subcategory:'Other',province:'ON',city:'Windsor',lat:42.31,lon:-83.06,capacity:0.60,unit:'MTPA'},
  {name:'Nutrien Rocanville',operator:'Nutrien',sector:'Minerals',subcategory:'Other',province:'SK',city:'Rocanville',lat:50.47,lon:-102.33,capacity:2.8,unit:'MTPA'},
  {name:'Windsor Salt (Goderich surface ops)',operator:'Windsor Salt',sector:'Minerals',subcategory:'Other',province:'ON',city:'Goderich',lat:43.75,lon:-81.71,capacity:1.5,unit:'MTPA'}
];

// ============================================================
// DATASET 4: AGRICULTURAL PROCESSING
// ============================================================
const agriProcessingData = [
  // ===== Crop-based – Oilseed =====
  {name:'Cargill Camrose (Canola)',operator:'Cargill',sector:'Agricultural Processing',subcategory:'Oilseed',province:'AB',city:'Camrose',lat:53.02,lon:-112.83,capacity:1.1,unit:'MTPA'},
  {name:'ADM Lloydminster (Canola)',operator:'ADM',sector:'Agricultural Processing',subcategory:'Oilseed',province:'AB/SK',city:'Lloydminster',lat:53.28,lon:-110.03,capacity:1.2,unit:'MTPA'},
  {name:'Bunge Hamilton (Soybean)',operator:'Bunge',sector:'Agricultural Processing',subcategory:'Oilseed',province:'ON',city:'Hamilton',lat:43.27,lon:-79.84,capacity:0.9,unit:'MTPA'},
  {name:'Richardson Yorkton (Canola)',operator:'Richardson',sector:'Agricultural Processing',subcategory:'Oilseed',province:'SK',city:'Yorkton',lat:51.22,lon:-102.45,capacity:2.5,unit:'MTPA'},
  {name:'Cargill Clavet (Canola)',operator:'Cargill',sector:'Agricultural Processing',subcategory:'Oilseed',province:'SK',city:'Clavet',lat:52.05,lon:-106.36,capacity:1.5,unit:'MTPA'},
  {name:'ADM Windsor (Soy/Oilseeds)',operator:'ADM',sector:'Agricultural Processing',subcategory:'Oilseed',province:'ON',city:'Windsor',lat:42.30,lon:-83.06,capacity:1.3,unit:'MTPA'},
  {name:'Bunge Altona (Canola)',operator:'Bunge',sector:'Agricultural Processing',subcategory:'Oilseed',province:'MB',city:'Altona',lat:49.10,lon:-97.56,capacity:0.90,unit:'MTPA'},

  // ===== Crop-based – Pulse =====
  {name:'Roquette (Pea Protein)',operator:'Roquette',sector:'Agricultural Processing',subcategory:'Pulse',province:'MB',city:'Portage la Prairie',lat:49.99,lon:-98.34,capacity:0.25,unit:'MTPA'},
  {name:'AGT Foods Regina (Pulse)',operator:'AGT Foods',sector:'Agricultural Processing',subcategory:'Pulse',province:'SK',city:'Regina',lat:50.44,lon:-104.68,capacity:0.25,unit:'MTPA'},

  // ===== Crop-based – Ethanol =====
  {name:'Greenfield Varennes (Ethanol)',operator:'Greenfield',sector:'Agricultural Processing',subcategory:'Ethanol',province:'QC',city:'Varennes',lat:45.69,lon:-73.44,capacity:0.32,unit:'MTPA'},
  {name:'Greenfield Ethanol Chatham',operator:'Greenfield',sector:'Agricultural Processing',subcategory:'Ethanol',province:'ON',city:'Chatham',lat:42.42,lon:-82.18,capacity:0.16,unit:'MTPA'},
  {name:'IGPC Ethanol Aylmer',operator:'IGPC',sector:'Agricultural Processing',subcategory:'Ethanol',province:'ON',city:'Aylmer',lat:42.78,lon:-80.96,capacity:0.15,unit:'MTPA'},
  {name:'Husky (FCL) Minnedosa Ethanol',operator:'Federated Co-op',sector:'Agricultural Processing',subcategory:'Ethanol',province:'MB',city:'Minnedosa',lat:50.24,lon:-99.84,capacity:0.10,unit:'MTPA'},

  // ===== Crop-based – Feed =====
  {name:'FCL Feed (Saskatoon)',operator:'FCL',sector:'Agricultural Processing',subcategory:'Feed',province:'SK',city:'Saskatoon',lat:52.12,lon:-106.67,capacity:0.20,unit:'MTPA'},
  {name:'Hi-Pro Feeds Lethbridge',operator:'Hi-Pro',sector:'Agricultural Processing',subcategory:'Feed',province:'AB',city:'Lethbridge',lat:49.70,lon:-112.81,capacity:0.20,unit:'MTPA'},
  {name:'Maple Leaf Brandon Feed',operator:'Maple Leaf',sector:'Agricultural Processing',subcategory:'Feed',province:'MB',city:'Brandon',lat:49.86,lon:-99.98,capacity:0.30,unit:'MTPA'},

  // ===== Animal – Meat =====
  {name:'Cargill Guelph (Beef)',operator:'Cargill',sector:'Agricultural Processing',subcategory:'Meat',province:'ON',city:'Guelph',lat:43.52,lon:-80.22,capacity:120,unit:'kMT/yr'},
  {name:'Cargill High River (Beef)',operator:'Cargill',sector:'Agricultural Processing',subcategory:'Meat',province:'AB',city:'High River',lat:50.59,lon:-113.87,capacity:450,unit:'kMT/yr'},
  {name:'JBS Brooks (Beef)',operator:'JBS',sector:'Agricultural Processing',subcategory:'Meat',province:'AB',city:'Brooks',lat:50.57,lon:-111.89,capacity:430,unit:'kMT/yr'},
  {name:'Maple Leaf Brandon (Pork)',operator:'Maple Leaf Foods',sector:'Agricultural Processing',subcategory:'Meat',province:'MB',city:'Brandon',lat:49.86,lon:-99.95,capacity:460,unit:'kMT/yr'},
  {name:'Olymel Red Deer (Pork)',operator:'Olymel',sector:'Agricultural Processing',subcategory:'Meat',province:'AB',city:'Red Deer',lat:52.32,lon:-113.74,capacity:140,unit:'kMT/yr'},
  {name:'Sofina Burlington (Poultry)',operator:'Sofina Foods',sector:'Agricultural Processing',subcategory:'Meat',province:'ON',city:'Burlington',lat:43.32,lon:-79.81,capacity:45,unit:'kMT/yr'},

  // ===== Crop-based – Sugar/Starch =====
  {name:'Rogers Sugar (Taber)',operator:'Rogers Sugar',sector:'Agricultural Processing',subcategory:'Sugar/Starch',province:'AB',city:'Taber',lat:49.79,lon:-112.15,capacity:0.13,unit:'MTPA'},
  {name:'Rogers Sugar Montréal',operator:'Rogers Sugar',sector:'Agricultural Processing',subcategory:'Sugar/Starch',province:'QC',city:'Montréal',lat:45.54,lon:-73.53,capacity:0.24,unit:'MTPA'},
  {name:'Rogers Sugar Vancouver',operator:'Rogers Sugar',sector:'Agricultural Processing',subcategory:'Sugar/Starch',province:'BC',city:'Vancouver',lat:49.28,lon:-123.09,capacity:0.10,unit:'MTPA'},

  // ===== Dairy Processing =====
  {name:'Agropur St-Hyacinthe',operator:'Agropur',sector:'Agricultural Processing',subcategory:'Dairy',province:'QC',city:'St-Hyacinthe',lat:45.63,lon:-72.95,capacity:300,unit:'kMT/yr'},
  {name:'Saputo Burnaby',operator:'Saputo',sector:'Agricultural Processing',subcategory:'Dairy',province:'BC',city:'Burnaby',lat:49.25,lon:-122.99,capacity:120,unit:'kMT/yr'},
  {name:'Agropur Saint-Laurent',operator:'Agropur',sector:'Agricultural Processing',subcategory:'Dairy',province:'QC',city:'Montréal (Saint-Laurent)',lat:45.50,lon:-73.69,capacity:300,unit:'kMT/yr'},
  {name:'Saputo Port Coquitlam',operator:'Saputo',sector:'Agricultural Processing',subcategory:'Dairy',province:'BC',city:'Port Coquitlam',lat:49.27,lon:-122.77,capacity:140,unit:'kMT/yr'},
  {name:'Gay Lea Teeswater',operator:'Gay Lea',sector:'Agricultural Processing',subcategory:'Dairy',province:'ON',city:'Teeswater',lat:44.05,lon:-81.31,capacity:120,unit:'kMT/yr'},
  {name:'Lactalis (Parmalat) Winchester',operator:'Lactalis',sector:'Agricultural Processing',subcategory:'Dairy',province:'ON',city:'Winchester',lat:45.09,lon:-75.35,capacity:160,unit:'kMT/yr'},

  // ===== Seafood Processing =====
  {name:'High Liner Lunenburg',operator:'High Liner',sector:'Agricultural Processing',subcategory:'Seafood',province:'NS',city:'Lunenburg',lat:44.38,lon:-64.31,capacity:250,unit:'kMT/yr'},
  {name:'Cooke Aquaculture',operator:'Cooke',sector:'Agricultural Processing',subcategory:'Seafood',province:'NB',city:'Blacks Harbour',lat:45.05,lon:-66.78,capacity:150,unit:'kMT/yr'},
  {name:'Delta Pacific Seafoods (Richmond)',operator:'Delta Pacific Seafoods',sector:'Agricultural Processing',subcategory:'Seafood',province:'BC',city:'Richmond',lat:49.15,lon:-123.06,capacity:30,unit:'kMT/yr'},
  {name:'St. Jean’s Cannery & Smokehouse',operator:'St. Jean’s',sector:'Agricultural Processing',subcategory:'Seafood',province:'BC',city:'Nanaimo',lat:49.17,lon:-123.95,capacity:13,unit:'kMT/yr'},
  {name:'Coast Tsimshian Seafood (Prince Rupert)',operator:'Lax Kw’alaams/Partners',sector:'Agricultural Processing',subcategory:'Seafood',province:'BC',city:'Prince Rupert',lat:54.32,lon:-130.33,capacity:66,unit:'kMT/yr'},
  {name:'Clearwater Seafoods – Lunenburg',operator:'Clearwater',sector:'Agricultural Processing',subcategory:'Seafood',province:'NS',city:'Lunenburg',lat:44.37,lon:-64.32,capacity:20,unit:'kMT/yr'},
  {name:'Ocean Choice International – St. John’s',operator:'OCI',sector:'Agricultural Processing',subcategory:'Seafood',province:'NL',city:'St. John’s',lat:47.57,lon:-52.71,capacity:16,unit:'kMT/yr'}
];

// ============================================================
// EXPORT FOR USE IN VIEWER
// ============================================================

// Combined export with dataset identifiers
const allFacilities = [
  ...storageData.map(f => ({...f, dataset: 'Storage'})),
  ...oilGasProcessingData.map(f => ({...f, dataset: 'Oil & Gas Processing'})),
  ...rawMaterialsProcessingData.map(f => ({...f, dataset: 'Raw Materials'})),
  ...agriProcessingData.map(f => ({...f, dataset: 'Agricultural Processing'}))
];

// If using in browser, expose to window
if (typeof window !== 'undefined') {
  window.canadaIndustrialData = {
    storage: storageData,
    oilGasProcessing: oilGasProcessingData,
    rawMaterials: rawMaterialsProcessingData,
    agriProcessing: agriProcessingData,
    all: allFacilities
  };
}

// For Node.js/module exports
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

// You can also save as JSON files:
// const fs = require('fs');
// fs.writeFileSync('storage.json', JSON.stringify(storageData, null, 2));
// fs.writeFileSync('oil_gas_processing.json', JSON.stringify(oilGasProcessingData, null, 2));
// fs.writeFileSync('raw_materials.json', JSON.stringify(rawMaterialsProcessingData, null, 2));
// fs.writeFileSync('agri_processing.json', JSON.stringify(agriProcessingData, null, 2));
// fs.writeFileSync('all_facilities.json', JSON.stringify(allFacilities, null, 2));