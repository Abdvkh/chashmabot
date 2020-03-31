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
let utils = Libs.Utils;
let wordsLikeButton = lang.buttons;

//makes keyboard from an array
let menuKeyboard = utils.makeKeyboard(lang.mainmenu_but,'');

Bot.sendKeyboard(menuKeyboard, wordsLikeButton.mainmenu);
Bot.run({
   command: 'menu',
   options: {
      menuKeyboard: menuKeyboard
   }
});
