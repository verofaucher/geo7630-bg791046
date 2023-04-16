// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'Carte', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/streets/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
})

({
//ajout de la couche d'arbres abattus
map.addSource("Arbres_abattus", {
    type: "geojson",
    data: "https://dservices6.arcgis.com/133a00biU9FItiqJ/arcgis/services/arbres_abattus_frenes_wfs/WFSServer?service=wfs&request=getfeature&outputFormat=geojson&typeNames=arbres_abattus_frenes_wfs:arbres_abattus",

  });

//ajout de la couche d'arbres publics
map.addSource("Arbres_public", {
    type: "geojson",
    data: "https://dservices6.arcgis.com/133a00biU9FItiqJ/arcgis/services/arbres_total_frenes/WFSServer?service=wfs&request=getfeature&outputFormat=geojson&typeNames=arbres_total_frenes:arbres_total",

  });

//ajout de la couche de frênes protégés
map.addSource("Arbres_public", {
    type: "geojson",
    data: "https://dservices6.arcgis.com/133a00biU9FItiqJ/arcgis/services/frenes_proteges_tp4/WFSServer?service=wfs&request=getfeature&outputFormat=geojson&typeNames=frenes_proteges_tp4:frenes_proteges_tp4",

  });

//ajout de la couche de frênes 3d
map.addSource("Frênes 3s", {
    type: "geojson",
    data: "https://dservices6.arcgis.com/133a00biU9FItiqJ/arcgis/services/frenes_lidar_wfs/WFSServer?service=wfs&request=getfeature&outputFormat=geojson&typeNames=frenes_lidar_wfs:frenes_lidar",

  });

//ajout de la tuile d'arrondissements
map.addSource("arrondissements", {
    type: "vector",
    tiles: [
      "https://vectortileservices6.arcgis.com/133a00biU9FItiqJ/arcgis/rest/services/limites_arrondissements/VectorTileServer/tile/{z}/{y}/{x}.pbf"
    ]
  });
  
//ajouter la couche raster
map.addSource("", {
    type: "raster",
    tiles: [
      "https://server.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}.jpeg?token=" + apiKey
    ]
  });

})



