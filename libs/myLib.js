let LIB_PREFIX = 'my_lib_';

function backFunction(command, text, keyboards, message){
   let lang = Libs.Lang.get();
   let trn = lang.translations;

   if(message == trn.mainmenu){
      Bot.runCommand('/menu');
   } else {
      Bot.sendKeyboard(keyboards, text);
      Bot.runCommand(command);
   }
}

function backKeys(cmd, txt, keys){
   let backKeys = {
      cmd: cmd,
      txt: txt,
      keys: keys
   };
   User.setProperty('backKeys', backKeys,'Object');
}

function makeKeyboard(array, code){
   let keyboard = '';
   let lang = Libs.Lang.get();
   let b = code.indexOf('b');
   let m = code.indexOf('m');

   for(i = 1; i <= array.length; i++){
      if (array.length==1) {
         keyboard += array[i-1];
      } else {
         keyboard += array[i-1] + ',' ;
      }
      if(i % 2 == 0){
         keyboard += '\n,';
      }
   }

   if (b > -1) {keyboard += '\n' + lang.translations.back + ',';}
   if (m > -1) {keyboard += lang.translations.mainmenu;}

   return keyboard;
}

function returnBasket(){
   let details = User.getProperty('curOrder');

   if(details.msg == ''){ details.msg =  'Ваш заказ из кафе *Everest Burger*:' }
   if(details.sum == 0){ details.sum = 0 }

   for (var i = 0; i < details.purchases.length; i++){
      details.msg += '\n*' + details.purchases[i] + '*\n' + '\n' + details.amount[i] + 'x' + details.price[i] + ' = ' + details.amount[i] * details.price[i];
      details.sum += details.amount[i] * details.price[i];
   }

   User.setProperty('curOrder', details, 'Object');
}

function passwordValid(password){
   let pass = Bot.getProperty('password');

   if(password==pass){return true;}
   return false;
}

function productsToObj(productsString) {
   let productsArr = productsString.split('!');
   let productsObj = new Object();

   for(i=1; i<=productsArr.length; i++){
      if(i%2 == 0){
         productsObj[productsArr[i-2]] = JSON.parse(productsArr[i-1]);
      }
   }
   return productsObj;
}

publish({
   back: backFunction,
   bKeys: backKeys,
   pValid: passwordValid,
   productsToObj: productsToObj,
   rBasket: returnBasket,
   mKeys: makeKeyboard
});
