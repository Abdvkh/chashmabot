/*CMD
  command: addprods
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer: Введите пароль
  keyboard: Главное меню
  aliases: Продукто
CMD*/

let password = 'chashma';

if (message == password) {
   let msg = "Для доваления продуктов в бот используйте данный формат: \n\n" +
             '`{"Категория1": { "Продукт1": {"price": 2000, "photo": "<url>"}}, "Категория2": { "Продукт2": {"price": 3000, "photo": "<url>"}, "Продукт3": {"price": 4000, "photo": "<url>"}}}`';
   Bot.sendMessage(msg);
   Bot.setProperty('admin', user.telegramid, 'Mumber');
   Bot.runCommand('adding');
} else {
   Bot.sendMessage("Пароль введен не правильно");
   Bot.runCommand('/menu');
}
