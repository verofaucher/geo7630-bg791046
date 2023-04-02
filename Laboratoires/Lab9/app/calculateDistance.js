function averageDistance(featureCollection) {
  console.log(featureCollection)
  // Vérifie que la FeatureCollection contient au moins deux points
  if (featureCollection.features.length < 2) {
    throw new Error('La FeatureCollection doit contenir au moins deux points.');
  }
 // Transforme les points en projection UTM

 const mercatorFeatureCollection = turf.toMercator(featureCollection);

  // Calcule la distance entre tous les points
  const distances = [];
  for (let i = 0; i < mercatorFeatureCollection.features.length - 1; i++) {
    for (let j = i + 1; j < mercatorFeatureCollection.features.length; j++) {
      const from = mercatorFeatureCollection.features[i];
      const to = mercatorFeatureCollection.features[j];
      const distance = turf.distance(from, to);
      distances.push(distance);
    }
  }

  // Calcule la distance moyenne
  const sum = distances.reduce((acc, val) => acc + val, 0);
  const average = sum / distances.length;
  return average;
}

function calculateDistance() {
  document.getElementById('distanceResult').value = Math.round(averageDistance(randomPoints), 2);
}


// Binding de l'événement et de la fonctionnalité
document
  .getElementById('calculateDistance')
  .addEventListener('click', calculateDistance);