const mySecret = process.env['BOT_TOKEN']
// index.js

// imports the node package for us
const TelegramBot = require('node-telegram-bot-api');

// grabs the environment variable
const token = process.env.BOT_TOKEN;

// starts a new Telegram bot instance that "polls" for updates
//const bot = new TelegramBot(token, { polling: true });

var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
 

// index.js

// ... after everything we wrote already

// we're using the API's in-built "onText" method
// it takes in a regex and the message
bot.onText(/\/start/, (msg) => {
// listens for "/start" and responds with the greeting below.
bot.sendMessage(msg.chat.id,
"Hey, I'm a brand new Telegram bot. I live inside a Sanity tutorial.");
});

// index.js

// ... at the bottom
bot.on('message', (msg) => {
  console.log(msg);
	bot.sendMessage(msg.chat.id, "Message logged to console!")
})
