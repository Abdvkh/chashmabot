/*CMD
  command: giveAdmin
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer: Админ шумоба дода шуд!
  keyboard:
  aliases: Админа манба те
CMD*/

Bot.setProperty('admin', request.chat.id, 'Number');
