/*CMD
  command: number
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let lang = Libs.Lang.get();\
let wordsLikeButton = lang.buttons;

let utils = Libs.Utils;
let shop = Libs.Shop;

let goods = shop.getGoodsInfo();
let categoriesArr = Object.keys(goods);
if(!categoriesArr){
   let message = "Main menu";
}

function nextCommand(lang, number, categoriesArr){
   let categoriesKeyboard = utils.mKeys(categoriesArr, 'bm');
   Bot.sendMessage(lang.numberAccepted + '\n*' + number + '*');
   Bot.sendKeyboard(categoriesKeyboard, lang.chooseCategory);
   Bot.runCommand('category');
}

function numberHandler(message, request) {
   if(request['contact'] !== null){
      return request['contact']['phone_number'];
   }
   return message;
}

function numberEnteredWrongly(lang) {
   Bot.sendMessage(lang.numberIncorrect);
   Bot.sendMessage(lang.enterNumber);
   Bot.runCommand("number");
}

let number = numberHandler(message, request);
let numberIsValid =number > 998000000000 && number < 999000000000;
let messageIsMenu = message == wordsLikeButton.mainmenu

if (numberIsValid){
   utils.previousCommandDetails(
      'number',
      lang.number,
      wordsLikeButton.mainmenu
   );
   shop.customer.phoneNumber(number);
   nextCommand(lang, number, categoriesArr);
} else {
   if(messageIsMenu){
      let mainmenuKeyb = mLi.mKeys(lang.mainmenu_but, 'm');
      utils.goBackOrMainMenu('/menu', wordsLikeButton.mainmenu, mainmenuKeyb, message);
   } else {
      numberEnteredWrongly(lang);
   }
}
