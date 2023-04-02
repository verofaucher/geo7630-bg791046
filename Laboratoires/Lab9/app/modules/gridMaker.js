function makeGrid() {
    var bbox = [-73.990959, 45.410154, -73.467327, 45.705839];
    var cellSide = 500;
    var options = {units: 'meters'};
    var hexgrid = turf.hexGrid(bbox, cellSide, options);
    // Ajouter une propriété avec une valeur aléatoire entre 0 et 100 à chaque hexagone
    turf.featureEach(hexgrid, function(currentFeature) {
        currentFeature.properties.randomValue = Math.floor(Math.random() * 101);
    });
    return hexgrid;
}