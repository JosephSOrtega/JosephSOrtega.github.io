/*
// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// Use .map to create an array of strings where each element is a user's email address

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

// Use .reduce to get the longest email from the list of users.

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

*/

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeOrMore = users.filter(n => n.languages.length >= 3);
console.log(threeOrMore);

const theirEmails = users.map(n => n.email);
console.log(theirEmails);

const yearsTotal = users.reduce((years, folks) => {
    return (years + folks.yearsOfExperience) / users.length;
}, 0);
console.log(yearsTotal);

const longestEmail = users.reduce(function (previous, current) {
    const currentEmail = current.email;
    if (currentEmail.length > previous.length) {
        return currentEmail
    } else {
        return previous
    }
}, '');
console.log(longestEmail);


// const names = users.reduce((names, folks) => {
//     return names + ' ' + folks.name;
// }, '');
// console.log(names);

const names = users.reduce((language, peeps, index, arr
) => {
    if (index === (arr.length - 1)) {
        return `${language} ${peeps.name}.`
    } else {
        return `${language} ${peeps.name},`
    }
}, "Your Instructors are: ");
console.log(names);


//bonus
// Use .reduce to get the unique list of languages from the list of users.
const theirLang = users.reduce((list, current
) => {
    const langs = current.languages;
    for(const lang of langs){
        list.add(lang);
    }
    return list;
}, new Set);
console.log(theirLang);
