const mainMenu = require('./main_menu');

module.exports = (bot) => {
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Step 1: Welcome Message
    bot.sendMessage(chatId, '👋 Welcome to IoLent!\n\nEarn diamonds and grow your income!');

    // Step 2: Delay দিয়ে Main Menu
    setTimeout(() => {
      mainMenu(bot, chatId);
    }, 1500); // 1500 milliseconds = 1.5 seconds
  });
};