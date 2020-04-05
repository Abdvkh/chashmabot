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

Api.sendMessage({
   chat_id: request.char.id,
   text: lang.location.text,
   reply_markup: {
                  keyboard: [
                        [{
                           text: lang.location.buttons[0], request_location: true
                        }]
                  ],
                  resize_keyboard: true
   }
});
