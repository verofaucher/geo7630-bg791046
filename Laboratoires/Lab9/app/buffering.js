function createBuffer(featureCollection,radiusInput) {
    console.log(radiusInput)
    const buffer = turf.buffer(featureCollection, radiusInput, {units: 'meters'});
    return buffer;
  }