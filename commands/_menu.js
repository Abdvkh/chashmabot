/*CMD
  command: /menu
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases: asosiy menyu, Главное меню, main menu
CMD*/

let lang = Libs.Lang.get();
let mLi = Libs.myLib;
let tr = lang.translations;

let mainmenu_but = mLi.mKeys(lang.mainmenu_but,'');

Bot.sendKeyboard(mainmenu_but, tr.mainmenu);
Bot.run({
   command: 'menu',
   options: {
      mainmenu_but: mainmenu_but
   }
});
