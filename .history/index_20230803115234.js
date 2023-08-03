const TelegramApi = require("node-telegram-bot-api")

const token = "6649709595:AAFHycDqEcDSHJyO-YlVEahj8eW6Ppo6kcs"

const bot = new TelegramApi(token, {polling: true})

const start = () => {
    bot.setMyCommands([
        {command: "/start", description: "Стартуем"},
        {command: "/info", description: "info"}
    
    ])
    
    bot.on("message", async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            return bot.sendMessage('Стартуем')
        }

        return 'Некорректное сообщение'
    })
}


start()