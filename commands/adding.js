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

let products = Bot.getProperty('products');

let productsString = message;
let productsObj = JSON.parse(productsString);

Object.assign(products, productsObj);
Bot.setProperty('products');

Bot.sendMessage('Продукты добавлены!');
Bot.runCommand('/menu');
