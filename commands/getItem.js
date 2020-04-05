/*CMD
  command: getItem
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let order = shop.getInstance('order');
let goods = shop.getInstance('goods');
let item = message;
let curCateg = order['currentCategory'];
let itemsObj = goods[curCateg];

let numbers = '1,2,3,\n4,5,6,\n7,8,9,\n' + wordsLikeButton.back + ',' + wordsLikeButton.mainmenu;

if (Object.keys(itemsObj).includes(item)) {
   setPreviousCommand();
   saveCurrentChoice();
   sendProductInfo();
   nextCommand();
}

function saveCurrentChoice() {
   let chosenProduct = {
      name: item,
      price: parseInt(itemsObj[item]['price']),
   };
   // shop.customer.addToOrder(chosenProduct);
   User.setProperty('currentChosenProduct', chosenProduct, 'Object');
}

function sendProductInfo() {
   Bot.sendMessage(
      lang.product.name + ': ' + message +
      '\n' + lang.product.price + ': ' + itemsObj[message]['price'] + ' сум' +
      '\n\n[↪](' + itemsObj[message]['photo'] + ')@ChashmaBot'
   );
}

function setAsPreviousCommand() {
   let previousCommand = {
      cmd: 'getItem',
      txt: curCateg,
      btns: utils.makeKeyboard(Object.keys(itemsObj), 'bm')
   };
   utils.savePreviousCommand(previousCommand);
}

function nextCommand() {
   utils.runCommandWithKeyboard({
      cmd: 'getCount',
      btns: numbers,
      txt: lang.enterAmount
   });
}
