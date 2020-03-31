/*CMD
  command: amount
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let lang  = Libs.Lang.get();
let mLi   = Libs.myLib;
let trn   = lang.translations;

let amount = parseInt(message);
let curOrder = User.getProperty('curOrder');

if(amount > 0){
   curOrder['amount'].push(amount);
   User.setProperty('curOrder', curOrder, 'Object');

   mLi.saveBasketDetails();

   mLi.bKeys('amount', trn.again, keyboard);

   let msg = User.getProperty('curOrder')['msg'];
   Bot.sendMessage(msg);

   let keyboard = trn.agr + ',' + lang.order + ",\n" + trn.mainmenu;
   Bot.sendKeyboard(keyboard, trn.again);

   Bot.runCommand('answer');
}else{
   let curOrder = User.getProperty('curOrder');
   curOrder['has_things'] = false;
   curOrder['purchases'].pop();
   curOrder['prices'].pop();
   User.setProperty('curOrder', curOrder, 'Object');

   let back = User.getProperty('backKeys');
   mLi.back(back.cmd, back.txt, back.keys, message);

   let goods = Bot.getProperty('goods');
   let categoriesArr = Object.keys(goods);
   let typeKeys = mLi.mKeys(categoriesArr, 'bm');
   mLi.bKeys('type', lang.choice, typeKeys);
}
