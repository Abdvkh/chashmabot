/*CMD
  command: item
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let lang = Libs.Lang.get();
let mLi = Libs.myLib;
let trn = lang.translations;

let curOrder = User.getProperty('curOrder');
let back = User.getProperty('backKeys');
let goods = Bot.getProperty('goods');

let itemsObj = goods[curOrder['curCateg']];
let itemsArr = Object.keys(itemsObj);

let numbers = '1,2,3,\n4,5,6,\n7,8,9,\n' + trn.back + ',' + trn.mainmenu;

if (itemsArr.includes(message)) {
   curOrder['purchases'].push(message);
   curOrder['prices'].push(parseInt(itemsObj[message]['price']));
   User.setProperty('curOrder', curOrder, 'Object');

   let itemsKeys = mLi.mKeys(itemsArr, 'bm');
   mLi.bKeys('item', itemsKeys, curOrder['curCateg']);

   Bot.sendMessage(message + '\n' + itemsObj[message]['price'] + '\n[↪](' + itemsObj[message]['photo'] + ')@ChashmaBot');
   Bot.sendKeyboard(numbers, lang.amount);
   Bot.runCommand('amount');
} else {
   mLi.back(back.cmd, back.message, back.keys, message);
}
