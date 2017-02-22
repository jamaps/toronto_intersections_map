
// topo base map
'mapbox://styles/jeffallen/cimic77ij0063qxno884ynu0h'

// super dark no labels
'mapbox://styles/jeffallen/cilzhgc78001wa0m461yacv10',

// black smto
'mapbox://styles/jeffallen/cisxt3qa0004c2xo4lo8bgl8z'

// light grey / green / blue
'mapbox://styles/jeffallen/cim5ll2q700k6a0m4rgvnqh36',

// light light labels
'mapbox://styles/jeffallen/ciywc3qdi00092snjcx40p1y5'


mapboxgl.accessToken = 'pk.eyJ1IjoiamVmZmFsbGVuIiwiYSI6InJOdUR0a1kifQ.fTlTX02Ln0lwgaY4vkubSQ';


var x = 1;
function ShowDiv() {
    if (x == 0) {
      document.getElementById("show_info").style.opacity = 0
      x = 1;
    } else {
      document.getElementById("show_info").style.opacity = 0.95;
      x = 0;
    }
}


var sw = new mapboxgl.LngLat(-80.27, 43.32);
var ne = new mapboxgl.LngLat(-78.67, 44.12);
var boundBox = new mapboxgl.LngLatBounds(sw, ne);

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jeffallen/ciywc3qdi00092snjcx40p1y5',
    center: [-79.38, 43.71],
    zoom: 10.8,
    maxZoom: 14,
    minZoom: 10,
    bearing: -17,
    attributionControl: false,
    zoomControl: true,
    dragRotate: false,
    maxBounds: boundBox,
});

// colours !!!!
var vcol = ['#fef0d9','#fdcc8a','#fc8d59','#d7301f']
var pcol = ['#ffffcc','#a1dab4','#41b6c4','#225ea8']
var ycol = ['#ae017e','#f768a1','#fbb4b9','#feebe2']

// var ycol = ['#810f7c','#8856a7','#8c96c6','#b3cde3']


var v_breaks = [0,10000,20000,30000,99999999]
var p_breaks = [0,500,1000,2000,99999999]
var y_breaks = [0,1950,1975,2000,2017]






map.on('style.load', function () {
     map.addSource('ints', {
         'type': 'geojson',
         'data': ints
     });

     map.addLayer({
         'id': 'i5',
         'type': 'circle',
         'source': 'ints',
         "interactive": true,
         'layout': {},
         'paint': {
           'circle-radius': {
            "base": 1,
            "stops": [
                [10, 7],
                [14, 13]
                ]
        },
           'circle-color': 'black',
           'circle-opacity': {
            "base": 1,
            "stops": [
                [10, 0.03],
                [14, 0.15]
                ]
        }
         }
     });

     map.addLayer({
         'id': 'i4',
         'type': 'circle',
         'source': 'ints',
         "interactive": true,
         'layout': {},
         'paint': {
           'circle-radius': {
            "base": 1,
            "stops": [
                [10, 6],
                [14, 12]
                ]
        },
           'circle-color': 'black',
           'circle-opacity':{
            "base": 1,
            "stops": [
                [10, 0.03],
                [14, 0.15]
                ]
        }
         }
     });

     map.addLayer({
         'id': 'i3',
         'type': 'circle',
         'source': 'ints',
         "interactive": true,
         'layout': {},
         'paint': {
           'circle-radius': {
            "base": 1,
            "stops": [
                [10, 5],
                [14, 11]
                ]
        },
           'circle-color': 'black',
           'circle-opacity': {
            "base": 1,
            "stops": [
                [10, 0.03],
                [14, 0.15]
                ]
        }
         }
     });

     map.addLayer({
         'id': 'i2',
         'type': 'circle',
         'source': 'ints',
         "interactive": true,
         'layout': {},
         'paint': {
           'circle-radius':{
            "base": 1,
            "stops": [
                [10, 4],
                [14, 10]
                ]
        },
           'circle-color': 'black',
           'circle-opacity': {
            "base": 1,
            "stops": [
                [10, 0.03],
                [14, 0.15]
                ]
        }
         }
     });

     map.addLayer({
         'id': 'i1',
         'type': 'circle',
         'source': 'ints',
         "interactive": true,
         'layout': {},
         'paint': {
           'circle-radius': {
            "base": 1,
            "stops": [
                [10, 3],
                [14, 9]
                ]
        },
           'circle-color': 'white'
         }
     });

     map.addLayer({
         'id': 'black',
         'type': 'circle',
         'source': 'ints',
         "interactive": true,
         'layout': {},
         'paint': {
           'circle-radius': {
            "base": 1,
            "stops": [
                [10, 2],
                [14, 8]
                ]
        },
           'circle-color': 'black',
           'circle-opacity': 1
         },
     });


     for (var c = 0; c < 4; c++) {
         map.addLayer({
             'id': 'year_' + String(c + 1),
             'type': 'circle',
             'source': 'ints',
             "interactive": true,
             'layout': {},
             'paint': {
               'circle-radius':  {
                "base": 1,
                "stops": [
                    [10, 2],
                    [14, 8]
                    ]
            },
               'circle-color': ycol[c],
               'circle-opacity': 0
             },
             'filter': [ "<", "built_year", y_breaks[c+1]],
             'filter': [ ">=", "built_year", y_breaks[c]]
         });

         map.addLayer({
             'id': 'veh_' + String(c + 1),
             'type': 'circle',
             'source': 'ints',
             "interactive": true,
             'layout': {},
             'paint': {
               'circle-radius': {
                "base": 1,
                "stops": [
                    [10, 2],
                    [14, 8]
                    ]
            },
               'circle-color': vcol[c],
               'circle-opacity': 0
             },
             'filter': [ "<", "veh_vol", v_breaks[c+1]],
             'filter': [ ">=", "veh_vol", v_breaks[c]]
         });

         map.addLayer({
             'id': 'ped_' + String(c + 1),
             'type': 'circle',
             'source': 'ints',
             "interactive": true,
             'layout': {},
             'paint': {
               'circle-radius': {
                "base": 1,
                "stops": [
                    [10, 2],
                    [14, 8]
                    ]
            },
               'circle-color': pcol[c],
               'circle-opacity': 0
             },
             'filter': [ "<", "ped_vol", p_breaks[c+1]],
             'filter': [ ">=", "ped_vol", p_breaks[c]]
         });



      }
 });

 map.on('click', function (e) {
     var features = map.queryRenderedFeatures(e.point, { layers: ['i5'] });

     if (!features.length) {
         return;
     }

     var feature = features[0];

     var popup = new mapboxgl.Popup()
         .setLngLat(feature.geometry.coordinates)
         .setHTML("Year Built: <b>" + feature.properties.built_year + "</b><br>8hr Pedestrian Volume: <b>" + feature.properties.ped_vol + "</b><br>8hr Vehicle Volume: <b>" + feature.properties.veh_vol + "</b><br>Date Counted: <b>" + feature.properties.count_date + "</b>"

          )
         .addTo(map);
 });


 map.on('mousemove', function (e) {
     var features = map.queryRenderedFeatures(e.point, { layers: ['i5'] });
     map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
 });

// switching function !!!!!!!!!!!!!!

function changeImage(a) {
        document.getElementById("hist").src=a;
        console.log(a)
}

function map_switch(button) {

  console.log(button)
  if (button == 'year') {
    for (var c = 3; c > -1; c--) {
    map.setPaintProperty('year_' + String(c + 1),'circle-opacity',1)
    map.setPaintProperty('ped_' + String(c + 1),'circle-opacity',0)
    map.setPaintProperty('veh_' + String(c + 1),'circle-opacity',0)
    }
    map.setPaintProperty('black','circle-opacity',0)

  }

  else if (button == 'ped') {
    for (var c = 0; c < 4; c++) {
    map.setPaintProperty('year_' + String(c + 1),'circle-opacity',0)
    map.setPaintProperty('ped_' + String(c + 1),'circle-opacity',1)
    map.setPaintProperty('veh_' + String(c + 1),'circle-opacity',0)
    }
    map.setPaintProperty('black','circle-opacity',0)
  }

  else if (button == 'veh') {
    for (var c = 0; c < 4; c++) {
    map.setPaintProperty('year_' + String(c + 1),'circle-opacity',0)
    map.setPaintProperty('ped_' + String(c + 1),'circle-opacity',0)
    map.setPaintProperty('veh_' + String(c + 1),'circle-opacity',1)
    }
    map.setPaintProperty('black','circle-opacity',0)
  }

  else if (button == 'og') {
    for (var c = 0; c < 4; c++) {
    map.setPaintProperty('year_' + String(c + 1),'circle-opacity',0)
    map.setPaintProperty('ped_' + String(c + 1),'circle-opacity',0)
    map.setPaintProperty('veh_' + String(c + 1),'circle-opacity',0)
    }
    map.setPaintProperty('black','circle-opacity',1)
  }

  else {
    console.log("nuthin was clicked")
  }

}
