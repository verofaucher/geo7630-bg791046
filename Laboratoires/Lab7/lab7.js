
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
        'tileSize': 256
    }]

var WFSConfig = [
    'wfs-test-source', {
        type: 'geojson',
        data: null,
    }
]
var WFSurl = document.getElementById("wfs").value
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
    if(WMSurl){
        WMSConfig[1].tiles = WMSurl
        map.addSource(WMSConfig[0],WMSConfig[1])
        map.addLayer({
            'id': 'imagery',
            'type': 'raster',
            'source': 'wms-test-source'
        });
    }
}

 document
 .getElementById('loadWMS')
 .addEventListener('click', loadWMS);

 document
     .getElementById('loadWFS')
     .addEventListener('click', loadWFS);
