/*CMD
  command: setter
  help:
  need_reply: true
  auto_retry_time:
  folder:
  answer: Enter orgs database item in this formate: `name|structure(JSON)|type`
  keyboard: /menu
  aliases:
CMD*/

let confs = message.split('|');

let name = confs[0];
let structure = confs[1];
let type = confs[2];

Bot.setProperty(name, JSON.parse(structure), type);

Bot.sendMessage(type + ' database named ' + name + ' with '+ structure +' structure successfully set!');
