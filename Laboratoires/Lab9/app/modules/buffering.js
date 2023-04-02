function createBuffer(featureCollection,radiusInput) {
  console.log(radiusInput)
  const buffer = turf.buffer(featureCollection, radiusInput, {units: 'meters'});
  return buffer;
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

document
  .getElementById('buffer')
  .addEventListener('click', loadBuffer);