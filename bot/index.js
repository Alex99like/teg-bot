const TelegramBot = require('node-telegram-bot-api');

const token = '5989747251:AAEb4zY8pNywx0uowUSpnX1yJ4dyzLI7L_Q'
const webAppUrl = '/'

const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Ниже появиться кнопка, заполните форму', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Заполнить форму' }]
        ]
      }
    })

    // await bot.sendMessage(chatId, 'Ниже появиться кнопка', {
    //   reply_markup: {
    //     inline_keyboard: [
    //       [{ text: 'Сделать заказ', web_app: { url: webAppUrl } }]
    //     ]
    //   }
    // })
  }
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});


