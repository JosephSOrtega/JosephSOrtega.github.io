"use strict";


//break -1

function isTrue(parameters){
    return (parameters === true)
}
console.log(isTrue(false));

//break -2

function isFalse(parameters){
    return (parameters === false)
}
console.log(isFalse(false));

//break -3

function not(parameters) {
    return !parameters
}
console.log(not(123));

//break -4

function addOne(number) {
    return (Number(number) +1 )
}
console.log(addOne("dog"));

//break -5

function isEven(num) {
    // if (typeof(num) === "boolean") {
    //     num = NaN;
    // } else {
        return Number(num) % 2 === 0;
    // }
}
console.log(isEven(false));

//break -6

function isIdentical(identical1,identical2) {
    return identical1 === identical2
}
console.log(isIdentical("dog","dog"));

//break -7

function isEqual(inputAgain1,inputAgain2) {
    return inputAgain1 == inputAgain2
}
console.log(isEqual("hello","world"));

//break -8

function or(inputs,inputsHere) {
    return (inputs || inputsHere) === true
}
console.log(or(false,false));

//break -9

function and(here,hereToo) {
    return here && hereToo === true
}
console.log(and(true,true));

//break -10

function concat(la,lalala) {
    return String(la) + String(lalala)
}
console.log(concat("Hello", "World"));

