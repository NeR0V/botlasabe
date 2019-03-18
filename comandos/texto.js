const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  
  message.delete().catch(O_o=>{});
  
  let noPerm1 = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Erro", "❌ **|** Você não tem permissão para usar este comando.");
  
  let exemplo = new Discord.RichEmbed()
    .setColor("#363942")
    .addField("Exemplo", "Exemplo de uso: `w!texto texto`");
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(noPerm1).then(msg => msg.delete(5000))
  if(!message.mentions.channels.first() && args.join(" ").toUpperCase() !== "NONE") return  message.channel.send(exemplo).then(msg => msg.delete(5000))
  
  let newText;
  if (args.join(" ").toUpperCase === "NONE") newText = '';
  else newText = args.join(" ").trim();
  
  db.set(`joinMessage_${message.guild.id}`, { texto: newText })
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#8807df")
    .addField("Você atualizou o texto para:", args.join(" ").trim())
    .setFooter(message.guild.name, message.guild.iconURL)
    .setTimestamp();
      
      message.channel.send(embed);
  
}

module.exports.help = {
    name: "texto"
}
