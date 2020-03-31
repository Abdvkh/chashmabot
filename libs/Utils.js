let LIB_PREFIX = 'utils_';

function goBackOrMainMenu(command, text, keyboards, message){
   let lang = Libs.Lang.get();
   let wordsLikeButton = lang.buttons;

   if(message == wordsLikeButton.mainmenu){
      Bot.runCommand('/menu');
   } else {
      Bot.sendKeyboard(keyboards, text);
      Bot.runCommand(command);
   }
}

function previousCommandDetails(cmd, txt, keys){
   let backKeywords = {
      cmd: cmd,
      txt: txt,
      keys: keys
   };
   User.setProperty('backKeywords', backKeywords,'Object');
}

function makeKeyboard(buttonsArray, code){
   let lang = Libs.Lang.get();
   let keyboard = '';
   let back = code.indexOf('b') > 0;
   let menu = code.indexOf('m') > 0;

   for(i = 1; i <= buttonsArray.length; i++){
      keyboard += buttonsArray[i-1] + ',' ;

      if(i % 2 == 0){
         keyboard += '\n,';
      }
   }
   //adds back button
   if (back) {keyboard += '\n' + lang.translations.back + ',';}
   //adds mainmenu button
   if (menu) {keyboard += lang.translations.mainmenu;}

   return keyboard;
}

function passwordValid(password){
   let pass = Bot.getProperty('password');

   if(password==pass){return true;}
   return false;
}

publish({
   goBackOrMainMenu: goBackOrMainMenu,
   previousCommandDetails: previousCommandDetails,
   passwordIsValid: passwordIsValid,
   makeKeyboard: makeKeyboard,
});
