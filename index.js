const Discord = require('discord.js'); // ensures use of discord api
const client = new Discord.Client(); 
const fetch = require('node-fetch'); // use of node-fetch API
let res;
let n = 20;
var question;

let sortBy = [
    'hot',
    'controversial',
    'new'
];
let subReddit = [
    'askreddit',
    'askscience',
    'askwomen',
    'askmen'
];


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', message => {
    console.log(message.content);
    if(message.content === 'bored' || message.content === 'Bored') {
        var int = Math.floor(Math.random() * n);
        var sortByInt = Math.floor(Math.random() * 3)
        var subRedditInt = Math.floor(Math.random() * 4)
        var subRedditChoice = subReddit[subRedditInt];
        var sortByChoice = sortBy[sortByInt];
        res = fetch('https://api.reddit.com/r/' + subRedditChoice + '/' + sortByChoice)
            .then((res) => res.json())
            .then((json) => {
        question = (json.data.children[int].data.title);
        message.channel.send(question);
        console.log(subRedditChoice);
        console.log(sortByChoice);
        int = 0;
        int = Math.round(Math.random() * n);
        sortByInt = 0;
        sortByInt = Math.floor(Math.random() * 3);
        subRedditInt = 0;
        subRedditInt = Math.floor(Math.random() * 4);
    })
    .catch((err) => console.error(err))
    }
    if(message.content === '!reset') {
        int = 0;
    }
    if(message.content === 'important' || message.content === 'Important') {
        message.channel.send('if you had to suck a 10 inch dick, would you cup the balls?');
    }
});


client.login('ODY0ODE2NTQ0MDI5OTk5MTE0.YO69Kw.L9zb2AGqsPFmRtdHivrCLAVWp64');