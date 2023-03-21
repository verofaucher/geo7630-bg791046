
var map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    center: [0.338, 0.4385],
    zoom: 2
});

var WMSConfig = [
    'wms-test-source',
    {
        'type': 'raster',
        'tiles': [
            null
        ],
        'tileSize': 512,
        'scheme': 'tms'
    }]

var WFSConfig = [
    'wfs-test-source', {
        type: 'geojson',
        data: 'http://localhost:8080/geoserver/geo7630/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geo7630:analyse_bixi_par_station&maxFeatures=50&outputFormat=application/json',
    }
]
var WFSurl = encodeURI('http://localhost:8080/geoserver/geo7630/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geo7630:analyse_bixi_par_station&maxFeatures=50&outputFormat=application/json')

// fetch(WFSurl, {
//    headers: {
//       'Accept': 'application/json'
//    }
// })
//    .then(response => response.text())
//    .then(text => console.log(text))

   
var WMSurl = document.getElementById("wms").value
var loadWFS =function () {
    console.log(WFSurl)
    if(WFSurl){
        WFSConfig[1].data = WFSurl
        map.addSource(WFSConfig[0],WFSConfig[1])
        map.addLayer({
            'id': 'geojson',
            'type': 'circle',
            'source': 'wfs-test-source',
            paint: {
                'circle-color': 'rgba(244,123,22,0.5)',
                'circle-radius': {
                  property: 'mag',
                  base: 1.8,
                  stops: [
                    [{ zoom: 0, value: 2 }, 1],
                    [{ zoom: 0, value: 8 }, 10],
                    [{ zoom: 11, value: 2 }, 20],
                    [{ zoom: 11, value: 8 }, 30],
                    [{ zoom: 20, value: 2 }, 40],
                    [{ zoom: 20, value: 8 }, 60],
                  ],
                }
            }
        });
    }
}
var loadWMS =function () {
        const a =" http://localhost:8080/geoserver/geo7630/gwc/service/wmts?REQUEST=GetTile&VERSION=1.0.0&SERVICE=WMTS&"
        const b = "Layer=geo7630:ilots-de-chaleur-2016&"
        const c = "TileMatrixSet=EPSG:3857&"
        const d = "TileMatrix=EPSG:3857:{z}&TileRow={x}&TileCol={y}&"
        const e = "transparent=true"
        let url = a+b+c+d+e

        // const wmsUrl = 'http://localhost:8080/geoserver/geo7630/wms?BBOX={bbox-epsg-3857}&SERVICE=WMS&REQUEST=GetMap&CRS=EPSG:3857&WIDTH=256&HEIGHT=256&LAYERS=geo7630:ilots-de-chaleur-2016&FORMAT=image/png&transparent=true'
        const baseUrl = 'http://localhost:8080/geoserver/geo7630/wmts?'
        const serviceType = "SERVICE=WMTS"
        const bbox = "BBOX={bbox-epsg-3857}"
        const request = "REQUEST=GetMap"
        const crs = "CRS=EPSG:3857"
        const tileSize = "WIDTH=256&HEIGHT=256"
        const layers = "LAYERS=geo7630:ilots-de-chaleur-2016"
        const format = "&FORMAT=image/png"
        const option = "transparent=true"

        const wmsUrl = baseUrl + '&' + serviceType + '&' + bbox + '&' + request+ '&' + crs + '&' + tileSize + '&' + layers + '&' + format + '&' + option
 

        // "http://localhost:8080/geoserver/geo7630/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=geo7630:ilots-de-chaleur-2016&STYLE=default&TILEMATRIXSET=EPSG:3857&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}&FORMAT=image/png"

        WMSConfig[1].tiles = ["http://localhost:8080/geoserver/geo7630/gwc/service/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=geo7630:ilots-de-chaleur-2016&TILEMATRIXSET=EPSG:900913&TILEMATRIX=EPSG:900913:{z}&TILECOL={x}&TILEROW={y}&FORMAT=image/png"
    ]
        map.addSource(WMSConfig[0],WMSConfig[1])
        console.log(`test`)
        map.addLayer({
            'id': 'imagery',
            'type': 'raster',
            'source': 'wms-test-source'
        });
    // }
}

 document
 .getElementById('loadWMS')
 .addEventListener('click', loadWMS);

 document
     .getElementById('loadWFS')
     .addEventListener('click', loadWFS);
