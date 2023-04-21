// création de la carte Maplibre GL
var map = new maplibregl.Map({
  container: 'map', // identifiant de l'élément HTML conteneur de la carte
  style: 'https://api.maptiler.com/maps/dataviz/style.json?key=LDQs8iznuQLxwdcZkMCX', // URL du style de la carte
  center: [45.5556,-73.6851], // position centrale de la carte
  zoom: 9, // niveau de zoom initial
  hash: true // activation du hash pour la gestion de l'historique de la carte
});

//ajout des couches geojson
map.on("load", () => {
  map.addSource("arbres_abattus", {
    type: "geojson",
    data: "https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/arbres_abattus_3857/FeatureServer/0/query?f=pgeojson&where=1=1&outFields=*",
    cluster: true,
    clusterMaxZoom: 14, // Max zoom to cluster points on
    clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
  });

  map.addLayer({
    id: 'clusters_abattus',
    type: 'circle',
    source: 'arbres_abattus',
    filter: ['has', 'point_count'],
    paint: {
      // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
      // with three steps to implement three types of circles:
      //   * Blue, 20px circles when point count is less than 100
      //   * Yellow, 30px circles when point count is between 100 and 750
      //   * Pink, 40px circles when point count is greater than or equal to 750
      'circle-color': [
        'step',
        ['get', 'point_count'],
        '#51bbd6',
        100,
        '#f1f075',
        750,
        '#f28cb1'
      ],
      'circle-radius': [
        'step',
        ['get', 'point_count'],
        20,
        100,
        30,
        750,
        40
      ]
    }
  });

  map.addSource("frenes_proteges", {
    type: "geojson",
    data: "https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/frenes_proteges_tp4/FeatureServer/0/query?f=pgeojson&where=1=1&outFields=*",
    cluster: true,
    clusterMaxZoom: 14, // Max zoom to cluster points on
    clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
  });

  map.addLayer({
    id: 'clusters_proteges',
    type: 'circle',
    source: 'frenes_proteges',
    filter: ['has', 'point_count'],
    paint: {
  // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
  // with three steps to implement three types of circles:
  //   * Blue, 20px circles when point count is less than 100
  //   * Yellow, 30px circles when point count is between 100 and 750
  //   * Pink, 40px circles when point count is greater than or equal to 750
  'circle-color': [
  'step',
  ['get', 'point_count'],
  '#51bbd6',
  100,
  '#f1f075',
  750,
  '#f28cb1'
  ],
  'circle-radius': [
  'step',
  ['get', 'point_count'],
  20,
  100,
  30,
  750,
  40
  ]
  }

});

  //ajout de la tuile d'arrondissements
  map.addSource("arrondissements", {
    type: "vector",
    tiles: [
      "https://vectortileservices6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/limites_arrondissements/VectorTileServer/tile/{z}/{y}/{x}.pbf"
    ]
  });
  
  map.addLayer({
    'id': 'arrondissements',
    'type': 'fill',
    'source': 'arrondissements',
    "source-layer": "limites_arrondissements",
    paint: {
      "fill-color": "hsl(200, 80%, 50%)",
      "fill-opacity": 0.5,
      "fill-outline-color": "olivedrab"
    }
  });

  
});