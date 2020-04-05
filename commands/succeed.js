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

let customer = shop.getInstance('customer');
let order = User.getProperty('order');
let orderDetails = shop.customer.getOrderDetails();
let admin = Bot.getProperty('admin');
let latitude = options.location.latitude;
let longitude = options.location.longitude;

order['location']['longitude'] = longitude;
order['location']['latitude'] = latitude;
User.setProperty('order', order, 'Object');
customer['ordersAmount'] += 1;
User.setProperty('customerInfo', customer, 'Object');

// shop.customer.setUserLocation(user_location);

let keyboard = [
   [
      {title: 'Принять', command:'order a|' + user.telegramid},
      {title: 'Отказать', command:'order r|' + user.telegramid}
   ],
   [
      {title: 'Получить местоположение', command: 'sendLocationToAdmin ' + longitude + "|" + latitude}
   ]
];
let requestFromUser = "Заявка от:" + "\n" + "Пользователя: "+
                     "[" + customer.name + "](tg://user?id=" + customer.id + ")" +
                     "\nТелефон: " + customer.phoneNumber +
                     '\n\nДетали заказа:\n' + orderDetails +
                     '\nТип оплаты: ' + order['paymentType'];

Bot.sendInlineKeyboardToChatWithId(admin, keyboard, requestFromUser);
shop.reset('order');
Bot.sendMessage(lang.orderAccepted + Bot.getProperty('orderNum'));
Bot.runCommand('/menu');
