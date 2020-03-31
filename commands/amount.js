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
   curOrder['amount'].push(amount);
   User.setProperty('curOrder', curOrder, 'Object');
   let details = User.getProperty('curOrder');

   if(details['msg'] == ''){ details['msg'] =  'Ваш заказ:' }
   for (var i = 0; i < details.['purchases'].length; i++){
      details['msg'] += '\n*' + details.['purchases'][i] + '*\n' + '\n' + details['amount'][i] + 'x' + details['prices'][i] + ' = ' + details['amount'][i] * details['prices'][i];
      details['sum'] += details['amount'][i] * details['price'][i];
   }
   User.setProperty('curOrder', details, 'Object');


   let curOrderChanged = User.getProperty('curOrder');
   let keyboard = trn.agr + ',' + lang.order + ",\n" + trn.mainmenu;

   mLi.bKeys('amount', trn.again, keyboard);

   Bot.sendMessage(curOrderChanged['msg']);
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
   mLi.bKeys('type', lang.choice, typeKeys);}
