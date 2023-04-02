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