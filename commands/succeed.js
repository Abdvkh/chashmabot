/*CMD
  command: succeed
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let lang = Libs.Lang.get();
let mLi = Libs.myLib;
let curOrder = User.getProperty('curOrder');
let org = mLi.get_org_by_name(curOrder['organization']['name']);
let user = User.getProperty('user_info');
let mainmenuButs = mLi.mKeys(lang.mainmenu_but);

user_info['orders'] += 1;
curOrder.location = options.location.longitude + ',' + options.location.latitude;
User.setProperty('curOrder', curOrder,'Object');

let keyboards = [
   {text: 'Принять', command:'order a|' + user.telegramid},
   {text: 'Отказать', command:'order r|' + user.telegramid},
];
let request = "Заявка от:\n" + "Пользователя: [" + user.user_name + "](tg://user?id=" + user.user_id + ")\n" +
               "Телефон: " + user.user_number + '\n\nДетали заказа:\n' + curOrder['msg'] +
               "\nНа сумму: " + curOrder['sum'];

Bot.sendInlineKeyboardToChatWithId(org['admin'], keyboards, request);
Bot.sendMessage(lang.succeed);
Bot.runCommand('/menu');
