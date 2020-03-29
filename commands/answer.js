/*CMD
  command: answer
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let mLi    = Libs.myLib;
let lang   = Libs.Lang.get();
let transl = lang.translations;
let curOrder = User.getProperty('curOrder');
let goods = Bot.getProperty('goods');

switch (message) {
   case transl.agr:
      let categoriesArr = Object.getOwnPropertyNames(goods);
      let keyboard = mLi.mKeys(categoriesArr, 'bm');
      let last_keyboard = lang.agr + ',' + lang.order + ",\n" + lang.mainmenu;

      mLi.bKeys('answer', lang.again, last_keyboard);

      Bot.sendKeyboard(keyboard, lang.choice);
      Bot.runCommand('type');
      break;
   case lang.order:
      let keyboardp = lang.payment.but + ',' + transl.back + ',' + transl.mainmenu;
      mLi.bKeys('answer', lang.payment.text, keyboard);

      Bot.sendKeyboard(keyboardp, lang.payment.text);
      Bot.runCommand('payment');
      break;
   default:
      Bot.sendMessage('Incorrect');
      Bot.runCommand('answer');
}
