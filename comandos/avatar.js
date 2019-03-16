const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

  let target = message.mentions.users.first() || message.author;

  var newAvatar = target.avatarURL

  if(newAvatar.includes(".gif")){

    let embed2 = new Discord.RichEmbed()
    .setColor("#363942")
    .setTitle(`**${target.tag}**`)
    .setDescription(`**[Download](${target.displayAvatarURL}?size=512) do gif**`)
    .setImage(`${target.displayAvatarURL}?size=512`)
    .setFooter(`Comando por: ${message.author.username}`, message.author.displayAvatarURL)
    .setTimestamp();
    message.delete().catch(O_o=>{});
    message.channel.send(embed2);

  }else {

  let embed = new Discord.RichEmbed()
  .setColor("#363942")
  .setTitle(`**${target.tag}**`)
  .setDescription(`**[Download](${target.displayAvatarURL}) da imagem**`)
  .setImage(target.displayAvatarURL)
  .setFooter(`Comando por: ${message.author.username}`, message.author.displayAvatarURL)
  .setTimestamp();
  message.delete().catch(O_o=>{});
  message.channel.send(embed);

    }

  }

module.exports.help = {
    name: "avatar"
}
