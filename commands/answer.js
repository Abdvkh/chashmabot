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
let curOrder    = User.getProperty('curOrder');

switch (message) {
   case transl.agr:
      let types = Object.getOwnPropertyNames(lang[]);
      let keyboard = mLi.mKeys(types);
      let last_keyboard = lang.agr + ',' + lang.order + ",\n" + lang.mainmenu;

      mLi.bKeys('answer', lang.again, last_keyboard);

      Bot.sendKeyboard(keyboard, lang['text']);
      break;
   case lang.order:
      let keyboard = lang.payment.but + ',' + transl.back + ',' + transl.mainmenu;
      mLi.bKeys('answer', lang.payment.text, keyboard);

      Bot.sendKeyboard(keyboard, lang.payment.text);
      Bot.runCommand('payment');
      break;
   default:
      Bot.runCommand('menu');
}
