function countPointsInPolygons(points, polygons) {
    const collected = turf.collect(polygons, points, 'polygonIndex', 'pointIndex');
    collected.features.forEach((polygonFeature) => {
        const pointCount = polygonFeature.properties.pointIndex.length;
        polygonFeature.properties.pointCount = pointCount;
    });
    return collected;
}