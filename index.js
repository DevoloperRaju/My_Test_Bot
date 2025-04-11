const TelegramBot = require('node-telegram-bot-api');

const token = 'আপনার-বট-টোকেন';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const options = {
    reply_markup: {
      keyboard: [
        ['Hi', 'DJ'], // ১ম লাইনে দুইটা বাটন
        ['Help'] // ২য় লাইনে একটা বাটন
      ],
      resize_keyboard: true, // মোবাইলে সুন্দর করে দেখাবে
      one_time_keyboard: false // বারবার দেখাবে (true করলে একবার ক্লিক করলে keyboard চলে যাবে)
    }
  };

  bot.sendMessage(chatId, 'Choose an option:', options);
});

// বাটনের message ধরার জন্য
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === 'Hi') {
    bot.sendMessage(chatId, 'Hi!');
  } else if (text === 'DJ') {
    bot.sendMessage(chatId, 'I am Ready');
  } else if (text === 'Help') {
    bot.sendMessage(chatId, 'How can I help you?');
  }
});