let LIB_PREFIX = 'utils_';

//returns previously saved command details
function getPreviousCommand() {
   return User.getProperty('previousCommand');
}

//on wrong input sends a message and runs given command
function onWrongInput(command) {
   let lang = Libs.Lang.get();
   Bot.sendMessage(lang.wrongInput);
   Bot.runCommand(command);
}

//runs the given command
function runCommandWithKeyboard(command){
   Bot.sendKeyboard(command['btns'], command['txt']);
   Bot.runCommand(command['cmd']);
}

//saves command details to run in go back function
function saveAsPreviousCommandDetails(command){
   User.setProperty('previousCommand', command,'Object');
}

//makes keyboard from an array
//adds 'back' and 'main menu' button regarding to code
function makeKeyboard(buttonsArray, code){
   let lang = Libs.Lang.get();
   let keyboard = '';
   let back = code.indexOf('b') > -1;
   let menu = code.indexOf('m') > -1;

   for(i = 1; i <= buttonsArray.length; i++){
      keyboard += buttonsArray[i-1] + ',' ;

      if(i % 2 == 0){
         keyboard += '\n,';
      }
   }
   //adds back button
   if (back) {keyboard += '\n' + lang.buttons.back + ',';}
   //adds mainmenu button
   if (menu) {keyboard += lang.buttons.mainmenu;}

   return keyboard;
}

//checks whether given password is valid or not
function passwordIsValid(password){
   let pass = Bot.getProperty('password');
   if(password==pass){return true;}
   return false;
}

publish({
   getPreviousCommand: getPreviousCommand,
   runCommandWithKeyboard: runCommandWithKeyboard,
   savePreviousCommand: saveAsPreviousCommandDetails,
   passwordIsValid: passwordIsValid,
   makeKeyboard: makeKeyboard,
   onWrongInput: onWrongInput,
});
