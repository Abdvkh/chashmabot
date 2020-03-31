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
let curOrder = User.getProperty('curOrder');

if(amount > 0){
   curOrder['amount'].push(amount);

   if(curOrder['msg'] == ''){ curOrder['msg'] =  'Ваш заказ:' }

   for (var i = 0; i < curOrder['purchases'].length; i++){
      curOrder['msg'] += '\n*' + curOrder['purchases'][i] + '*\n' + '\n' + curOrder['amount'][i] + 'x' + curOrder['prices'][i] + ' = ' + curOrder['amount'][i] * curOrder['prices'][i];
      curOrder['sum'] += curOrder['amount'][i] * curOrder['price'][i];
   }
   let msg = curOrder['msg'];
   User.setProperty('curOrder', curOrder, 'Object');

   let keyboard = trn.agr + ',' + lang.order + ",\n" + trn.mainmenu;

   mLi.bKeys('amount', trn.again, keyboard);

   Bot.sendMessage(msg);
   Bot.sendKeyboard(keyboard, trn.again);
   Bot.runCommand('answer');
}else{
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
