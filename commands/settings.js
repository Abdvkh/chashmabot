/*CMD
  command: settings
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer: Настройки
  keyboard: Язык, Til, \nГлавное меню
  aliases: Настройки
CMD*/

if (message == wordsLikeButton.lang) {
   Bot.runCommand('/start')
}
