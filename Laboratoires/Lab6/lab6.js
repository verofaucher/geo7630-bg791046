var map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    center: [12.338, 45.4385],
    zoom: 17.4
});
var geoJSONcontent
function handleFileSelect(evt) {
    var file = evt.target.files[0]; // Read first selected file
    console.log(file)
    var reader = new FileReader();

    reader.onload = function (theFile) {
        // Parse as (geo)JSON
        geoJSONcontent = JSON.parse(theFile.target.result);

        map.addSource('geojson-source', {
            'type': 'geojson',
            'data': geoJSONcontent
        });

        map.addLayer({
            'id': 'geojson',
            'type': 'fill',
            'source': 'geojson-source'
        });
    };

    // Read the GeoJSON as text
    reader.readAsText(file, 'UTF-8');
}
document
    .getElementById('file')
    .addEventListener('change', handleFileSelect, false);


document
    .getElementById('zoomto')
    .addEventListener('click', function () {

        map.fitBounds(geojsonExtent(geoJSONcontent), {
            padding: 20
        });
    });

document
    .getElementById('colorier')
    .addEventListener('click', function () {
        map.setPaintProperty("geojson", "fill-color", "red")
    })