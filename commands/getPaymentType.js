/*CMD
  command: getPaymentType
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

if (lang.payment.buttons.includes(message)) {
   shop.customer.setOrderPaymentType('Click/Payme');
   Bot.runCommand('getLocation');
} else {
   Bot.runCommand('getPaymentType');
}
