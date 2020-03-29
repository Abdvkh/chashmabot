/*CMD
  command: /start
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer: 🇷🇺Выберите язык | 🇺🇿Til tanlang
  keyboard: 🇷🇺Русский, 🇺🇿O'zbekcha
  aliases:
CMD*/

let lang = Libs.Lang.get();
let tr = lang.translations;

let user_info = {
    user_name: user.first_name,
    user_id: user.id,
    user_number: 0,
    orders: 0
};
let curOrder = {
    has_things: false,
    organization: {
      name: '',
      type: ''
   },
    purchases: [],
    amount: [],
    prices: [],
    location: '',
    msg: '',
    sum: 0,
};

User.setProperty('user_info', user_info, 'Object');
User.setProperty( 'curOrder', curOrder, 'Object' );

switch(message){
  case "🇷🇺Русский":
    Libs.Lang.user.setLang("ru");
    Bot.sendMessage(lang.hello + user.first_name + "*!");
    Bot.runCommand("/menu");
    break;
  case "🇺🇿O'zbekcha":
    Libs.Lang.user.setLang("uz");
    Bot.sendMessage(lang.hello + user.first_name + "*!");
    Bot.runCommand("/menu");
    break;
  default:
    Bot.sendMessage("This is not a language to choose. Do it again.");
    Bot.runCommand('/start');
}
