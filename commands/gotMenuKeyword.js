/*CMD
  command: gotMenuKeyword
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let level = User.getGroup();

switch (message) {
   case lang.mainMenuButtons[0]:
      Bot.sendKeyboard(wordsLikeButton.mainmenu , lang.enterNumber);
      Bot.runCommand('gotNumber');
      break;
   case lang.mainMenuButtons[1]:
      if (!shop.basketIsEmpty()){
         let basketKeyboard = wordsLikeButton.clean + ',' + wordsLikeButton.send + '\n,' + wordsLikeButton.mainmenu ;
         let basket_msg = shop.customer.getOrderDetails();
         Bot.sendKeyboard(basketKeyboard, basket_msg);
         Bot.runCommand('gotOrderMenuCommand');
      } else {
         Bot.sendMessage(lang.basket.empty);
         Bot.runCommand('gotMenuKeyword');
      }
      break;
   case lang.mainMenuButtons[2]:
      Bot.runCommand('/profile');
      break;
   case lang.mainMenuButtons[3]:
      Bot.runCommand('/help');
      break;
   case lang.mainMenuButtons[4]:
      let settingsKeyb = wordsLikeButton.lang + ',' + wordsLikeButton.mainmenu;

      Bot.sendKeyboard(settingsKeyb, lang.mainMenuButtons[4])
      Bot.runCommand('settings');
      break;
   case '/admin':
      if(level){
         Bot.runCommand('/admin');
         break;
      }
   default:
      utils.onWrongInput('/menu')
}
