const TelegramApi = require("node-telegram-bot-api")

const token = "6649709595:AAFHycDqEcDSHJyO-YlVEahj8eW6Ppo6kcs"

const bot = new TelegramApi(token, {polling: true})

bot.on("message", async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    bot.sendMessage(chatId,  `${text}`)
})