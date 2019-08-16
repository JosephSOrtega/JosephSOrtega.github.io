"use strict";

(function() {

var choices = parseInt(prompt("Please enter an odd number between 1-50:"));

function oddNum() {
    for (var i = 1; i < 50; i+=2) {

        if (choices % 2 === 0) {
            break;
        } else if (i === choices) {
            console.log("Yikes!, let's skip " + choices);
            continue;
        }
        console.log("Here is an odd number: " + i);
    }
}
while ((choices % 2 === 0) || (choices > 50)){
        alert("Hey! That's an invalid input. Try again");
        var choices = parseInt(prompt("Please enter an odd number between 1-50:"));
    }
        alert("The number to skip is: " + choices);
        console.log("The number to skip is: " + choices);
        console.log(oddNum(choices))
})();


////Another way to do it (my first attempt)
//
//
// (function() {
//
// var choice = parseInt(prompt("Please enter an odd number between 1-50:"));
// alert("The number to skip is: " + choice);
//
// while (choice % 2 === 0){
//     alert("Hey! That's an even number. Try again");
//     var choice = parseInt(prompt("Please enter an odd number between 1-50:"));
//     alert("The number to skip is: " + choice);
// }
//
// console.log("The number to skip is: " + choice);
//
//
// for (var i = 1; i < 50; i+=2) {
//     if (i === choice) {
//         console.log('Yikes!, lets skip ' + choice);
//         continue;
//     }
//
//     console.log(i);
// }
// })();


