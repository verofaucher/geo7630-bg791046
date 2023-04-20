// création de la carte Maplibre GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=Ex6F5Y3UDjwvS2ekViha', // URL du style de la carte
    center: [-73.5, 45.5], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});
//ajout des couches geojson
map.on("load", () => {
  map.addSource("arbres_abattus", {
    type: "geojson",
    data: "https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/arbres_abattus_3857/FeatureServer/0/query?f=pgeojson&where=1=1&outFields=*"
  });
  
  map.addLayer({
    'id': 'arbres_abattus',
    'type': 'circle',
    'source': 'arbres_abattus',
  });

  map.addSource("frenes_proteges", {
    type: "geojson",
    data: "https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/frenes_proteges_tp4/FeatureServer/0/query?f=pgeojson&where=1=1&outFields=*"
  });
  
  map.addLayer({
    'id': 'frenes_proteges',
    'type': 'circle',
    'source': 'frenes_proteges',
    'paint': {
      'circle-radius': 2,
      'circle-color': '#8DEAEB',
    }
  });

  //ajout de la tuile d'arrondissements
  map.addSource("arrondissements", {
    type: "vector",
    tiles: "https://vectortileservices6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/limites_arrondissements/VectorTileServer/tile/{z}/{y}/{x}.pbf"
  });
  
  map.addLayer({
    'id': 'arrondissements',
    'type': 'fill',
    'source': 'arrondissements',
    paint: {
      "fill-color": "hsl(200, 80%, 50%)",
      "fill-opacity": 0.5,
      "fill-outline-color": "olivedrab"
    }
  });
});