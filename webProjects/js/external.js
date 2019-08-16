"use strict";

alert("Welcome to my Website!");
// the following line will show the OK/CANCEL confirm dialog

var confirmed = confirm('Are you sure you want to do proceed?');
console.log(confirmed); // will be either true or false

var userInput = prompt('Whats your favorite color?');
console.log('Great, ' + userInput + ' is my favorite color too!');

console.log('Hello from external JavaScript');


//3.1
alert("I have a few questions about the movies you rented...");

var totalLM = Number(prompt('How many days are you renting The Little Mermaid?'));
var totalBB = Number(prompt('How many days are you renting Brother Bear?'));
var totalH = Number(prompt('How many days are you renting Hercules?'));
var dayRent = Number(prompt('Whats the daily rate for a movie rental?'));
var rentOwedUI = (totalLM + totalBB + totalH) * dayRent;

alert('At a rate of $3 per night, Your total expense for movies this week is: $' + rentOwedUI);


//3.2

alert("You've had a busy week! Lets see how much you made.");

var userInputG = Number(prompt('How many hours did you work for Google this week?'));
var totalG = userInputG * 400;
var userInputA = Number(prompt('How many hours did you work for Amazon this week?'));
var totalA = userInputA * 380;
var userInputF = Number(prompt('How many hours did you work for Facebook this week?'));
var totalF = userInputF * 350;
var weeklyPay = totalG + totalA + totalF;

alert('You had a killer week! You made $' + weeklyPay);



//3.3

alert("Gosh, your schedule looks packed. Lets see if you can fit that new class in...");

var userInputOpenPeriod = Number(prompt('When is the class you want to take? Please input the time in military time: 2100 = 9:00pm'));
var userInputCS = Number(prompt('What is the the current size of the class?'));
var userInputMaxCS = Number(prompt("What is the the max class size?"));
var userSchCon = !confirm("Does the student have a class at that time already?");
var classesNow = userInputCS +1 <= userInputMaxCS ;
var class1 = 800;
var class2 = 900;
var class3 = 1000;
//open call for 11 or 12
var class4 = 1300;
var class5 = 1400;
var class6 = 1500;
var class7 = 1600;
var classOpen = (userInputOpenPeriod !== class1)
    && (userInputOpenPeriod !== class2) && (userInputOpenPeriod !== class3)
    && (userInputOpenPeriod !== class4) && (userInputOpenPeriod !== class5)
    && (userInputOpenPeriod !== class6) && (userInputOpenPeriod !== class7);
var available = classOpen && userSchCon && classesNow;
// var didGetIn = classOpen && classesNow;
alert('Lets see if you got into the class: ' + available );

//3.4

alert("You are trying to use a Premium Discount code! Lets see if you qualify...");

var userMemberStatus = confirm('Are you a Premium Member?');
var userItemNum = Number(prompt('How many items did you buy?'));
var userOfferDate = Number(prompt('What year is listed on your discount code?'));

alert("Your discount has been applied: " + (userMemberStatus || ((userItemNum >= 2) && (userOfferDate >= 2019))));
