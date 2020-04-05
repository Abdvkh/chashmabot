/*CMD
  command: succeed
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let customer = utils.getInstance('customer');
let order = utils.getInstance('order');
let orderDetails = shop.customer.getOrderDetails();
let admin = Bot.getProperty('admin');

let user_location = {
   longitude: options.location.longitude,
   latitude: options.location.latitude
};
shop.customer.setUserLocation(user_location);

let keyboard = [
   {text: 'Принять', command:'order a|' + user.telegramid},
   {text: 'Отказать', command:'order r|' + user.telegramid},
];
let requestFromUser = "Заявка от:" + "\n" + "Пользователя: "+
"[" + customer.name + "](tg://user?id=" + Srting(customer.id) + ")" +
"\nТелефон: " + String(customer.phoneNumber) +
'\n\nДетали заказа:\n' + orderDetails +
'\nТип оплаты: ' + order['paymentType'];

Bot.sendInlineKeyboardToChatWithId(admin, keyboard, requestFromUser);
Bot.sendMessage(lang.orderAccepted);
Bot.runCommand('/menu');
