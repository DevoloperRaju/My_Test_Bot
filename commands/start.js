const mainMenu = require('./main_menu');

module.exports = (bot) => {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Step 1: Welcome Message
    bot.sendMessage(chatId, '👋 Welcome to IoLent!\n\nEarn diamonds and grow your income!');

    // Step 2: Show Main Menu
    mainMenu(bot, chatId);
  });
};