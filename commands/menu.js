/*CMD
  command: menu
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let lang = Libs.Lang.get();
let wordsLikeButton = lang.buttons;

let utils = Libs.Utils;

let shop = Libs.Shop;
let order = shop.getOrderInfo();
let basketDetails = shop.returnBasketDetails();

let level = User.getGroup();

switch (message) {
   case lang.mainmenu_but[0]:
      Bot.sendKeyboard(wordsLikeButton.mainmenu , lang.number);
      Bot.runCommand('number');
      break;
   case lang.mainmenu_but[1]:
      if (!shop.basketIsEmpty()){
         let basketKeyboard = wordsLikeButton.clean + ',' + wordsLikeButton.send + '\n,' + wordsLikeButton.mainmenu ;

         Bot.sendKeyboard(basketKeyboard, basket_msg);
         Bot.runCommand('basket');
      } else {
         Bot.sendMessage("Basket is empty");
         Bot.runCommand('menu');
      }
      break;
   case lang.mainmenu_but[2]:
      Bot.runCommand('/profile');
      break;
   case lang.mainmenu_but[3]:
      Bot.runCommand('/help');
      break;
   case lang.mainmenu_but[4]:
      let settingsKeyb = wordsLikeButton.lang + ',' + wordsLikeButton.mainmenu;

      Bot.sendKeyboard(settingsKeyb, lang.mainmenu_but[4])
      Bot.runCommand('settings');
      break;
   case '/admin':
      if(level){
         Bot.runCommand('/admin');
         break;
      }
   default:
      let mainmenuKeyb = utils.makeKeyboard(lang.mainmenu_but,'');

      Bot.sendMessage('There is no such command')
      Bot.sendKeyboard(mainmenuKeyb , wordsLikeButton.mainmenu);
      Bot.runCommand('menu');
}
