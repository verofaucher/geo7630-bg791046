// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/streets/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});

const numPoints = 10000;
const randomPoints = generateRandomPoints(numPoints);
const myLayers = ['grid', 'buffer', 'rdp', 'union', 'joined']
// Fonction qui ecoute l'evenement de fin de chargement de la carte au demarrage de l'app
// ajout des sources et des couches de la carte
map.on('load', function () {
    loadRandomPointsLayer()
    map.addControl(new MaplibreLegendControl({ rdp: "rdp", buffer: 'buffer' }, { onlyRendered: true }), "bottom-left");
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

function union() {
    console.log(document.getElementById('inputGroupSelect03').value == 1)

    if (document.getElementById('inputGroupSelect03').value == 1) {
        console.log('test')

        const radiusInput = document.getElementById('radiusInput').value
        const buffers = createBuffer(randomPoints, radiusInput)
        const unionized = unionFeatures(buffers)
        console.log('test')
        map.addSource('union-source', {
            type: "geojson",
            data: unionized
        })

        map.addLayer({
            id: 'union',
            type: 'fill',
            source: 'union-source',
            paint: {
                'fill-color': 'orange',
                'fill-opacity': 0.5
            }
        })
    }
    if (document.getElementById('inputGroupSelect03').value == 2) {
        const bbox = [-73.990959, 45.410154, -73.467327, 45.705839];
        const cellSide = 500;
        const options = { units: 'meters' };
        const hexgrid = turf.hexGrid(bbox, cellSide, options);
        map.addSource('grid-source', {
            type: "geojson",
            data: hexgrid
        })

        map.addLayer({
            id: 'grid',
            type: 'line',
            source: 'grid-source',
            paint: {
                "line-opacity": 0.2
            }
        })
    }
    if (document.getElementById('inputGroupSelect03').value == 3) {
        const bbox = [-73.990959, 45.410154, -73.467327, 45.705839];
        const cellSide = 500;
        const options = { units: 'meters' };
        const hexgrid = turf.hexGrid(bbox, cellSide, options);
        map.addSource('grid-source', {
            type: "geojson",
            data: countPointsInPolygons(randomPoints, hexgrid)

        })

        map.addLayer({
            id: 'joined',
            type: 'fill',
            source: 'grid-source',
            paint: {
                "fill-color": {
                    property: 'pointCount',
                    stops: [[0, '#f3e79b'], [3, '#fac484'], [5, '#eb7f86'], [8, '#ce6693'], [10, '#a059a0']]
                    // #f3e79b,#fac484,#f8a07e,#eb7f86,#ce6693,#a059a0,#5c53a5
                },
                "fill-opacity": 0.5
            }
        })
    }
}

function dynamicCount() {
    var averagePtsGrid = 0;
    var totalFeatures = 0;
    var features = map.queryRenderedFeatures({ layers: ['joined'] });
    totalFeatures = features.length
    features.forEach(function (feature) {
        averagePtsGrid += feature.properties.pointCount
    })
    var average = averagePtsGrid / totalFeatures;
    document.getElementById('kpi').value = average
}

function featureCount() {
    var features = map.queryRenderedFeatures({ layers: ['rdp'] });
    document.getElementById('featureCount').value = features.length
}

function calculateDistance() {
    document.getElementById('distanceResult').value = Math.round(averageDistance(randomPoints), 2);
}

function loadBuffer() {
    const radiusInput = document.getElementById('radiusInput').value
    const buffers = createBuffer(randomPoints, radiusInput)
    map.addSource(
        'buffer-source', {
        type: 'geojson',
        data: buffers
    }
    )
    map.addLayer({
        'id': 'buffer',
        'type': 'fill',
        'source': 'buffer-source',
        'paint': {
            'fill-color': 'rgba(12,122,122,0.5)'
        }
    })
}

function removeAllLayersAndSources() {
    var allSources = map.getStyle().sources;
    console.log(allSources)
    myLayers.forEach(function (layerName) {
        // Supprimer la couche de la carte
        if (map.getLayer(layerName)) {
            map.removeLayer(layerName);
        }
    })

    myLayers.forEach(function (layerName) {
        // Supprimer la source de la carte
        if (allSources.hasOwnProperty(`${layerName}-source`)) {
            map.removeSource(`${layerName}-source`);
        }
    });
}

function loadRandomPointsLayer() {
    removeAllLayersAndSources()
    map.addSource('rdp-source', {
        type: "geojson",
        data: randomPoints
    })
    map.addLayer({
        'id': 'rdp',
        'type': 'circle',
        'source': 'rdp-source',
        'paint': {
            'circle-radius': {
                'base': 1.75,
                'stops': [
                    [12, 2],
                    [22, 180]
                ]
            },
        }
    })
}

// Binding de l'événement et de la fonctionnalité
document
    .getElementById('calculateDistance')
    .addEventListener('click', calculateDistance);

document
    .getElementById('buffer')
    .addEventListener('click', loadBuffer);

document
    .getElementById('resetMap')
    .addEventListener('click', removeAllLayersAndSources);

document
    .getElementById('loadLayer')
    .addEventListener('click', loadRandomPointsLayer);

document
    .getElementById('union')
    .addEventListener('click', union);



// Ajouter un curseur de click lorsque la souris se positionnement sur un feature du layer.
map.on('mouseenter', 'garage', function () {
    map.getCanvas().style.cursor = 'pointer';
});

// Ajouter un curseur de deplacement lorsque la souris se positionnement en dehors d'un feature du layer.
map.on('mouseleave', 'garage', function () {
    map.getCanvas().style.cursor = '';
});