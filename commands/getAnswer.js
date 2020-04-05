/*CMD
  command: getAnswer
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/


switch (message) {
   case wordsLikeButton.agr:
      setAsPreviousCommand();
      runGetCategory();
      break;
   case wordsLikeButton.send:
      setAsPreviousCommand();
      sendOrder();
      break;
   default:
      utils.onWrongInput('getAnswer');
}

function runGetCategory() {
   let goods = shop.getInstance('goods');
   let categoriesArr = Object.getOwnPropertyNames(goods);

   utils.runCommandWithKeyboard({
      cmd: 'getCategory',
      txt: lang.chooseCategory,
      btns: utils.makeKeyboard(categoriesArr, 'bm')
   });
}

function setAsPreviousCommand() {
   let previousCommand = {
      cmd: 'getAnswer',
      txt: lang.moreItems,
      btns: wordsLikeButton.agr + ',' + wordsLikeButton.send + ","+
               "\n" + wordsLikeButton.mainmenu,
   };
   utils.savePreviousCommand(previousCommand);
}

function sendOrder() {
   utils.runCommandWithKeyboard({
      cmd: 'getPaymentType',
      txt: lang.payment.text,
      btns: utils.makeKeyboard(lang.payment.buttons, 'bm')
   });
}
