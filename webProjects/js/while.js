"use strict";
(function() {
    var i = 2;

    while (i < 65537) {
        console.log(i);
        var i = i * 2;
    }
})();

(function() {
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("Starting the day with " + allCones);
    do {
        var conesWanted = Math.floor(Math.random() * 5) + 1;
        // console.log(allCones);

        if (conesWanted <= allCones) {
            allCones -= conesWanted;
            console.log(conesWanted + " cones sold.");
        } else {
            console.log("Cannot sell you " + conesWanted + " cones.");
        }
    } while (allCones > 0);
    console.log("Yay! I sold them all!");
})();


// var allCones = Math.floor(Math.random() * 50) + 50;
// console.log("Our total amount of cones is: " + allCones);
// var conesSold = 0;
//
// do {
//
//     var justBought = Math.floor(Math.random() * 5) + 1;
//     var conesSold = justBought + conesSold;
//     if (conesSold > allCones) {
//         var conesSold = justBought - conesSold;
//         continue;
//     }
//     console.log("This person bought " + justBought + " cones! There are only " + (allCones - conesSold) + " cones left!");
//
// } while (allCones > conesSold);
// console.log("Yay! I sold them all!");
