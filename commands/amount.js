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

//amount
let lang  = Libs.Lang.get();
let mLi   = Libs.myLib;
let trn   = lang.translations;

let amount = parseInt(message);
if(amount > 0){
   let curOrder = User.getProperty('curOrder');
   curOrder1.amount.push(amount);
   User.setProperty('curOrder', curOrder, 'Object');

   mLi.rBasket();

   // let curOrder = User.getProperty('curOrder');
   let keyboard = trn.agr + ',' + lang.order + ",\n" + trn.mainmenu;

   mLi.bKeys('amount', trn.again, keyboard);

   Bot.sendMessage(curOrder.msg);
   Bot.sendKeyboard(keyboard, trn.again);
   Bot.runCommand('answer');
}else{
   let curOrder = User.getProperty('curOrder');
   curOrder['has_things'] = false;
   curOrder.purchases.pop();
   curOrder.prices.pop();
   User.setProperty('curOrder', curOrder, 'Object');

   let back = User.getProperty('backKeys');
   mLi.back(back.cmd, back.txt, back.keys, message);

   let goods = Bot.getProperty('goods');
   let categoriesArr = Object.keys(goods);
   let typeKeys = mLi.mKeys(categoriesArr, 'bm');
   mLi.bKeys('type', lang.choice, typeKeys);}
