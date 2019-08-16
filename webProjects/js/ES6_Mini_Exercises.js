"use strict";

/*
    EXPONENTIATION
    We know that the old JS syntax uses this:
    >> Math.pow(a,b)
    Using the ES6 exponentiation Operator, refactor the following:
 */

var x = 4 ** 5;
console.log(x);

var random = Math.floor(Math.random() * 2 ** 3);
console.log(random);


/*
    LET & CONST
    Refactor the above to use es6 variable types.
    What happens when you change the 'random' variable to a const?

    Why does this happen?
    How do we fix this behavior?
 */
const random = Math.floor(Math.random() * 2);
console.log(random);

//cant reassign a const's variable. Turn into a Let to make it work.

/*
    STRING INTERPOLATION
    we can use template strings in the new es6 syntax to avoid concatenating
     multiples strings together.

     Uncomment the two constants, put in the appropriate strings.
     Refactor the code down below to use template strings.
 */

const name = "another";
const cohort = "more";
const greeting = `Hello ${name}! You are in the ${cohort} cohort.`;
console.log(greeting);

//Use backticks for the strings with temp strings in them!!!!!!!


/*
    FOR...OF
    lets us iterate over Arrays, NodeLists, and even Strings

    rewrite the following as a for...of loop
 */

const instructors = [
    'Daniel',
    'Vivian',
    'Sophie',
    'David',
    'Justin',
    'Fer',
    'Terrell'
];


instructors.forEach(function (instructor) {
    console.log(instructor);
});

//or
for (let names of instructors) {
    console.log(names);
}

//or

for (let [index, names] of instructors.entries()) {
    console.log(names);
    console.log(index);
}
//can use break and continue


//iterate over char of a string
const myString = "doghouse";
for (let chr of myString) {
    console.log(chr.toUpperCase());
}


/*
    ARROW FUNCTIONS
    Shorter, cleaner and allows the 'this' keyword to be bound lexically.
    Pretty neat.

    How can you use fat arrow syntax to refactor the code below?
    Make it as concise as possible.
 */

function add(x = 2, y = 3) {
    return x + y;
}

const add = (x = 2, y = 3) => x + y;

function square(x) {
    return x * x;
}

const square = (x) => x * x;

const yourName = name => `My name is ${name}'`;

const subtract = (a, b) => a - b;
// Equals
// const subtract = (a, b) => {
//     let c = a - b;
//     return c;
// };


// var userId = 1;
//
// //user object
// const users = {
//     userId: 2;
// allUsers: ['Vivian', 'Sophie', 'Daniel'],
//     printUsers
// :
//
// function () {
//     return this.allUsers.map((users) => {
//         return user + this.userId
//     });
// }
// }
//
//
/*
    DEFAULT FUNCTION PARAMETER VALUES
    refactor the following so that variable 'greeting' has a value of 'Good
     Morning' and 'name' has the value of 'Betelgeuse.

     Check your work.
 */

const myGreeting = (greeting = 'Good morning', name = "Betelgeuse") => {
    return `${greeting}, ${name}`;
};

console.log(myGreeting());
console.log(myGreeting("Hello ", "Sophie"));

/*
    OBJECT PROPERTY VARIABLE ASSIGNMENT
    Refactor the Object below to use shorthand property assignment
 */

const dog = "Spike";
const cat = "Tom";
const mouse = "Jerry";

const pals = {
    dog,
    cat,
    mouse
};

// const pals = {
//     dog: dog,
//     cat: cat,
//     mouse: mouse
// };


/*
    OBJECT DESTRUCTURING
    1. Use Object Destructuring to refactor
 */

const make = 'nissan';
const model = 'rogue';
const color = 'white';

const myCar = {
    make,
    model,
    color
};

// const {make, model} = carInfo;
//equals
// const make = myCar.make;
// const model = myCar.model;

//pulling the info called make and model from carInfo and setting a variable with the info


const carInfo = ({make, model}) => {
    console.log(make);
    console.log(model);
};
// const carInfo = (car) => {
//     var make = myCar.make;
//     var model = myCar.model;
//     console.log(make);
//     console.log(model);
// };

carInfo(myCar);

/*
    OBJECT DESTRUCTURING
    2. Remember the 'instructors' array that we created at the top of this
     file? Use Array Destructuring to return the first 3 instructors. Use
      the curriculum example as a reference.
 */


const [a, b, c] = instructors;
console.log(a);
console.log(b);
console.log(c);


//bonus
//rewrite this as an arrow function
//give greeting a default value of "Good Morning"
//give cohort a default value of "Betelgeuse"
//rewrite the return to use template strings instead of concatenation

const goodMorning = (greeting = "Good Morning", cohort = "Betelgeuse") => {
    return `${greeting}, ${cohort}!`;
};

console.log(goodMorning());
console.log(goodMorning(undefined, "Ceres"));


// Next Lesson


const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genres: ["southern", "gothic", "coming of age"],
        yearsInPublication: 59
    },
    {
        title: "No Longer Human",
        author: "Osamu Dazai",
        genres: ["autobiography", "short novel"],
        yearsInPublication: 71
    },
    {
        title: "1984",
        author: "George Orwell",
        genres: ["dystopian", "sci-fi", "political fiction"],
        yearsInPublication: 70
    },
    {
        title: "Noruwei no Mori",
        author: "Haruki Murakami",
        genres: ["coming of age", "novel"],
        yearsInPublication: 32
    }
];

/*
    MAP
    using .map, create an array that returns all author names.
 */
const map = books.map(book => book.author);
console.log(map);
/*
    FILTER
    using .filter, create an array that returns all books with at least 3 genres
 */
const filter = books.filter(n => n.genres.length >= 3);
console.log(filter);

/*
    REDUCE
    using .reduce, return the total years between all books.
 */
const reduce = books.reduce((years, bookInfo) => {
    return years + bookInfo.yearsInPublication
},0);
console.log(reduce);


// Longest Author name
const longestName = books.reduce(function (previous, current) {
    const currentName = current.author;
    if (currentName.length > previous.length) {
        return currentName
    } else {
        return previous
    }
}, '');
console.log(longestName);
