/*CMD
  command: basket
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let lang = Libs.Lang.get();
let trn = lang.translations;

 switch (message) {
    case lang.trn.mainmenu:
       Bot.runCommand('/menu');
       break;
    default:

 }
