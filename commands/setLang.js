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
   amount: 'Nechita olasiz, yozing yoki tanlang',
   basket: {
      added: "Narsangiz savatga solindi!",
      string: "Savat",
      sum: "Ja`mida: ",
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
   choice: "Menyudan kategoriya tanlab oling",
   choose: "Tovarni tanlang",
   delivery: "Yetkazib berish narxi - ",//COST MUST BE WRITTEN
   numberIncorrect: "Raqamingizni formatga to'g'irlab jo'nating!",
   exclamation_error: "'!' belgisi quyilmagan, iltimos to`girlang!",
   greet: "Assalomu aleykum " ,
   in_dev: "Rivojlanishda...",
   itemsToCategAdded: "Kategoriyaga!{narsalar} qushildi",
   location: {
      button: "Mening joylashuvim",
      text:"Iltimos yetkazib berish manzilini quyidagi rasmda ko`rsatilganidek jo`nating, yoki yozuv shaklida qoldiring!",
   },
   mainmenu_but: ["Buyurtma berish", "Savatni ko`rish", "Mening profilim", "Yordam", "Sozlanma"],
   enterNumber: "Iltimos telefon raqamingizni kiriting, bu bizga siz bilan aloqaga chiqishga kerak bo'ladi! \nMisol: +998901234567",
   payment:{
      text: "To`lov turini tanglang!",
      but: "Naqd,\nClick,Payme"
   },
   product: {
      name: '*Nomi*',
      price: "*Narxi*",
   },
   numberAccepted: "Raqamingiz muvaffaqiyatli qabul qilindi! Raqam: \n",
   super_admin: {
      text: "Adminkaga xush kelibsiz",
      buttons: ["Til urnatish", "Korxona yaratish", "Statistika"]
   },
   orderAccepted: "Rahmat! Sizning buyurtmangiz qabul qilindi! Buyurtmani tasdiqlash uchun operator qo`ng'iroqini kuting. \nBuyurtma raqamingiz: ",
   again: "Yana biror nima qo`shmoqchimisiz?",
   wrongInput: 'Hato komanda kiritildi, iltimos tog`girlang'
};

let ruLang = {
   again: "Еще чего нибудь желаете?",
   amount: 'Наберите сколько вам нужно или выберите из кнопок',
   basket: {
      added: "Добавлено в корзину!",
      string: "Корзина",
      sum: "Итого: ",
      empty: "Корзина пуста"
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
   choice: "Выберите категорию",
   choose: "Выберите товар",
   delivery: "Стоимость доставки - ",//COST MUST BE WRITTEN
   numberIncorrect: "Перепроверьте и отправьте свой номер заново!",
   exclamation_error: "Не введен '!' знак между категорией и продуктами, пожалуйста исправьте!",
   greet: "Здравствуйте ",
   in_dev: "В разработке...",
   itemsToCategAdded: "В Категорию!{Добавлены продукты}",
   location: {
      text: "Пожалуста отправьте вашу геолокация, как показано на данном рисунке, или просто напишите адрес куда осуществляется доставка!",
      button: "Моё местоположение"
   },
   mainmenu_but: ["Заказать", "Корзина", "Мой профиль", "Помощь", "Настройки"],
   enterNumber: "Пожалуйстa, наберите ваш номер тлефона, это необходимо для дальнейшей связи с вами! \nПример: `+998901234567`",
   payment: {
      but: "Наличка,\nClick,Payme",
      text: "Выберите вид оплаты",
   },
   product: {
      name: '*Наименование*',
      price: "*Цена*",
   },
   numberAccepted: "Ваш номер был успешно получен! \nНомер: ",
   orderAccepted: "Спасибо! Ваша заявка принята, ждите звонка оператора!\n Номер заказа: ",
   wrongInput: 'Ввеведена неправильная команда',
};

let level = User.getGroup();

if(true  /*level == "Boss"*/){
   Libs.Lang.setup("uz", uzLang);
   Libs.Lang.setup("ru", ruLang);

   Bot.sendMessage("Languages are successfully set!");
   Bot.runCommand("admin");
}
