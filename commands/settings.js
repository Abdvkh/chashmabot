/*CMD
  command: settings
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard: язык, til
  aliases: Настройки
CMD*/

if (message == wordsLikeButton.lang) {
   Bot.runCommand('/start')
}
