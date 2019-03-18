const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
            let exemplo = new Discord.RichEmbed()
            .setColor("#363942")
            .addField("Exemplo", "Exemplo de uso: `w!limpar <nº>`");

let deleted = new Discord.RichEmbed()
.setColor("#00ff00")
.addField("Sucesso", `✅ **|** **${args[0]} mensagens foram apagados.**`);

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(exemplo).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{});
  if(!args[0]) return message.channel.send(exemplo).then(msg => msg.delete(10000)) + message.delete().catch(O_o=>{});
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(deleted).then(msg => msg.delete(10000));
});

}

module.exports.help = {
  name: "limpar"
}
