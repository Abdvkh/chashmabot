/*CMD
  command: getPhoneNumber
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let goods = shop.getInstance('goods');
let categoriesArr = Object.keys(goods);

if(!categoriesArr){
   Bot.sendMessage(lang.noCategory);
   return Bot.runCommand('/menu');
}

let phoneNumber = getPhoneNumberHandler();
let phoneNumberIsValid = phoneNumber > 998000000000 && phoneNumber < 999000000000;

if (phoneNumberIsValid){
   utils.savePreviousCommand({
      cmd: 'getPhoneNumber',
      txt: lang.number,
      btns: wordsLikeButton.mainmenu
   });
   shop.customer.phoneNumber(phoneNumber);
   nextCommand();//getCategory
} else {
   getPhoneNumberEnteredWrongly();
}

function nextCommand(){
   Bot.sendMessage(lang.numberAccepted + '\n*' + phoneNumber + '*');
   utils.runCommandWithKeyboard({
      btns: utils.makeKeyboard(categoriesArr, 'bm'),
      txt: lang.chooseCategory,
      cmd: 'getCategory'
   });
}

function getPhoneNumberHandler() {
   if(request['contact'] !== null){
      return request['contact']['phone_number'];
   }
   return message;
}

function getPhoneNumberEnteredWrongly() {
   Bot.sendMessage(lang.numberIncorrect);
   Bot.sendMessage(lang.enterNumber);
   Bot.runCommand("getPhoneNumber");
}
