function removeAllLayersAndSources() {
    var allSources = map.getStyle().sources;
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

document
    .getElementById('resetMap')
    .addEventListener('click', removeAllLayersAndSources);

document
    .getElementById('loadLayer')
    .addEventListener('click', loadRandomPointsLayer);
