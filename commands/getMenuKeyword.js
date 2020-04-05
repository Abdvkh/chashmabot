/*CMD
  command: getMenuKeyword
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let level = User.getGroup();
let passedMenuKeyword = message;

switch (passedMenuKeyword) {
   case lang.mainMenuButtons[0]://Заказать
      runGetPhoneNumber();
      break;
   case lang.mainMenuButtons[1]://Корзина
      showOrderInfoOrEmpty();
      break;
   case lang.mainMenuButtons[2]://Профиль
      Bot.runCommand('/profile');
      break;
   case lang.mainMenuButtons[3]://Помощь
      Bot.runCommand('/help');
      break;
   case lang.mainMenuButtons[4]://Настройки
      showUserSettings();
      break;
   case '/admin':
      if(level){
         Bot.runCommand('/admin');
         break;
      }
   default:
      utils.onWrongInput('/menu');
}

function runGetPhoneNumber(){
   utils.runCommandWithKeyboard({
      btns: wordsLikeButton.mainmenu,
      txt: lang.enterNumber,
      cmd: 'getPhoneNumber'
   });
}

function showOrderOfUser() {
   utils.runCommandWithKeyboard({
      btns: wordsLikeButton.clean + ',' + wordsLikeButton.send + '\n,' + wordsLikeButton.mainmenu,
      txt: shop.customer.getOrderDetails(),
      cmd:'getOrderMenuCommand'
   });
}

function showOrderInfoOrEmpty() {
   if (!shop.basketIsEmpty()){
      return showOrderOfUser();
   }
   Bot.sendMessage(lang.basket.empty);
   Bot.runCommand('getMenuKeyword');
}

function showUserSettings() {
   utils.runCommandWithKeyboard({
      btns: wordsLikeButton.lang + ',' + wordsLikeButton.mainmenu,
      txt: lang.mainMenuButtons[4],
      cmd: 'settings'
   });
}
