function unionFeatures(featureCollection) {
    const mergedFeature = turf.dissolve(featureCollection);
    return mergedFeature;
  }