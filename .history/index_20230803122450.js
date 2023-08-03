const TelegramApi = require("node-telegram-bot-api")

const token = "6649709595:AAFHycDqEcDSHJyO-YlVEahj8eW6Ppo6kcs"

const bot = new TelegramApi(token, {polling: true})

const chats = {

}

const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "1", callback_data: "1"}]
            // [{text: "2", callback_data: "2"}]
            // [{text: "3", callback_data: "3"}]
            // [{text: "4", callback_data: "4"}]
            // [{text: "5", callback_data: "5"}]
            // [{text: "6", callback_data: "6"}]
            // [{text: "7", callback_data: "7"}]
            // [{text: "8", callback_data: "8"}]
            // [{text: "9", callback_data: "9"}]

        ]
    })
}

const start = () => {
     
    bot.setMyCommands([
        {command: "/start", description: "Стартуем"},
        {command: "/info", description: "info"},
        {command: "/game", description: "Запустить игру"}

    ])
    
    bot.on("message", async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            return bot.sendMessage(chatId, "Стартуем")
        }
        if (text === '/game') {
            await bot.sendMessage(chatId, "Бот загадывает цифру от 1 до 9, вы должны ее отгадать")
            const randomNumber = Math.floor((Math.random()*10))
            chats[chatId] = randomNumber
            return bot.sendMessage(chatId, 'Отгадывай', gameOptions)
        }

        

        return bot.sendMessage(chatId, "Некорректное сообщение") 
    })

    bot.on("callback_query", msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        console.log(msg);
        
        bot.sendMessage(chatId, `your answer ${data}`)
    })

}


start()