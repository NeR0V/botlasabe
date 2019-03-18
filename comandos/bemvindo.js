const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  
  let noPerm1 = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Erro", "❌ **|** Você não tem permissão para usar este comando.");
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(noPerm1).then(msg => msg.delete(5000))
  
  let channel
  let joinText
  
  db.get(`messageChannel_${message.guild.id}.canal`)
    
    if (!message.guild.channels.get(`messageChannel_${message.guild.id}.canal`.text)) channel = "*Nenhum canal selecionado.*"
    else channel = message.guild.channels.get(`messageChannel_${message.guild.id}.canal`.text)
    
    db.get(`joinMessage_${message.guild.id}.texto`)
    
    if (!`joinMessage_${message.guild.id}`.text) joinText = "*Nenhuma mensagem selecionada.*"
    else joinText = `joinMessage_${message.guild.id}`.text
      
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Configurações da mensagem de bem-vindo.`)
    .setColor("#8807df")
    .addField("**Chat Ativo:**", channel)
    .addField("**Mensagem Selecionada:**", joinText)
    .setFooter(message.guild.name, message.guild.iconURL)
    .setTimestamp();
      
      message.channel.send(embed);
  
}

module.exports.help = {
    name: "bemvindo"
}
