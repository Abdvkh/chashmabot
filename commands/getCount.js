/*CMD
  command: getCount
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let count = parseInt(message);

if(count > 0){
   setAsPreviousCommand();
   addProductToOrder();
   sendCurOrderInfo();
   nextCommand();
} else {
   utils.onWrongInput('getCount');
}

function addProductToOrder() {
   let currentProduct = User.getProperty('currentChosenProduct');
   currentProduct['count'] = count;
   shop.customer.addToOrder(currentProduct);
}

function nextCommand() {
   utils.runCommandWithKeyboard({
      cmd: 'getAnswer',
      btns: wordsLikeButton.agr + ',' + lang.order + ","+
               "\n" + wordsLikeButton.mainmenu,
      txt: lang.moreItems
   });
}

function sendCurOrderInfo() {
   let msg = shop.customer.getOrderDetails();
   Bot.sendMessage(msg);
}

function setAsPreviousCommand() {
   let previousCommand = {
      cmd: 'getCount',
      txt: lang.enterAmount,
      btns: '1,2,3,\n4,5,6,\n7,8,9,\n' + wordsLikeButton.back + ',' + wordsLikeButton.mainmenu
   };
   utils.savePreviousCommand(previousCommand);
}
