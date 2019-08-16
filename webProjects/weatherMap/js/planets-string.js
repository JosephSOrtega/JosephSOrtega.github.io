(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsString = planetsArray.join(",");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    var planetsString = planetsArray.join("<br>");
    console.log(planetsString);

    /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
        for (var i = 0; i < 7; i++) {
            var planetsString = planetsString.replace("|", "</li><li>");
            console.log(planetsString);
        }
    var planetsArray = planetsString.split("><");
    console.log(planetsArray);
    planetsArray.unshift("<ul><li>");
    planetsArray.push("</li></ul>");
    var planetsString = planetsArray.join("><");
    console.log(planetsString);

})();


// var planetsStringBonus = planetsString.splice(7 +1, 0, '<li></li>');
// console.log(planetsString);
//
//
// function spliceSpliceBaby() {
//     var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
//     var indexed = planetsString.indexOf("|");
//
//     for (var i = indexed; i < -1; i+=0){
//         var planetString = planetsString.splice(i +1, 0, '</li><li>');
//         var i = planetsString.indexOf("|");
//     }
// }
// console.log(spliceSpliceBaby())
//
//
//
// var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
// var planetsArray = planetsString.split("|");
// console.log(planetsArray);
// planetsArray.unshift("<ul><li>");
// planetsArray.push("</li></ul>");
// var planetsString = planetsArray.join("|</li><li>");
// console.log(planetsString);
// var planetsArray = planetsString.split("|");
// var planetsArray = planetsArray.splice(9, 0, '</li><li>');
//
// function spliceSpliceBaby() {
//     var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
//     //     var indexed = planetsString.indexOf("|");
//     //     for (var i = indexed; i < 0; i+=0) {
//     //         var i = planetsString.indexOf("|");
//     //         var planetsString = planetsString.replace("|", "</li><li>");
//     //         console.log(spliceSpliceBaby())
//     //     }
//     //
//     // }
//     do {
//         var i = planetsString.indexOf("|");
//         console.log(spliceSpliceBaby())
//
//     } while (i < 0);
// }
//