ol.proj.proj4.register(proj4);
var wms_layers = [];

// OSM Standard Basemap
var lyr_OSMStandard_0 = new ol.layer.Tile({
    'title': 'OSM Standard',
    'type': 'base',
    'opacity': 1.0,
    source: new ol.source.XYZ({
        attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
        url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});

// Google Satellite Basemap
var lyr_GoogleSatellite = new ol.layer.Tile({
    'title': 'Google Satellite',
    'type': 'base',
    'opacity': 1.0,
    source: new ol.source.XYZ({
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        attributions: '&copy; <a href="https://www.google.com/maps">Google Maps</a>'
    })
});

// ESRI Satellite Basemap
var lyr_ESRISatellite = new ol.layer.Tile({
    'title': 'ESRI Satellite',
    'type': 'base',
    'opacity': 1.0,
    source: new ol.source.XYZ({
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attributions: '&copy; <a href="https://www.esri.com/">Esri</a>'
    })
});

// Parking Layer
var format_FASA1PARKING_1 = new ol.format.GeoJSON();
var features_FASA1PARKING_1 = format_FASA1PARKING_1.readFeatures(json_FASA1PARKING_1, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:4326'
});
var jsonSource_FASA1PARKING_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FASA1PARKING_1.addFeatures(features_FASA1PARKING_1);
var cluster_FASA1PARKING_1 = new ol.source.Cluster({
    distance: 30,
    source: jsonSource_FASA1PARKING_1
});
var lyr_FASA1PARKING_1 = new ol.layer.Vector({
    declutter: false,
    source: cluster_FASA1PARKING_1,
    style: style_FASA1PARKING_1,
    popuplayertitle: 'FASA 1 (PARKING)',
    interactive: true,
    title: '<img src="styles/legend/FASA1PARKING_1.png" /> FASA 1 (PARKING)'
});

// Set layers visibility
lyr_OSMStandard_0.setVisible(true);
lyr_FASA1PARKING_1.setVisible(true);

// List of layers including multiple base maps
var layersList = [lyr_OSMStandard_0, lyr_GoogleSatellite, lyr_ESRISatellite, lyr_FASA1PARKING_1];

// Add alias and labels for attributes in vector layer
lyr_FASA1PARKING_1.set('fieldAliases', {
    'Kod Caw': 'Kod Caw', 'Nama Jalan': 'Nama Jalan', 'Kod Taman': 'Kod Taman', 'Kod Jalan': 'Kod Jalan',
    'Status': 'Status', 'Kod Petak': 'Kod Petak', 'Lat': 'Lat', 'Lon': 'Lon',
});
lyr_FASA1PARKING_1.set('fieldImages', {
    'Kod Caw': '', 'Nama Jalan': '', 'Kod Taman': '', 'Kod Jalan': '', 'Status': '', 'Kod Petak': '', 'Lat': '', 'Lon': '',
});
lyr_FASA1PARKING_1.set('fieldLabels', {
    'Kod Caw': 'inline label - always visible', 'Nama Jalan': 'inline label - always visible',
    'Kod Taman': 'inline label - always visible', 'Kod Jalan': 'inline label - always visible',
    'Status': 'inline label - always visible', 'Kod Petak': 'inline label - always visible',
    'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible',
});
lyr_FASA1PARKING_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
