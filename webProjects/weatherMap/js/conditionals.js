"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
function numbersGame(parameters) {
    confirm("Would you like to enter a number?");
    var yourNum = prompt("What number would you like to enter?");
    var isItANum = !isNaN(Number(yourNum));
    if (isItANum == true) {
        var evenNum = (Number(yourNum) % 2) === 0;
        var evenOrOdd = (evenNum) ? alert(yourNum + " is an even number") : alert(yourNum + " is an odd number");
        console.log(evenOrOdd);
        var addHund = Number(yourNum) + 100;
        var hunAdded = alert(yourNum + " plus 100 is: " + addHund);
        console.log(hunAdded);
        var posNum = Number(yourNum) > 0;
        var posOrNeg = (posNum) ? alert(yourNum + " is an positive number") : alert(yourNum + " is an negative number");
        console.log(posOrNeg);
    } else {
        alert("Hey, that's not a number. Try again!")
    }
}
numbersGame();
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyseColor(parameters) {
    if (parameters.toLowerCase() === "blue"){
        return "blue is the color of the sky"
    } else if (parameters.toLowerCase() === "red"){
        return "Strawberries are red"
    } else if (parameters.toLowerCase() === "cyan"){
        return "I don't know anything about cyan"
    } else {
        return parameters + " wasn't one of the defined colors."
    }
}
analyseColor("blue");
analyseColor("red");
analyseColor("cyan");


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyseColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

switch(randomColor) {
    case "blue":
        alert("blue is the color of the sky");
        break;
    case "red":
        alert("Strawberries are red");
        break;
    case "cyan":
        alert("I don't know anything about cyan");
        break;
    default:
        alert( parameters + " wasn't one of the defined colors." );
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var colorPrompted = prompt("Name a color");
function analyseColor(parameters) {
    if (parameters.toLowerCase() === "blue"){
        alert("blue is the color of the sky")
    } else if (parameters.toLowerCase() === "red"){
        return alert("Strawberries are red")
    } else if (parameters.toLowerCase() === "cyan"){
        return alert("I don't know anything about cyan")
    } else {
        return alert(parameters + " wasn't one of the defined colors." )
    }
}

analyseColor(colorPrompted);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var luckyNumber = Number(prompt("What was your lucky number?"));
var price = Number(prompt("What was the total price of your order?"));
function calculateTotal(a,b) {
    if (a === 0){
        return "Your new total is: $" + (1 * b)
    } else if (a === 1){
        return "Your new total is: $" + (.9 * b)
    } else if (a === 2){
        return "Your new total is: $" + (.75 * b)
    } else if (a === 3){
        return "Your new total is: $" + (.65 * b)
    } else if (a === 4){
        return "Your new total is: $" + (.5 * b)
    } else if (a === 5){
        return "Your new total is: $" + (b);
    }
}
console.log(calculateTotal(luckyNumber,price));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var price = Number(prompt("What was the total price of your order?"));
function calculateTotal(a,b) {
    if (a === 0){
        return alert("Your lucky number was: " + luckyNumber + ". Sorry, you didnt get a discount because the discount for number 0 is 0%. Your total is still: $" + (b))
    } else if (a === 1){
        return alert("Your lucky number was: " + luckyNumber + ". Your price before the discount was: $" + price + ". Now your new total is: $" + (9 * b))
    } else if (a === 2){
        return alert("Your lucky number was: " + luckyNumber + ". Your price before the discount was: $" + price + ". Now your new total is: $" + (.75 * b))
    } else if (a === 3){
        return alert("Your lucky number was: " + luckyNumber + ". Your price before the discount was: $" + price + ". Now your new total is: $" + (.65 * b))
    } else if (a === 4){
        return alert("Your lucky number was: " + luckyNumber + ". Your price before the discount was: $" + price + ". Now your new total is: $" + (.5 * b))
    } else if (a === 5){
        return alert("Your lucky number was: " + luckyNumber + ". Your price before the discount was: $" + price + ". Now your new total is: $0 because it was free!!")
    } else {
        return alert("Sorry, something went wrong. Please refresh your page and try again")
    }
}
console.log(calculateTotal(luckyNumber,price));
