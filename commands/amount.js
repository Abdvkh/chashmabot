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

let back = User.getProperty('backKeys');
let curOrder = User.getProperty('curOrder');

if(message > 0){
   curOrder.amount.push(message);
   User.setProperty('curOrder', curOrder, 'Object');

   mLi.rBasket();

   let curOrder    = User.getProperty('curOrder');
   let keyboard = trn.agr + ',' + lang.order + ",\n" + trn.mainmenu;

   mLi.bKeys('amount', trn.again, keyboard);

   Bot.sendMessage(curOrder.msg);
   Bot.sendKeyboard(keyboard, trn.again);
   Bot.runCommand('answer');
}else{
   curOrder['has_things'] = false;
   User.setProperty('curOrder', curOrder, 'Object');
   mLi.back(back.cmd, back.txt, back.keys, message);
}
