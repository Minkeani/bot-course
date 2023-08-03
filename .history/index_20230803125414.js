const TelegramApi = require("node-telegram-bot-api")

const token = "6649709595:AAFHycDqEcDSHJyO-YlVEahj8eW6Ppo6kcs"

const bot = new TelegramApi(token, {polling: true})

const chats = {

}

const againOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "Repeat", callback_data: "/again"}],

        ]
    })
}

const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: "1", callback_data: "1"}, {text: "2", callback_data: "2"}, {text: "3", callback_data: "3"}],

        ]
    })
}

const startGame = async (chatId) => {
    await bot.sendMessage(chatId, "Бот загадывает цифру от 1 до 3, вы должны ее отгадать")
    const randomNumber = Math.floor((Math.random()*3))
    chats[chatId] = randomNumber
    await bot.sendMessage(chatId, 'Отгадывай', gameOptions)
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

        if (text === '/again') {
            return startGame(chatId, gameOptions)
        }

        if (text === '/game') {
           return startGame(chatId, gameOptions)
        }

        

        return bot.sendMessage(chatId, "Некорректное сообщение") 
    })

    bot.on("callback_query", msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        console.log(msg);
        
        bot.sendMessage(chatId, `your answer ${data}`)
        if (data == chats[chatId]) {
            bot.sendMessage(chatId, `correct ${chats[chatId]}`, againOptions)
        }
        else {
            bot.sendMessage(chatId, `incorrect ${chats[chatId]}`, againOptions)

        }
    })

}


start()