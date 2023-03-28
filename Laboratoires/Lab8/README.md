Laboratoire 8 - GEO 7630

Webmapping avancé

  


[**Ajouter une couche de tuiles vectorielles (pg_tileserv)**** ****2**](https://docs.google.com/document/d/1iTcb16ZDK_yJxRidT_M5A05ynojEnslzeHxYJW49pgk/edit#heading=h.bwh3k3dgwm0i)

[**Ajouter une couche WFS (pg_featureserv)**** ****3**](https://docs.google.com/document/d/1iTcb16ZDK_yJxRidT_M5A05ynojEnslzeHxYJW49pgk/edit#heading=h.4n9c162yey7y)

[**Contrôle de carte**** ****4**](https://docs.google.com/document/d/1iTcb16ZDK_yJxRidT_M5A05ynojEnslzeHxYJW49pgk/edit#heading=h.9dkn60kutoh7)

[**Filtrer**** ****6**](https://docs.google.com/document/d/1iTcb16ZDK_yJxRidT_M5A05ynojEnslzeHxYJW49pgk/edit#heading=h.817wp53d7mrm)

[**Événement souris**** ****6**](https://docs.google.com/document/d/1iTcb16ZDK_yJxRidT_M5A05ynojEnslzeHxYJW49pgk/edit#heading=h.bgfc5oxlpzkk)

[**Popup**** ****6**](https://docs.google.com/document/d/1iTcb16ZDK_yJxRidT_M5A05ynojEnslzeHxYJW49pgk/edit#heading=h.lktewt4qcai7)

[**JumpTo**** ****8**](https://docs.google.com/document/d/1iTcb16ZDK_yJxRidT_M5A05ynojEnslzeHxYJW49pgk/edit#heading=h.snp3rcpnc3o)

[**Jump to a series of locations | MapLibre GL JS Docs**** ****8**](https://docs.google.com/document/d/1iTcb16ZDK_yJxRidT_M5A05ynojEnslzeHxYJW49pgk/edit#heading=h.lhyb8uk4nd9f)







## Ajouter une couche de tuiles vectorielles (pg_tileserv)

// ajout des sources et des couches de la carte

map.on('load', function () {

    // ajout de la source des garages

    map.addSource('garage-source', {

        type: 'vector', // type de source

        tiles: \['http&#x3A;//localhost:8801/geo7630.garage_labo_8/{z}/{x}/{y}.pbf'] // URL des tuiles vectorielles

    })

    // ajout de la couche des garages avec filtre

    map.addLayer({

        'id': 'garage', // identifiant de la couche

        'type': 'fill', // type de géométrie de la couche

        'source': 'garage-source', // source des données de la couche

        'source-layer': 'geo7630.garage_labo_8', // source des données de la couche, majoritairement nomduschema.nomdelatable

    })

});


## 


## Ajouter une couche WFS (pg_featureserv)

// Simple fonction qui ajoute une couche WFS depuis pgFeatureServ

function loadWFS() {

    // ajout de la source des garages

    map.addSource('bixi-source', {

        type: 'geojson', // type de source

        data: 'http&#x3A;//localhost:9000/collections/geo7630.analyse_bixi_par_station/items.json?limit=10000' // URL pg_featureserv geojson

    })

    // ajout de la couche des garages

    map.addLayer({

        'id': 'bixi', // identifiant de la couche

        'type': 'circle', // type de géométrie de la couche

        'source': 'bixi-source', // source des données de la couche

        'paint': {

            'circle-color': \[

                'interpolate', // methode interpolation

                \['linear'], // type d'interpolation

                \['get', 'end_total_count'], // choisir props

                100,

                'blue',

                300,

                'royalblue',

                600,

                'cyan',

                1000,

                'lime',

                2000,

                'yellow',

                3000,

                'red'

            ]

        }

    })

}


## 


## Contrôle de carte

[Markers and controls | MapLibre GL JS Docs](https://maplibre.org/maplibre-gl-js-docs/api/markers/#navigationcontrol)

Ajoutez un contrôle de Navigation

Ajoutez un contrôle de Géolocalisation

Ajoutez un contrôle d’échelle

  
![](https://lh5.googleusercontent.com/z8SqmGeSr2GRr8JPnRHiFaGiFRY0jy0wGkzpVDHN_9MEjaQ1MkreVaGn7TJDJ_5DnE8DA5S6yXXYzDZ7BHpjH8nci4ebdfeCu4fUqxWLFDXnT8IK6xN1qsyP5uCOB9-x94POS3jxa__bVwFigufqrA)  


## 

    var nav = new maplibregl.NavigationControl({

        showCompass:true,

        showZoom:true,

        visualizePitch:true

    });

    map.addControl(nav,'top-right');

   

    var geolocateControl =new maplibregl.GeolocateControl({

        positionOptions: {

        enableHighAccuracy: true

        },

        trackUserLocation: true

        })

   

    map.addControl(geolocateControl,'bottom-right');

   

    var scale = new maplibregl.ScaleControl({

        unit: 'metric'

        });

           

    map.addControl(scale);


## 


## Filtrer

Statiquement à la source

[Map | MapLibre GL JS Docs](https://maplibre.org/maplibre-gl-js-docs/api/map/#map#addlayer) propriété filter

    map.addLayer({

        'id': 'garage', // identifiant de la couche

        'type': 'fill', // type de géométrie de la couche

        'source': 'garage-source', // source des données de la couche

        'source-layer': 'geo7630.garage_labo_8', // source des données de la couche, majoritairement nomduschema.nomdelatable

        'filter': \['==', \['get', 'operator_id'], 2]

    })

  


Dynamiquement avec un bouton

[Map | MapLibre GL JS Docs](https://maplibre.org/maplibre-gl-js-docs/api/map/#map#setfilter)

function filterGarage() {

map.setFilter('garage', \['>', \['get', 'operator_id'], 2]);

}


## Événement souris

[Display a popup on click | MapLibre GL JS Docs](https://maplibre.org/maplibre-gl-js-docs/example/popup-on-click/)

Ajouter la librairie TURFJS dans le fichier app.HTML pour avoir accès aux fonctions TurfsJS pour calculer le centroide d’un polygone

  


**_ &lt;script src="https&#x3A;//cdnjs.cloudflare.com/ajax/libs/Turf.js/6.5.0/turf.min.js">&lt;/script>_**

  
  


map.on('click', 'garage', function (e) {

    var coordinates = turf.centroid(e.features\[0]) // calcul des coordonnées du centre de la géométrie cliquée

    console.log(coordinates)

});


## Popup

[Display a popup on click | MapLibre GL JS Docs](https://maplibre.org/maplibre-gl-js-docs/example/popup-on-click/)

Ajoutez dans une variable le texte à montrer dans la popup

Puis instanciez un nouveau maplibrePopUp() avec les propriétés

- de setLngLat
- de setHTML

et ajoutez le à la carte

![](https://lh5.googleusercontent.com/3DAM4LkkKclgJHEOMCr0yS97_KX98lvPQS1QsOYEgWJIA-KJhNJ8d62E0yCKSj-MBdwZI0RkOYkaMAqez0pb1duoiXIX-nC_15gnYbE_jZxMgzcftc5f1hgC7qQ9Yqv1H0cpsSBZxbMocqGLSz0D8Q)

map.on('click', 'garage', function (e) {

    var coordinates = turf.centroid(e.features\[0]) // calcul des coordonnées du centre de la géométrie cliquée

    var description = e.features\[0].properties.adresse; // récupération de l'adresse du garage cliqué

    // création d'une popup pour afficher l'adresse

    new maplibregl.Popup()

        .setLngLat(coordinates.geometry.coordinates) // position de la popup sur le centre de la géométrie cliquée

        .setHTML(description) // contenu HTML de la popup

        .addTo(map); // ajout de la popup à la carte

});


## JumpTo


## [Jump to a series of locations | MapLibre GL JS Docs](https://maplibre.org/maplibre-gl-js-docs/example/jump-to/)

**Dans la fonction map.onClick() ajouter : **

    // Fonction de map qui permet de se deplacer sur une coordonnees et un niveau de zoom

    map.jumpTo({

        center: coordinates.geometry.coordinates,

        zoom: 13

    });


## ![](https://lh5.googleusercontent.com/033JOwppxSO52KvO2Au_jvyhW1W2MeRQCzzpZ6uvDRhPlAH6-t_t8zIJsR60TulbBp21uhEVnG8AZNT-mkLsre5S-54zBFLrikRecfG0RJaKN-_fUEm3Nly_Jrh_QNRSenp3EHwQjA4xPUuSacV6TA)
