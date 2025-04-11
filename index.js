const TelegramBot = require('node-telegram-bot-api');

// আপনার Bot Token এখানে বসান
const token = '6114573552:AAFUs_xgteTw6vyMj0qK-sc4RwYC_grD37k';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Hi!");
});

bot.onText(/DJ/, (msg) => {
  bot.sendMessage(msg.chat.id, "I,am Ready");
});