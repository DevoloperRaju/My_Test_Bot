const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

// Environment variable থেকে Token নিন
const token = process.env.BotToken;

const bot = new TelegramBot(token, { polling: true });

// Dynamic command loading
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  command(bot);
}