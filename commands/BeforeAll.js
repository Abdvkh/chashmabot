/*CMD
  command: @
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let lang = Libs.Lang.get();
let shop = Libs.Shop;
let utils = Libs.Utils;
let wordsLikeButton = lang.buttons;

if (message == wordsLikeButton.mainmenu) {
   return Bot.runCommand('/menu');
}

if (message == wordsLikeButton.back) {
   let previousCommand = utils.getPreviousCommand();
   let commandToRun = {
      cmd: previousCommand.cmd,
      txt: previousCommand.txt,
      btns: previousCommand.btns
   };
   return utils.runCommandWithKeyboard(commandToRun);
}
