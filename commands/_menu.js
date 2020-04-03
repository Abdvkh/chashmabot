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

let menuKeyboard = utils.makeKeyboard(lang.mainMenuButtons,'');

Bot.sendKeyboard(menuKeyboard, wordsLikeButton.mainmenu);
Bot.run('menu');
