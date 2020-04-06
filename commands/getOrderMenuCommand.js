/*CMD
  command: getOrderMenuCommand
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

switch (message) {
   case wordsLikeButton.clear:
      shop.reset('order');
      Bot.sendMessage(lang.basket.empty);
      Bot.runCommand('/menu');
      break;
   case wordsLikeButton.send:
      utils.runCommandWithKeyboard({
         cmd: 'getPaymentType',
         txt: lang.payment.text,
         btns: utils.makeKeyboard(lang.payment.buttons, 'm')
      });
      break;
   case wordsLikeButton.mainmenu:
      Bot.runCommand('/menu');
      break;
   default:
      utils.onWrongInput('getOrderMenuCommand');
}
