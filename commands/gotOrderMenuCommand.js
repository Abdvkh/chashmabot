/*CMD
  command: gotOrderMenuCommand
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let trn = lang.translations;

 switch (message) {
    case lang.trn.mainmenu:
       Bot.runCommand('/menu');
       break;
    default:

 }
