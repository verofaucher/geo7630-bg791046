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
    clusterMaxZoom: 14, // Niveau de zoom maximum
    clusterRadius: 50 // Rayon de chaque ''clusters''
  });
//Création des clusters d'agglomération
  map.addLayer({
    id: 'clusters_abattus',
    type: 'circle',
    source: 'arbres_abattus',
    filter: ['has', 'point_count'],
    paint: {
      // 3 tailles de cercles pour chacunes des classes suivantes:
      //   * Rose, 20px pour les agglomérations de 100 éléments et moins
      //   * Rouge, 30px pour les agglomérations de 100 à 750 éléments
      //   * Rouge foncé, 40px pour les agglomérations de plus de 750 éléments 
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
    clusterMaxZoom: 14, // Niveau de zoom maximum
    clusterRadius: 50 // Rayon de chaque ''clusters''
  });

//Création des clusters d'agglomération
  map.addLayer({
    id: 'clusters_proteges',
    type: 'circle',
    source: 'frenes_proteges',
    filter: ['has', 'point_count'],
    paint: {
  // 3 tailles de cercles pour chacunes des classes suivantes:
  //   * cyan, 20px pour les agglomérations de 100 éléments et moins
  //   * cyan foncé, 30px pour les agglomérations de 100 à 750 éléments
  //   * cyan plus foncé, 40px pour les agglomérations de plus de 750 éléments 
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

   //Ajouter de la tuile vectorielles d'arrondissements VTS
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
//Création de la légende
  map.on('load', function() {
      const targets = {
          'arrondissements': 'Ville de Montréal',
          'arbres_abattus': 'Arbres abattus',
          'frenes_proteges': 'Frênes protégés',  
          
      };
      let options = {
        showDefault: true,
        showCheckbox: true,
        onlyRendered: true,
        reverseOrder: true
      };
      map.addControl(new MapboxLegendControl(targets, options), "top-right");
    
    });


// Ajouter la couche raster à partir d'une source WMS
map.addSource('ahuntsic', {
  type: 'raster',
  tiles: [
    'https://uqam-my.sharepoint.com/personal/bg791046_ens_uqam_ca/Documents/7630_TP4/ahuntsic.tif'
  ],
  tileSize: 256
});

map.addLayer({
  id: 'ahuntsic',
  type: 'raster',
  source: 'ahuntsic'
  });

// Importer la source vectorielle 2.5d
  map.on('load', function() {
    map.addSource('frenes_3d', {
      type: 'vector',
      url: 'https://services6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/frenes_lidar/FeatureServer/0'
    });
  
    // Ajouter la couche 3d
    map.addLayer({
      id: 'frenes_3d',
      type: 'circle',
      source: 'frenes_3d',
      paint: {
        'circle-radius': 10,
        'circle-color': '#784315'
      }
    });

});
});


