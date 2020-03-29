/*CMD
  command: menu
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let lang = Libs.Lang.get();
let tr = lang.translations;

let mLi = Libs.myLib;

let cur_order = User.getProperty('curOrder');
let level = User.getGroup();

let mainmenu_but = mLi.mKeys(lang.mainmenu_but);

let basket_keys = tr.clean + ',' + lang.order + '\n,' + tr.mainmenu ;
let basket_msg = lang.basketlist + cur_order.msg;

switch (message) {
   case lang.mainmenu_but[0]:
      Bot.sendKeyboard( tr.mainmenu , lang.number );
      Bot.run({
         command: 'number',
      });
      break;
   case lang.mainmenu_but[1]:
      if (cur_order.has_things){
         Bot.sendKeyboard(basket_keys, lang.basketlist);
         Bot.runCommand('basket');
      } else {
         Bot.sendMessage("Basket is empty");
         Bot.run({
            command: 'menu',
         });
      }
      break;
   case lang.mainmenu_but[2]:
      Bot.runCommand('profile');
      break;
   case lang.mainmenu_but[3]:
      Bot.runCommand('/help');
      break;
   case lang.mainmenu_but[4]:
      Bot.sendKeyboard(tr.lang + ',' + tr.mainmenu, lang.mainmenu_but[4])
      Bot.runCommand('settings');
      break;
   case '/admin':
      if(level){
         Bot.run('/admin');
         break;
      }
    default:
      Bot.sendMessage('There is no such command')
      Bot.sendKeyboard(mainmenu_but , tr.mainmenu);
      Bot.run({
         command: 'menu',
      });
}
