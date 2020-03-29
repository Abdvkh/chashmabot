/*CMD
  command: location
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases: mening joylashuvim, моё местоположение
CMD*/

let lang = Libs.Lang.get();

Api.sendMessage({
   chat_id: request.user.telegramid,
   text: lang.location.text,
   reply_markup: {
                  keyboard: [
                        [{
                           text: lang.location.button, request_location: true
                        }]
                  ],
                  resize_keyboard: true
   }
});
