const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const token = '6114573552:AAFUs_xgteTw6vyMj0qK-sc4RwYC_grD37k';
const bot = new TelegramBot(token, { polling: true });

// Dynamic command loading
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  command(bot);
}