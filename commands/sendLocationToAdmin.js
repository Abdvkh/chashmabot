/*CMD
  command: sendLocationToAdmin
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let location = params.split('|');
let longitude = location[0];
let latitude = location[1];
let admin = Bot.getProperty('admin');

Api.sendLocation({
   chat_id: admin,
   latitude: latitude,
   longitude: longitude
});
