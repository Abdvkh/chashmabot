/*CMD
  command: getLocation
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases: mening joylashuvim, моё местоположение
CMD*/

let myLocationBtn = utils.makeKeyboard(lang.location.buttons, 'bm');
Api.sendMessage({
   chat_id: request.user.telegramid,
   text: lang.location.text,
   reply_markup: {
                  keyboard: [
                        [{
                           text: myLocationBtn, request_location: true
                        }]
                  ],
                  resize_keyboard: true
   }
});
