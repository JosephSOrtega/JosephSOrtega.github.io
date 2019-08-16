"use strict";

// (function () {




//Fix map drag issue
var weatherStuff = [
    "<i class=\"far weatherIcon fa-sun\"></i>",
    "<i class=\"far weatherIcon fa-moon\"></i>",
    "<i class=\"fas weatherIcon fa-cloud-showers-heavy\"></i>",
    "<i class=\"fas weatherIcon fa-cloud-showers-heavy\"></i>",
    "<i class=\"fas weatherIcon fa-icicles\"></i>",
    "<i class=\"fas weatherIcon fa-wind\"></i>",
    "<i class=\"fas weatherIcon fa-smog\"></i>",
    "<i class=\"fas weatherIcon fa-cloud\"></i>",
    "<i class=\"fas weatherIcon fa-cloud-sun\"></i>",
    "<i class=\"fas weatherIcon fa-cloud-moon\"></i>"
];

function refreshed() {
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + coord[1] + "," + coord[0]).done(function (data) {
        // mark();
        var newHtml = '';
        var newHtml2 = '';
        var newHtml3 = '';
        var call = data.daily.data;
        console.log(data);
        call.forEach(function (apple, i) {
            switch (data.daily.data[i].icon) {
                case "clear-day":
                    var icons = weatherStuff[0];
                    break;
                case "clear-night":
                    var icons = weatherStuff[1];
                    break;
                case "rain":
                    var icons = weatherStuff[2];
                    break;
                case "snow":
                    var icons = weatherStuff[3];
                    break;
                case "sleet":
                    var icons = weatherStuff[4];
                    break;
                case "wind":
                    var icons = weatherStuff[5];
                    break;
                case "fog":
                    var icons = weatherStuff[6];
                    break;
                case "cloudy":
                    var icons = weatherStuff[7];
                    break;
                case "partly-cloudy-day":
                    var icons = weatherStuff[8];
                    break;
                case "partly-cloudy-night":
                    var icons = weatherStuff[9];
                    break;
                default:
                    console.log('ERROR WITH ICON, TRY AGAIN.');
            }

            if (i === 0) {
                newHtml += "<h4 class='text-light bg-dark'>" + (data.daily.data[0].temperatureHigh).toFixed(1) + ' <i class="fas fa-temperature-high"></i> / ' + data.daily.data[0].temperatureLow.toFixed(1) + " <i class=\"fas fa-temperature-low\"></i></h4>";
                newHtml += "<h6>" + icons + '<br>' + data.daily.data[0].summary + "</h6>";
                newHtml += "<h6>Humidity:" + data.daily.data[0].humidity + "</h6>";
                newHtml += "<h6>Wind:" + data.daily.data[0].windSpeed + "</h6>";
                newHtml += "<h6>Pressure:" + data.daily.data[0].pressure + "</h6>"
            } else if (i === 1) {
                newHtml2 += "<h4 class='text-light bg-dark'>" + data.daily.data[i].temperatureHigh.toFixed(1) + ' <i class="fas fa-temperature-high"></i> / ' + data.daily.data[i].temperatureLow.toFixed(1) + " <i class=\"fas fa-temperature-low\"></i></h4>";
                newHtml2 += "<h6>" + icons + '<br>' + data.daily.data[i].summary + "</h6>";
                newHtml2 += "<h6>Humidity:" + data.daily.data[i].humidity + "</h6>";
                newHtml2 += "<h6>Wind:" + data.daily.data[i].windSpeed + "</h6>";
                newHtml2 += "<h6>Pressure:" + data.daily.data[i].pressure + "</h6>"

            } else if (i === 2) {
                newHtml3 += "<h4 class='text-light bg-dark'>" + data.daily.data[2].temperatureHigh.toFixed(1) + ' <i class="fas fa-temperature-high"></i> / ' + data.daily.data[i].temperatureLow.toFixed(1) + " <i class=\"fas fa-temperature-low\"></i></h4>";
                newHtml3 += "<h6>" + icons + '<br>' + data.daily.data[i].summary + "</h6>";
                newHtml3 += "<h6>Humidity:" + data.daily.data[i].humidity + "</h6>";
                newHtml3 += "<h6>Wind:" + data.daily.data[i].windSpeed + "</h6>";
                newHtml3 += "<h6>Pressure:" + data.daily.data[i].pressure + "</h6>"
            }
        });
        $('#box1').html(newHtml);
        $('#box2').html(newHtml2);
        $('#box3').html(newHtml3);

    });
}

$.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/29.4241,-98.4936").done(function (data) {

    var newHtml = '';
    var newHtml2 = '';
    var newHtml3 = '';
    var call = data.daily.data;
    console.log(data);
    call.forEach(function (apple, i) {
        switch (data.daily.data[i].icon) {
            case "clear-day":
                var icons = weatherStuff[0];
                break;
            case "clear-night":
                var icons = weatherStuff[1];
                break;
            case "rain":
                var icons = weatherStuff[2];
                break;
            case "snow":
                var icons = weatherStuff[3];
                break;
            case "sleet":
                var icons = weatherStuff[4];
                break;
            case "wind":
                var icons = weatherStuff[5];
                break;
            case "fog":
                var icons = weatherStuff[6];
                break;
            case "cloudy":
                var icons = weatherStuff[7];
                break;
            case "partly-cloudy-day":
                var icons = weatherStuff[8];
                break;
            case "partly-cloudy-night":
                var icons = weatherStuff[9];
                break;
            default:
                console.log('ERROR WITH ICON, TRY AGAIN.');
        }

        if (i === 0) {
            newHtml += "<h4 class='text-light bg-dark'>" + (data.daily.data[0].temperatureHigh).toFixed(1) + ' <i class="fas fa-temperature-high"></i> / ' + data.daily.data[0].temperatureLow.toFixed(1) + " <i class=\"fas fa-temperature-low\"></i></h4>";
            newHtml += "<h6>" + icons + '<br>' + data.daily.data[0].summary + "</h6>";
            newHtml += "<h6>Humidity:" + data.daily.data[0].humidity + "</h6>";
            newHtml += "<h6>Wind:" + data.daily.data[0].windSpeed + "</h6>";
            newHtml += "<h6>Pressure:" + data.daily.data[0].pressure + "</h6>"
        } else if (i === 1) {
            newHtml2 += "<h4 class='text-light bg-dark'>" + data.daily.data[i].temperatureHigh.toFixed(1) + ' <i class="fas fa-temperature-high"></i> / ' + data.daily.data[i].temperatureLow.toFixed(1) + " <i class=\"fas fa-temperature-low\"></i></h4>";
            newHtml2 += "<h6>" + icons + '<br>' + data.daily.data[i].summary + "</h6>";
            newHtml2 += "<h6>Humidity:" + data.daily.data[i].humidity + "</h6>";
            newHtml2 += "<h6>Wind:" + data.daily.data[i].windSpeed + "</h6>";
            newHtml2 += "<h6>Pressure:" + data.daily.data[i].pressure + "</h6>"

        } else if (i === 2) {
            newHtml3 += "<h4 class='text-light bg-dark'>" + data.daily.data[2].temperatureHigh.toFixed(1) + ' <i class="fas fa-temperature-high"></i> / ' + data.daily.data[i].temperatureLow.toFixed(1) + " <i class=\"fas fa-temperature-low\"></i></h4>";
            newHtml3 += "<h6>" + icons + '<br>' + data.daily.data[i].summary + "</h6>";
            newHtml3 += "<h6>Humidity:" + data.daily.data[i].humidity + "</h6>";
            newHtml3 += "<h6>Wind:" + data.daily.data[i].windSpeed + "</h6>";
            newHtml3 += "<h6>Pressure:" + data.daily.data[i].pressure + "</h6>"
        }
    });
    $('#box1').html(newHtml);
    $('#box2').html(newHtml2);
    $('#box3').html(newHtml3);
});



function pushed() {
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/29.4241,-98.4936").done(function (data) {

        var newHtml = '';
        var newHtml2 = '';
        var newHtml3 = '';
        var call = data.daily.data;
        console.log(data);
        call.forEach(function (apple, i) {
            switch (data.daily.data[i].icon) {
                case "clear-day":
                    var icons = weatherStuff[0];
                    break;
                case "clear-night":
                    var icons = weatherStuff[1];
                    break;
                case "rain":
                    var icons = weatherStuff[2];
                    break;
                case "snow":
                    var icons = weatherStuff[3];
                    break;
                case "sleet":
                    var icons = weatherStuff[4];
                    break;
                case "wind":
                    var icons = weatherStuff[5];
                    break;
                case "fog":
                    var icons = weatherStuff[6];
                    break;
                case "cloudy":
                    var icons = weatherStuff[7];
                    break;
                case "partly-cloudy-day":
                    var icons = weatherStuff[8];
                    break;
                case "partly-cloudy-night":
                    var icons = weatherStuff[9];
                    break;
                default:
                    console.log('ERROR WITH ICON, TRY AGAIN.');
            }

            if (i === 0) {
                newHtml += "<h4 class='text-light bg-dark'>" + (data.daily.data[0].temperatureHigh).toFixed(1) + ' <i class="fas fa-temperature-high"></i> / ' + data.daily.data[0].temperatureLow.toFixed(1) + " <i class=\"fas fa-temperature-low\"></i></h4>";
                newHtml += "<h6>" + icons + '<br>' + data.daily.data[0].summary + "</h6>";
                newHtml += "<h6>Humidity:" + data.daily.data[0].humidity + "</h6>";
                newHtml += "<h6>Wind:" + data.daily.data[0].windSpeed + "</h6>";
                newHtml += "<h6>Pressure:" + data.daily.data[0].pressure + "</h6>"
            } else if (i === 1) {
                newHtml2 += "<h4 class='text-light bg-dark'>" + data.daily.data[i].temperatureHigh.toFixed(1) + ' <i class="fas fa-temperature-high"></i> / ' + data.daily.data[i].temperatureLow.toFixed(1) + " <i class=\"fas fa-temperature-low\"></i></h4>";
                newHtml2 += "<h6>" + icons + '<br>' + data.daily.data[i].summary + "</h6>";
                newHtml2 += "<h6>Humidity:" + data.daily.data[i].humidity + "</h6>";
                newHtml2 += "<h6>Wind:" + data.daily.data[i].windSpeed + "</h6>";
                newHtml2 += "<h6>Pressure:" + data.daily.data[i].pressure + "</h6>"

            } else if (i === 2) {
                newHtml3 += "<h4 class='text-light bg-dark'>" + data.daily.data[2].temperatureHigh.toFixed(1) + ' <i class="fas fa-temperature-high"></i> / ' + data.daily.data[i].temperatureLow.toFixed(1) + " <i class=\"fas fa-temperature-low\"></i></h4>";
                newHtml3 += "<h6>" + icons + '<br>' + data.daily.data[i].summary + "</h6>";
                newHtml3 += "<h6>Humidity:" + data.daily.data[i].humidity + "</h6>";
                newHtml3 += "<h6>Wind:" + data.daily.data[i].windSpeed + "</h6>";
                newHtml3 += "<h6>Pressure:" + data.daily.data[i].pressure + "</h6>"
            }
        });
        $('#box1').html(newHtml);
        $('#box2').html(newHtml2);
        $('#box3').html(newHtml3);
    });
}

//Button stuff

// function finder() {
//     var place = ($('#place').val()).toString();
//     geocode(place, mapBoxAccessKey).then(function (result) {
//         console.log(result);
//         map.setCenter(result);
//         map.setZoom(10);
//     });
// }


// marker.on('dragend', refreshed);


// $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/29.4241,-98.4936");
// var call =
// // console.log(data.daily.data[1].temperatureHigh + '/' + data.daily.data[1].temperatureLow);
// var newHtml = '';
//

//     call.done(function (data) {
// var newHtml2 = '';
// var newHtml3 = '';
// var time;
// var call2;
// var call3;
// console.log(data);
//
// var dateObject = new Date(data.currently.time * 1000);
// console.log(dateObject.toString());

//
// var nextDay = data.currently.time + 86400;
// var dayAfter = data.currently.time + (86400 * 2);
// var today = data.currently.time;
// console.log(nextDay);
// console.log(dayAfter);
// console.log(today);
// console.log(data.daily.data[1].humidity);
//     var call2 = $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/29.4241,-98.4936," + (data.currently.time + 86400));
//     var call3 = $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/29.4241,-98.4936," + (data.currently.time + (86400 * 2)));
//     displayStuff();
//     console.log(call2);
//     console.log(call3);
//     call2.done(function (data) {
//     function displayStuff2() {
//         newHtml2 += "<h3>" + data.responseJSON.daily.data[0].temperatureHigh + '/' + data.responseJSON.daily.data[1].temperatureLow + "</h3>";
//         // html =+ image
//         newHtml2 += "<h5>" + data.responseJSON.daily.data[0].icon + "</h5>";
//         newHtml2 += "<h5>Humidity:" + data.responseJSON.daily.data[0].humidity + "</h5>";
//         newHtml2 += "<h5>Wind:" + data.responseJSON.daily.data[0].windSpeed + "</h5>";
//         newHtml2 += "<h5>Pressure:" + data.responseJSON.daily.data[0].pressure + "</h5>";
//     }
//     displayStuff2();
//
// });
// call3.done(function (data) {
//     function displayStuff3() {
//
//         newHtml3 += "<h3>" + data.daily.data[1].temperatureHigh + '/' + data.daily.data[1].temperatureLow + "</h3>";
//         // html =+ image
//         newHtml3 += "<h5>" + dataTwo.daily.icon + "</h5>";
//         newHtml3 += "<h5>Humidity:" + dataTwo.daily.data[1].humidity + "</h5>";
//         newHtml3 += "<h5>Wind:" + dataTwo.daily.data[1].windSpeed + "</h5>";
//         newHtml3 += "<h5>Pressure:" + dataTwo.daily.data[1].pressure + "</h5>";
//     }
//     displayStuff3();
//
// });


// $('#box1').html(newHtml);
// $('#box2').html(newHtml2);
// $('#box3').html(newHtml3);
//
// });

// })();


// /***
//  * geocode is a method to search for coordinates based on a physical address and return
//  * @param {string} search is the address to search for the geocoded coordinates
//  * @param {string} token is your API token for MapBox
//  * @returns {Promise} a promise containing the latitude and longitude as a two element array
//  *
//  * EXAMPLE:
//  *
//  *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
//  *      // do something with results
//  *  })
//  *
//  */
// function geocode(search, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
//         .then(function (res) {
//             return res.json();
//             // to get all the data from the request, comment out the following three lines...
//         }).then(function (data) {
//             return data.features[0].center;
//         });
// }
//
//
// /***
//  * reverseGeocode is a method to search for a physical address based on inputted coordinates
//  * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
//  * @param {string} token is your API token for MapBox
//  * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
//  *
//  * EXAMPLE:
//  *
//  *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
//  *      // do something with results
//  *  })
//  *
//  */
// function reverseGeocode(coordinates, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
//         .then(function (res) {
//             return res.json();
//         })
//         // to get all the data from the request, comment out the following three lines...
//         .then(function (data) {
//             return data.features[0].place_name;
//         });
// }