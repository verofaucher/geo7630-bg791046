// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/streets/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [45,5, -73,5], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

//ajout des couches geojson
map.on("load", () => {

  map.addSource("frenes_abattus", {
    type: "geojson",
    data: "https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/arbres_abattus_frenes/FeatureServer/0/query?f=pgeojson&where=1=1&outFields=*"
  });
  
  map.addLayer({
    'id': 'frenes_abattus',
    'type': 'circle',
    'source': 'frenes_abattus',
    });
  });