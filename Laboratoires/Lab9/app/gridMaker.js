function unionFeatures(featureCollection) {
    var bbox = [-73.990959, 45.410154, -73.467327, 45.705839];
    var cellSide = 500;
    var options = {units: 'meters'};
    var hexgrid = turf.hexGrid(bbox, cellSide, options);
    return hexgrid
}
