/*CMD
  command: type
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

let curOrder = User.getProperty('curOrder');
let back = User.getProperty('back');
let goods = Bot.getProperty('goods');

let categoriesArr = Object.keys(goods);

let exists = categoriesArr.includes(message);

if (exists){
   let itemsObj = goods[message];
   let itemsArr = Object.keys(itemsObj);

   if (itemsArr) {
      curOrder['curCateg'] = message;
      User.setProperty('curOrder', curOrder, 'Object');
      let itemsKeys = mLi.mKeys(itemsArr, 'bm');
      Bot.sendKeyboard(itemsKeys, message);
      Bot.runCommand('item');
   } else {
      Bot.sendMessage(lang.in_dev);
      mLi.back('type', lang.type.text, back.keys, 'Назад');
   }
} else {
   mLi.back(back.cmd, back.txt, back.keys, message);
}
