/*CMD
  command: setLang
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard: Установить язык, \nСоздать организацию, \nСтатистика, Главное меню
  aliases: Установить язык
CMD*/

let uzLang = {
   help: "Savollaringiz bolsa: \nBizning chat: @ChashmaChat\n\nBot yaratuvchisi: @Abduvakhidov",
   basket: {
      added: "Narsangiz savatga solindi!",
      string: "Savat",
      sum: "Umumiy: ",
      empty: "Savat bo`sh"
   },
   bots_stat: 'Botning statistikasi',
   buttons: {
      agr: "Xa",
      back: "Ortga",
      basket: "Savat",
      disagr: "Yoq",
      cancel: "Bekor qilish",
      clean: "Tozalash",
      confirm: "Tasdiqlash",
      mainmenu: "Asosiy menyu",
      lang: "Til",
      send: 'Buyurtma berish',
   },
   categAdded: 'Kategoriya qushildi',
   categExists: "Bunaqa kategoriya mavjud!",
   chooseCategory: "Menyudan kategoriya tanlab oling",
   chooseItem: "Tovarni tanlang",
   deliveryPrice: "Yetkazib berish narxi - ",//COST MUST BE WRITTEN
   enterAmount: 'Nechita olasiz, yozing yoki tanlang',
   enterNumber: "Iltimos telefon raqamingizni kiriting, bu bizga siz bilan aloqaga chiqishga kerak bo'ladi! \nMisol: +998901234567",
   exclamation_error: "'!' belgisi quyilmagan, iltimos to`girlang!",
   greet: "Assalomu aleykum " ,
   in_dev: "Rivojlanishda...",
   itemsToCategAdded: "Kategoriyaga!{narsalar} qushildi",
   location: {
      buttons: ["Mening joylashuvim"],
      text:"Iltimos yetkazib berish manzilini quyidagi rasmda ko`rsatilganidek jo`nating, yoki yozuv shaklida qoldiring!",
   },
   mainMenuButtons: ["Buyurtma berish", "Savatni ko`rish", "Yordam", "Sozlanma"],
   moreItems: "Yana biror nima qo`shmoqchimisiz?",
   numberAccepted: "Raqamingiz muvaffaqiyatli qabul qilindi! Raqam: \n",
   numberIncorrect: "Raqamingizni formatga to'g'irlab jo'nating!",
   orderAccepted: "Rahmat! Sizning buyurtmangiz qabul qilindi! Buyurtmani tasdiqlash uchun operator qo`ng'iroqini kuting. \nBuyurtma raqamingiz: ",
   payment:{
      buttons: ["Naqd","Click","Payme"],
      text: "To`lov turini tanglang!",
   },
   product: {
      name: '*Nomi*',
      price: "*Narxi*",
   },
   sum: 'so`m',
   wrongInput: 'Hato komanda kiritildi, iltimos tog`girlang'
};

let ruLang = {
   help: 'Если у вас есть вопросы: \nНаш чат: @ChashmaChat \n\nБот разработал: @Abduvakhidov',
   basket: {
      added: "Добавлено в корзину!",
      empty: "Корзина пуста",
      string: "Корзина",
      sum: "Итого: ",
   },
   bots_stat: "Статистика по боту",
   buttons: {
      agr: "Да",
      back: "Назад",
      basket: "Корзина",
      cancel: "Отменить",
      clean: "Очистить",
      confirm: "Подтвердить",
      disagr: "Нет",
      lang: "Язык",
      mainmenu: "Главное меню",
      send: 'Заказать'
   },
   categAdded: "Категория добавлена",
   categExists: 'Такая категория уже существует!',
   chooseCategory: "Выберите категорию",
   chooseItem: "Выберите товар",
   deliveryPrice: "Стоимость доставки - ",//COST MUST BE WRITTEN
   enterAmount: 'Наберите сколько вам нужно или выберите из кнопок',
   enterNumber: "Пожалуйстa, наберите ваш номер тлефона, это необходимо для дальнейшей связи с вами! \nПример: `+998901234567`",
   exclamation_error: "Не введен '!' знак между категорией и продуктами, пожалуйста исправьте!",
   greet: "Здравствуйте ",
   in_dev: "В разработке...",
   itemsToCategAdded: "В Категорию!{Добавлены продукты}",
   location: {
      buttons: ["Моё местоположение"],
      text: "Пожалуста отправьте вашу геолокация, как показано на данном рисунке, или просто напишите адрес куда осуществляется доставка!",
   },
   mainMenuButtons: ["Заказать", "Корзина", "Помощь", "Настройки"],
   moreItems: "Еще чего нибудь желаете?",
   numberAccepted: "Ваш номер был успешно получен! \nНомер: ",
   numberIncorrect: "Перепроверьте и отправьте свой номер заново!",
   orderAccepted: "Спасибо! Ваша заявка принята, ждите звонка оператора!\n Номер заказа: ",
   payment: {
      buttons: ["Наличка","Click","Payme"],
      text: "Выберите вид оплаты",
   },
   product: {
      name: '*Наименование*',
      price: "*Цена*",
   },
   sum: 'сум',
   wrongInput: 'Введена неправильная команда',
};

let level = User.getGroup();

if(true  /*level == "Boss"*/){
   Libs.Lang.setup("uz", uzLang);
   Libs.Lang.setup("ru", ruLang);

   Bot.sendMessage("Languages are successfully set!");
   Bot.runCommand("reset");
}
