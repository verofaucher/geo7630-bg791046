// Création de la carte Maplibre GL
var map = new maplibregl.Map({
  container: 'map', // identifiant de l'élément HTML conteneur de la carte
  style: 'https://api.maptiler.com/maps/31976b0e-8018-49ec-b6f4-aeb737017e40/style.json?key=LDQs8iznuQLxwdcZkMCX', // URL du style de la carte
  center: [-73.6851, 45.5556], // position centrale de la carte
  zoom: 10, // niveau de zoom initial
  hash: true // activation du hash pour la gestion de l'historique de la carte
});

 //Ajouter la couche WFS des arbres abattus
map.on("load", () => {
  map.addSource("arbres_abattus", {
    type: "geojson",
    data: "https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/arbres_abattus_3857/FeatureServer/0/query?f=pgeojson&where=1=1&outFields=*",
    cluster: true,
    clusterMaxZoom: 14, // Max zoom to cluster points on
    clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
  });
//Création des clusters d'agglomération
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
        '#FF776D',
        100,
        '#D60D03',
        750,
        '#960902'
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
  //Ajouter la couche WFS des frênes protégés
  map.addSource("frenes_proteges", {
    type: "geojson",
    data: "https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/frenes_proteges_tp4/FeatureServer/0/query?f=pgeojson&where=1=1&outFields=*",
    cluster: true,
    clusterMaxZoom: 14, // Max zoom to cluster points on
    clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
  });

//Création des clusters d'agglomération
  map.addLayer({
    id: 'clusters_proteges',
    type: 'circle',
    source: 'frenes_proteges',
    filter: ['has', 'point_count'],
    paint: {
  'circle-color': [
  'step',
  ['get', 'point_count'],
  '#A0FEFF',
  100,
  '#83D0D1',
  750,
  '#487273'
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

  //Ajouter de la tuile vectorielles d'arrondissements
  map.addSource("arrondissements", {
    type: "vector",
    tiles: [
      "https://vectortileservices6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/arrondissements_mtl/VectorTileServer/tile/{z}/{y}/{x}.pbf"
    ]
  });
  
  map.addLayer({
    'id': 'arrondissements',
    'type': 'fill',
    'source': 'arrondissements',
    "source-layer": "arrondissements_mtl",
    paint: {
      "fill-color": "olivedrab",
      "fill-opacity": 0.15,
      "fill-outline-color": "olivedrab"
    }
  });
// Ajouter la couche WMS (Raster)
map.addSource('RASTER', {
  'type': 'raster',
  'tiles': [
    'https://uqam-my.sharepoint.com/:i:/g/personal/bg791046_ens_uqam_ca/ET57pD2xHORGgZyp-S-hU3ABqCDpI5nrLRhRa6RjyFeLqg'
  ],
  'tileSize': 256
});
map.addLayer({
  'id': 'RASTER',
  'type': 'raster',
  'source': 'RASTER',
  });
});


