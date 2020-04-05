/*CMD
  command: getCategory
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let goods = shop.getInstance('goods');
let categoriesArr = Object.keys(goods);
let category = message;
let categExists = categoriesArr.includes(category);
let itemsObj = goods[category];
let itemsArr = Object.keys(itemsObj);

if (categExists){
   if (itemsArr) {
      shop.customer.setCurrentCategory(category);
      setPreviousCommand();
      nextCommand(itemsArr);
   } else {
      thisCategoryInDevelopment();
   }
}

function nextCommand(itemsArr) {
   utils.runCommandWithKeyboard({
      btns: utils.makeKeyboard(itemsArr, 'bm'),
      txt: category,
      cmd: 'getItem'
   });
}

function setPreviousCommand() {
   let categoryKeyboard = utils.makeKeyboard(categoriesArr, 'bm');
   let previousCommand = {
      cmd: 'getCategory',
      txt: lang.chooseCategory,
      btns: categoryKeyboard
   };
   utils.savePreviousCommand(previousCommand);
}

function thisCategoryInDevelopment() {
   Bot.sendMessage(lang.in_dev);
   let getCategoryCommand = {
      cmd: 'getCategory',
      txt: lang.chooseCategory,
      btns: utils.makeKeyboard(categoriesArr, 'bm')
   };
   utils.runCommandWithKeyboard(getCategoryCommand);
}
