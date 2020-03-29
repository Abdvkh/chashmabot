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

let lang = Libs.Lang.get();
let mLi = Libs.myLib;

let categories = Bot.getProperty('goods');
let categoriesArr = Object.keys(categories);

let user_info = User.getProperty('user_info');

let mainmenu_but = mLi.mKeys(lang.mainmenu_but, 'm');

let number = message ;
if(request['contact'] !== null){
   number = request.contact.phone_number;
}

if (number > 998000000000 && number < 999000000000){
   user_info['user_number'] = number;

   User.setProperty("user_info", user_info, "Object");

   keyboard = mLi.mKeys(categoriesArr, 'bm');

   mLi.bKeys('number', lang.number, lang.translations.mainmenu);

   Bot.sendMessage(lang.success + '\n*' + number + '*');
   Bot.sendKeyboard(keyboard, lang.choice);
   Bot.run({
      command:'type',
   });
} else {
   if(message == lang.translations.mainmenu){
      mLi.back('/menu', lang.translations.mainmenu, mainmenu_but, message);
   } else {
      Bot.sendMessage(lang.error);
      Bot.sendMessage(lang.number);
      Bot.runCommand("number");
   }
}
