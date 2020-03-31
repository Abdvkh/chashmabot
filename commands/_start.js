/*CMD
  command: /start
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer: 🇷🇺Выберите язык | 🇺🇿Til tanlang
  keyboard: 🇷🇺Русский, 🇺🇿O'zbekcha
  aliases:
CMD*/

let shop = Libs.Shop;
let lang = Libs.Lang.get();

function setLangAndRunMenu(code){
   Libs.Lang.user.setLang(code);
   Bot.sendMessage(lang.greet + user.first_name);
   Bot.runCommand("/menu");
}
let order = User.getProperty('order');

if (order == undefined) {
   shop.emptyBasket();
}
let customer = User.getProperty('customerInfo');

if (user == undefined) {
   shop.customer.emptyCutsomer();
}

switch(message){
   case "🇷🇺Русский":
      setLangAndRunMenu('ru');
      break;
   case "🇺🇿O'zbekcha":
      setLangAndRunMenu('uz');
      break;
   default:
      Bot.sendMessage(lang.wrongInput);
      Bot.runCommand('/start');
}
