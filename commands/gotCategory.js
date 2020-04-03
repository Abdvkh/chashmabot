/*CMD
  command: gotCategory
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let curOrder = shop.getInstance('order');
let previousCommand = utils.getPreviousCommand();
let goods = shop.getInstance('goods');
let categoriesArr = Object.keys(goods);
let category = message;
let categExists = categoriesArr.includes(category);

if (categExists){
   let itemsObj = goods[category];
   let itemsArr = Object.keys(itemsObj);

   if (itemsArr) {
      shop.customer.setCurrentCategory(category);
      setPreviousCommand();
      nextCommand();
   } else {
      thisCategoryInDevelopment();
   }
} else {
   runPreviousCommandOrMainMenu();
}

function nextCommand() {
   let itemsKeyboard = utils.makeKeyboard(itemsArr, 'bm');
   Bot.sendKeyboard(itemsKeyboard, category);
   Bot.runCommand('gotItem');
}

function runPreviousCommandOrMainMenu() {
   let commandToRun = {
      name: previousCommand.cmd,
      text: previousCommand.txt,
      keyboard: previousCommand.btns
   }
   utils.runCommandOrMainMenu(commandToRun, category);
}

function setPreviousCommand() {
   let categoryKeyboard = utils.makeKeyboard(categoriesArr, 'bm');
   let previousCommand = {
      cmd: 'gotCategory',
      txt: lang.choice,
      btns: categoryKeyboard
   }
   utils.savePreviousCommand(previousCommand);
}

function thisCategoryInDevelopment() {
   Bot.sendMessage(lang.in_dev);
   let categoriesKeyboard = utils.makeKeyboard(categoriesArr, 'bm');
   let gotCategoryCommand = {
      name: 'gotCategory',
      text: lang.chooseCategory,
      keyboard: categoriesKeyboard
   }
   utils.runCommandOrMainMenu(gotCategoryCommand, 'Назад');
}
