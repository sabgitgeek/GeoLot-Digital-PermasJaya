// Define basemap layers
var baseLayers = {
    "OSM Standard": new ol.layer.Tile({
        title: "OSM Standard",
        type: "base",
        visible: true,
        source: new ol.source.XYZ({
            url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
            attributions: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        })
    }),

    "Satellite (Esri)": new ol.layer.Tile({
        title: "Esri Satellite",
        type: "base",
        visible: false,
        source: new ol.source.XYZ({
            url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            attributions: "© Esri"
        })
    }),

    "Google Satellite": new ol.layer.Tile({
        title: "Google Satellite",
        type: "base",
        visible: false,
        source: new ol.source.XYZ({
            url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
            attributions: "© Google"
        })
    })
};

// Create map instance before calling map.getLayers()
var map = new ol.Map({
    target: 'map',
    renderer: 'canvas',
    layers: [
        baseLayers["OSM Standard"], // Default base map
        baseLayers["Satellite (Esri)"],
        baseLayers["Google Satellite"]
    ], 
    view: new ol.View({
         maxZoom: 28, 
         minZoom: 1, 
         projection: new ol.proj.Projection({
            code: 'EPSG:4326',
            units: 'degrees'
        })
    })
});

// Remove unnecessary map.getLayers().insertAt() calls

// Add Layer Switcher
var layerSwitcher = new ol.control.LayerSwitcher({
    tipLabel: "Layers"
});
map.addControl(layerSwitcher);

