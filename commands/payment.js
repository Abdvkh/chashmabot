/*CMD
  command: payment
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let lang     = Libs.Lang.get();
let tr       = lang.translations;
let curOrder = User.getProperty('curOrder');

switch(message){
   case 'Click':
   case 'Payme':
      curOrder['payment'] = 'Click/Payme';
      User.setProperty('curOrder', curOrder, 'Object');
      Bot.runCommand('location');
      break;
   case 'Naqd':
   case 'Наличка':
      curOrder['payment'] = 'Naqd/Наличка';
      User.setProperty('curOrder', curOrder, 'Object');
      Bot.runCommand('location');
      break;
   default:
      Bot.sendMessage(lang.payment.text);
      Bot.runCommand('payment');
}
