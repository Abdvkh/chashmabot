/*CMD
  command: *
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

if(request.location){
   Bot.run({
      command: 'succeed',
      options: {location: request.location}
   })
}

if(typeof message === 'string'){
   if (['настройки', 'sozlanma'].includes(message.toLowerCase())){
      Bot.runCommand('settings');
   }
}
