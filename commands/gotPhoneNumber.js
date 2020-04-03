/*CMD
  command: gotPhoneNumber
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

// TODO: change command name

let goods = shop.getInstance('goods');
let categoriesArr = Object.keys(goods);
if(!categoriesArr){
   let message = "Main menu";
}

let gottenPhoneNumber = gottenPhoneNumberHandler();
let gottenPhoneNumberIsValid = gottenPhoneNumber > 998000000000 && gottenPhoneNumber < 999000000000;
let messageIsMenu = message == wordsLikeButton.mainmenu

if (gottenPhoneNumberIsValid){
   utils.savePreviousCommand({
      cmd: 'gotPhoneNumber',
      txt: lang.number,
      btns: wordsLikeButton.mainmenu
   });
   shop.customer.phoneNumber(gottenPhoneNumber);
   nextCommand();
} else {
   if(messageIsMenu){
      let mainMenuButtons = utils.makeKeyboard(lang.mainMenuButtons, 'm');
      let commandToRun = {
         cmd:'/menu',
         txt: wordsLikeButton.mainmenu,
         btns: mainMenuButtons
      };
      utils.runCommandOrMainMenu(commandToRun, message);
   } else {
      gottenPhoneNumberEnteredWrongly();
   }
}

function nextCommand(){
   let categoriesKeyboard = utils.makeKeyboard(categoriesArr, 'bm');
   Bot.sendMessage(lang.numberAccepted + '\n*' + gottenPhoneNumber + '*');
   Bot.sendKeyboard(categoriesKeyboard, lang.chooseCategory);
   Bot.runCommand('gotCategory');
}

function gottenPhoneNumberHandler() {
   if(request['contact'] !== null){
      return request['contact']['phone_number'];
   }
   return message;
}

function gottenPhoneNumberEnteredWrongly() {
   Bot.sendMessage(lang.numberIncorrect);
   Bot.sendMessage(lang.enterNumber);
   Bot.runCommand("gotPhoneNumber");
}
