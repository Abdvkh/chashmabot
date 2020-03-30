/*CMD
  command: adding
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let products = Bot.getProperty('goods');

let productsString = message;
let productsObj = JSON.parse(productsString);

Object.assign(products, productsObj);
Bot.setProperty('goods', products, 'Object');

Bot.sendMessage('Продукты добавлены!');
Bot.runCommand('/menu');
