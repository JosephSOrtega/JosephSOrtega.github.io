"use strict";
//map crap below
mapboxgl.accessToken = mapboxTokenAPI;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: -2
});

map.addControl(new mapboxgl.NavigationControl());

//reverse houdini for coffee
function renderCoffee(coffee) {
    var html = '<div class="coffee sized col-6 shadow">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '<input type="image" alt="coffeessssss" src="coffeeBean.png" name="saveForm" class="btTxt submit beanButton" id="addToMap' + coffee.id + '" value="'+ coffee.location +'" /></p>';
    html += '</div>';
    return html;
}


function renderCoffees(coffees) {
    var html = '';
    coffees.forEach(function (cof, i) {
        html += renderCoffee(coffees[i]);
    });
    return html;
}




function nameDisplay(e) {
    e.preventDefault();// don't submit the form, we just want to update the data
    var searchRoast = nameRoast.value.toLowerCase();
    var filteredCoffees = [];
    var selectedRoast = roastSelection.value;
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (("all" === selectedRoast) || ("Choose..." === selectedRoast)) {
            filteredCoffees.push(coffee);
        }


    });
    tbody.innerHTML = renderCoffees(filteredCoffees);

    var filteredCoffeesAgain = [];

    filteredCoffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(searchRoast)) {
            filteredCoffeesAgain.push(coffee);
        }

    });

    tbody.innerHTML = renderCoffees(filteredCoffeesAgain);

//added functionality for map marker

}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', location: "Kenya" },
    {id: 2, name: 'Half City', roast: 'light', location: "Ethiopia"},
    {id: 3, name: 'Cinnamon', roast: 'light', location: "Jamaica"},
    {id: 4, name: 'City', roast: 'medium', location: "Indonesia"},
    {id: 5, name: 'American', roast: 'medium', location: "Panama"},
    {id: 6, name: 'Breakfast', roast: 'medium', location: "Brazil"},
    {id: 7, name: 'High', roast: 'dark', location: "Jamaica"},
    {id: 8, name: 'Continental', roast: 'dark', location: "Jamaica"},
    {id: 9, name: 'New Orleans', roast: 'dark', location: "Jamaica"},
    {id: 10, name: 'European', roast: 'dark', location: "Germany"},
    {id: 11, name: 'Espresso', roast: 'dark', location: "Venice"},
    {id: 12, name: 'Viennese', roast: 'dark', location: "Vienna"},
    {id: 13, name: 'Italian', roast: 'dark', location: "Italy"},
    {id: 14, name: 'French', roast: 'dark', location: "France"}
];

var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
// var submitSearch = document.querySelector('#submitSearch');
var nameRoast = document.getElementById('myInput');
var coffeeNameAdded = document.getElementById('addCoff');
var coffeeRoastAdded = document.querySelector('#addRoast');
var mapCof1 = document.getElementById('addToMap1');
var mapCof2 = document.getElementById('addToMap2');
var mapCof3 = document.getElementById('addToMap3');
var mapCof4 = document.getElementById('addToMap4');
var mapCof5 = document.getElementById('addToMap5');
var mapCof6 = document.getElementById('addToMap6');
var mapCof7 = document.getElementById('addToMap7');
var mapCof8 = document.getElementById('addToMap8');
var mapCof9 = document.getElementById('addToMap9');
var mapCof10 = document.getElementById('addToMap10');
var mapCof11 = document.getElementById('addToMap11');
var mapCof12 = document.getElementById('addToMap12');
var mapCof13 = document.getElementById('addToMap13');
var mapCof14 = document.getElementById('addToMap14');

tbody.innerHTML = renderCoffees(coffees);


roastSelection.addEventListener('change', nameDisplay);
nameRoast.addEventListener('keyup', nameDisplay);
addCoffeeButton.addEventListener('click', runNew);
addCoffeeButton.addEventListener('click', redoDisplay);
addToMap1.addEventListener('click', newGeo1);
addToMap2.addEventListener('click', newGeo2);
addToMap3.addEventListener('click', newGeo3);
addToMap4.addEventListener('click', newGeo4);
addToMap5.addEventListener('click', newGeo5);
addToMap6.addEventListener('click', newGeo6);
addToMap7.addEventListener('click', newGeo7);
addToMap8.addEventListener('click', newGeo8);
addToMap9.addEventListener('click', newGeo9);
addToMap10.addEventListener('click', newGeo10);
addToMap11.addEventListener('click', newGeo11);
addToMap12.addEventListener('click', newGeo12);
addToMap13.addEventListener('click', newGeo13);
addToMap14.addEventListener('click', newGeo14);

function redoDisplay() {
    tbody.innerHTML = renderCoffees(coffees);

}

function runNew(e) {
    e.preventDefault();// don't submit the form, we just want to update the data
    function addCoffee(a, b) {
        coffees.push(
            {
                id: (coffees.length + 1),
                name: a,
                roast: b
            }
        )
    }

    addCoffee(coffeeNameAdded.value, coffeeRoastAdded.value);
}



//geo bar
var geocoder = new MapboxGeocoder({
    accessToken: mapboxTokenAPI,
    marker: {
        color: 'orange'
    },
    mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));



function newGeo1() {
    geocode(document.getElementById('addToMap1').value, mapboxTokenAPI).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(4);
        var markers = new mapboxgl.Marker()
            .setLngLat([result[0], result[1]])
            .addTo(map)
    });

}
function newGeo2() {
    geocode(document.getElementById('addToMap2').value, mapboxTokenAPI).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(4);
        var markers = new mapboxgl.Marker()
            .setLngLat([result[0], result[1]])
            .addTo(map)
    });

}
function newGeo3() {
    geocode(document.getElementById('addToMap3').value, mapboxTokenAPI).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(4);
        var markers = new mapboxgl.Marker()
            .setLngLat([result[0], result[1]])
            .addTo(map)
    });

}
function newGeo4() {
    geocode(document.getElementById('addToMap4').value, mapboxTokenAPI).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(4);
        var markers = new mapboxgl.Marker()
            .setLngLat([result[0], result[1]])
            .addTo(map)
    });

}
function newGeo5() {
    geocode(document.getElementById('addToMap5').value, mapboxTokenAPI).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(4);
        var markers = new mapboxgl.Marker()
            .setLngLat([result[0], result[1]])
            .addTo(map)
    });

}
function newGeo6() {
    geocode(document.getElementById('addToMap6').value, mapboxTokenAPI).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(4);
        var markers = new mapboxgl.Marker()
            .setLngLat([result[0], result[1]])
            .addTo(map)
    });

}
function newGeo7() {
    geocode(document.getElementById('addToMap7').value, mapboxTokenAPI).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(4);
        var markers = new mapboxgl.Marker()
            .setLngLat([result[0], result[1]])
            .addTo(map)
    });

}
function newGeo8() {
    geocode(document.getElementById('addToMap8').value, mapboxTokenAPI).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(4);
        var markers = new mapboxgl.Marker()
            .setLngLat([result[0], result[1]])
            .addTo(map)
    });

}
function newGeo9() {
    geocode(document.getElementById('addToMap9').value, mapboxTokenAPI).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(4);
        var markers = new mapboxgl.Marker()
            .setLngLat([result[0], result[1]])
            .addTo(map)
    });

}
function newGeo10() {
    geocode(document.getElementById('addToMap10').value, mapboxTokenAPI).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(4);
        var markers = new mapboxgl.Marker()
            .setLngLat([result[0], result[1]])
            .addTo(map)
    });

}
function newGeo11() {
    geocode(document.getElementById('addToMap11').value, mapboxTokenAPI).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(4);
        var markers = new mapboxgl.Marker()
            .setLngLat([result[0], result[1]])
            .addTo(map)
    });

}
function newGeo12() {
    geocode(document.getElementById('addToMap12').value, mapboxTokenAPI).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(4);
        var markers = new mapboxgl.Marker()
            .setLngLat([result[0], result[1]])
            .addTo(map)
    });

}
function newGeo13() {
    geocode(document.getElementById('addToMap13').value, mapboxTokenAPI).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(4);
        var markers = new mapboxgl.Marker()
            .setLngLat([result[0], result[1]])
            .addTo(map)
    });

}
function newGeo14() {
    geocode(document.getElementById('addToMap14').value, mapboxTokenAPI).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(4);
        var markers = new mapboxgl.Marker()
            .setLngLat([result[0], result[1]])
            .addTo(map)
    });

}
