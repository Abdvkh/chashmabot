let LIB_PREFIX = 'shop_';

function orderIsEmpty(){
   let order = User.getProperty('order');
   return order == undefined || order['products'].length == 0;
}

function setup() {
   let order = User.getProperty('order');
   let customer = User.getProperty('customerInfo');
   if (order == undefined) { reset('order') }
   if (user == undefined) { reset('customer') }
}

function setCurrentCategory(category) {
   let order = getInstance('order')
   order['currentCategory'] = category;
   User.setProperty('order', order, 'Object');
}

function reset(instance) {
   switch (instance) {
      case 'order':
         let order = {
             products: [],
             location: '',
         };
         User.setProperty('order', order, 'Object');
         break;
      case 'goods':
         let goods = {};
         Bot.setProperty('goods', goods, 'Object');
         break;
      case 'customer':
         let userInfo = {
            name: user.first_name,
            id: user.telegramid,
            lang: Libs.Lang.getCurLang,
            phoneNumber: 0,
            ordersAmount: 0
         };
         User.setProperty('customerInfo', userInfo, 'Object');
         break;
      default:
         Bot.sendMessage('Error happened');
   }
}

function getInstance(instance) {
   switch (instance) {
      case 'order':
         let order = User.getProperty('order');
         if(order == undefined){
            reset('order');
            return User.getProperty('order');
         }
         return order;
         break;
      case 'goods':
         let goods = Bot.getProperty('goods');
         if(goods == undefined){
            reset('goods');
            return Bot.getProperty('goods');
         }
         return goods;
         break;
      case 'customer':
         let customerInfo = User.getProperty('customerInfo');
         if(customerInfo == undefined){
            reset('customer');
            return Bot.getProperty('customerInfo');
         }
         return customerInfo;
         break;
      default:
         Bot.sendMessage('Error happened');
   }
}

function setPhoneNumber(number) {
   customer = getInstance('customer');
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

function getOrderDetails(){
   let lang = Libs.Lang.get();
   let order = getInstance('order');
   let orderDetails = lang.basket.string + ':';
   let sum = 0;

   if (order['products']) {
      for (i = 0; i < order['products'].length; i++){
         let product = order['products'][i];
         orderDetails += '\n\n*' + product['name'] + '* | ' + product['count'] + ' x ' + product['price'] + ' = ' + product['count'] * product['price'];
         sum += product['amount'] * product['price'];
      }
      return orderDetails += '\n' + lang.basket.sum + sum
   }
}

publish({
   customer: {
      getOrderDetails: getOrderDetails,
      orderIsEmpty: orderIsEmpty,
      phoneNumber: setPhoneNumber,
      setCurrentCategory: setCurrentCategory,
      setup: setup,
   },
   getInstance: getInstance,
   reset: reset,
   productsToObj: productsToObj,
});
