var TelegramBot = require('node-telegram-bot-api');
var token = '466340960:AAEwCKxsL-gYFp4DE34-sUQn1LJVOnzawP0';
var bot = new TelegramBot(token, {polling: true});
var notes = [];

bot.onText(/\/echo (.+)/, function (msg, match) {
      var fromId = msg.from.id;
      var resp = match[1];
      bot.sendMessage(fromId, resp);
});