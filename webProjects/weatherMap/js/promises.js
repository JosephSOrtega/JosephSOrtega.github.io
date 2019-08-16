const wait = (num) => new Promise((resolve, reject) => {
    if (num > 0) {
        setTimeout(() => {
            resolve();
        }, num);

    } else {
        reject();
    }
});

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// function getGithubUsernames(username) {
// fetch('https://api.github.com/users', {headers: {'Authorization': githubKey}})
//         .then(response => response.json())
//         // .then(users => users.map(user => user.login));
// }
// getGithubUsernames(JustinSOrtega).then((usernames) => {
//     usernames.forEach((username) => {
//         $.ajax('/:username/events/public')
//     });
// }).catch(error => console.error(error));

// function getGithubUsernames(user) {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json())
//         .then(users => users.map(user => user.login));
// }
//
// // later on...
//
// getGithubUsernames(JustinSOrtega).then((usernames) => {
//     usernames.forEach((username) => {
//         console.log("yay!");
//         fetch('/users/:username/events/public', {headers: {'Authorization': githubKey}})
//             .then(data => data.json())
//
//
//     });
// }).catch(error => console.error(error));
//

// WTF, mate?


////////////////////////////////////////////////Works!
fetch('https://api.github.com/users', {headers: {'Authorization': githubKey}})
//gets the shit from the site
    .then(response => response.json())
    //delivers and formats to json
    .then(usersArray => {
        console.log(usersArray[0].login);
        return usersArray[0].login
    }).then(data => {
    fetch('https://api.github.com/users/' + data + '/events/public', {headers: {'Authorization': githubKey}})
        .then(response => response.json())
        //delivers and formats to json
        .then(usersArray => {
            console.log(usersArray);
            for (let i = 0; i < usersArray.length; i++) {
                if (usersArray[i].type === "PushEvent") {
                    console.log(i);
                    console.log("The latest public events performed by the user: " + usersArray[i].created_at);
                    break;
                }
            }
        })
});

///////////////Accepts a name

function gitName(username) {
        fetch('https://api.github.com/users/' + username + '/events/public', {"headers": {'Authorization': githubKey}})
            .then(response => response.json())
            //delivers and formats to json
            .then(usersArray => {
                console.log(usersArray);
                for (let i = 0; i < usersArray.length; i++) {
                    if (usersArray[i].type === "PushEvent") {
                        console.log(i);
                        console.log("The latest public events performed by the user: " + usersArray[i].created_at);
                        break;
                    }
                }
            })
}
gitName('JustinSOrtega');

////////////////////////////////////////////////////////////////////////////////////// Examples!
$.get("https://api.chucknorris.io/jokes/random")
    .done(function (data) {
        console.log(data.value)
    })
    .fail(function (data) {
        console.log("there was an error")
    });

//equals:

$.get("https://api.chucknorris.io/jokes/random")
    .done((data) => {
        resolve(data)
    })
    .fail((err) => {
        reject(err)
    })
    .then(data => {
        console.log(data.value)
    })
    .catch(err => {
        console.log("there was an error" + err)
    });

//Equals with Fetch

fetch("https://api.chucknorris.io/jokes/random")
//gets the shit from the site
    .then(response => response.json())
    //delivers and formats to json
    .then(data => console.log(data.value));
//displays the results

//////////OR


fetch('https://api.github.com/users')
//gets the shit from the site
    .then(response => response.json())
    //delivers and formats to json
    .then(usersArray => {
        for (let user of usersArray) {
            console.log(user.html_url);
            //displays the results
        }
    });


//////////////////////////////////////////////////////////////////////////////////////


fetch("https://icanhazdadjoke.com", {headers: {Accept: "application"}})
    .then(function (data) {
        console.log(data.joke);
        console.log(data)
    })
    .then(data => {
        console.log(data.value)
    })
    .catch(err => {
        console.log("there was an error" + err)
    });
