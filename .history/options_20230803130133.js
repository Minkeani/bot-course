module.exports = {
     againOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "Repeat", callback_data: "/again"}],
    
            ]
        })
    },
    
     gameOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: "1", callback_data: "1"}, {text: "2", callback_data: "2"}, {text: "3", callback_data: "3"}],
    
            ]
        })
    }
    
}