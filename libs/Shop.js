let LIB_PREFIX = 'shop_';

function basketIsEmpty(){
   let order = User.getProperty('order');

   if (order['products'].length == 0 || order == undefined) {
      return true
   } else {
      return false;
   }
}

function emptyBasket(){
   let order = {
       products: [],
       location: '',
   };
   User.setProperty('order', order, 'Object');
}

function emptyGoods(){
   let goods = {};
   Bot.setProperty('goods', goods, 'Object');
}

function emptyCutsomer(){
   let userInfo = {
      name: user.first_name,
      id: user.telegramid,
      lang: Libs.Lang.getCurLang,
      phoneNumber: 0,
      ordersAmount: 0
   };

   User.setProperty('customerInfo', userInfo, 'Object');
}

function getOrderInfo(){
   let order = User.getProperty('order');
   if(order == undefined){
      emptyBasket();
      return User.getProperty('order');
   }
   return order;
}

function getGoodsInfo(){
   let goods = Bot.getProperty('goods');
   if(goods == undefined){
      emptyGoods();
      return Bot.getProperty('goods');
   }
   return goods;
}

function getCustomerInfo(){
   let customerInfo = User.getProperty('customerInfo');
   if(customerInfo == undefined){
      emptyCutsomer();
      return Bot.getProperty('customerInfo');
   }
   return customerInfo;
}

function setPhoneNumber(number) {
   customer = getCustomerInfo();
   customer['phoneNumber'] = number;
   User.setProperty('customerInfo', customer, 'Object');
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

function returnBasketDetails(){
   let lang = Libs.Lang.get();
   let order = User.getProperty('order');
   let basketDeatils = lang.basket.string + ':';
   let sum = 0;

   if (order['products']) {
      for (i = 0; i < order['products'].length; i++){
         let product = order['products'][i];
         basketDeatils += '\n\n*' + product['name'] + '* | ' + product['count'] + ' x ' + product['price'] + ' = ' + product['count'] * product['price'];
         sum += product['amount'] * product['price'];
      }
      basketDeatils += '\n' + lang.basket.sum + sum
   }
}

function setPhoneNumber(number){

}

publish({
   customer: {
      emptyCutsomer: emptyCutsomer,
      phoneNumber: setPhoneNumber,
   },
   basketIsEmpty: basketIsEmpty,
   emptyBasket: emptyBasket,
   productsToObj: productsToObj,
   returnBasketDetails: returnBasketDetails,
});
