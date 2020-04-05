/*CMD
  command: reset
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let order = {
   products: [],
    location: {},
};
User.setProperty('order', order, 'Object');
let userInfo = {
   name: user.first_name,
   id: user.telegramid,
   lang: Libs.Lang.getCurLang,
   phoneNumber: 0,
   ordersAmount: 0
};
User.setProperty('customerInfo', userInfo, 'Object');
Bot.sendMessage('Done!');
