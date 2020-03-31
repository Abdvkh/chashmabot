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

function saveBasketDetails(){
   let curOrder = User.getProperty('curOrder');
   if(curOrder['msg'] == ''){ curOrder['msg'] =  'Ваш заказ:' }

   for (var i = 0; i < curOrder['amount'].length; i++){
      curOrder['msg'] += '\n*' + curOrder['purchases'][i] + '*\n' + '\n' + curOrder['amount'][i] + 'x' + curOrder['prices'][i] + ' = ' + curOrder['amount'][i] * curOrder['prices'][i];
      curOrder['sum'] += curOrder['amount'][i] * curOrder['price'][i];
   }
   User.setProperty('curOrder', curOrder, 'Object');
}

function emptyBasket(){
   let curOrder = User.getProperty('curOrder');
   let curOrder = {
       has_things: false,
       curCateg: '',
       purchases: [],
       amount: [],
       prices: [],
       location: '',
       msg: '',
       sum: 0,
   };
   User.setProperty( 'curOrder', curOrder, 'Object' );
}

publish({
   back: backFunction,
   bKeys: backKeys,
   emptyBask: emptyBasket,
   pValid: passwordValid,
   productsToObj: productsToObj,
   saveBasketDetails: saveBasketDetails,
   mKeys: makeKeyboard
});
