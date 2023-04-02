function unionFeatures(featureCollection) {
  const mergedFeature = turf.dissolve(featureCollection);
  return mergedFeature;
}

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


document
  .getElementById('union')
  .addEventListener('click', union);
