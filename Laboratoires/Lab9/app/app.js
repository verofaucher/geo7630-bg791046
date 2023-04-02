// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/streets/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

const myLayers = ['grid', 'buffer', 'rdp', 'union', 'joined']

map.on('load', function () {
    loadRandomPointsLayer()
    map.addControl(new MaplibreLegendControl({ 
        rdp: "rdp", 
        grid: 'grid',
        union: 'union',
        buffer: 'buffer',
        joined: 'joined'
    }, { onlyRendered: true }), "bottom-left");
});

map.on('idle', function () {
    const layers = map.getStyle().layers;
    layers.forEach((layer) => {
        if (layer.id == 'joined') {
            dynamicCount()
        } else if (layer.id == 'rdp') {
            featureCount()
        }        
    });
})
