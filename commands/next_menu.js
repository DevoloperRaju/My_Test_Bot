const mainMenu = require('./main_menu');

module.exports = (bot, chatId) => {
  const nextMenuOptions = {
    reply_markup: {
      keyboard: [
        ['🎁 Gift Code', '🕑 History'],
        ['📢 Notice', '🧩 Learn About IoLent'],
        ['🏅 LeaderBoard'],
        ['⬅️ Previous Page']
      ],
      resize_keyboard: true
    }
  };

  bot.sendMessage(chatId, '📖 Next Page:\nPlease select an option below:', nextMenuOptions);

  // Listen for Previous Page button
  bot.once('message', (msg) => {
    if (msg.text === '⬅️ Previous Page') {
      mainMenu(bot, msg.chat.id);
    }
  });
};