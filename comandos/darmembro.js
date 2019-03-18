const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

  let noRole = new Discord.RichEmbed()
  .setColor("#ff0000")
  .addField("Erro", ":warning: **|** Cargo não encontrado.");

  let membro = message.guild.roles.find('name', 'Membro');

  message.delete().catch(O_o=>{});
  if(!membro) return message.channel.send(noRole);

  let sucesso = new Discord.RichEmbed()
  .setColor("#ff0000")
  .addField("Sucesso", `✅ **|** Você adicionou o cargo ${membro.name} para todos os usuários.`);

  message.guild.members.filter(m => !m.user.bot).map(async member => await member.addRole(membro));
  message.channel.send(sucesso).then(msg => msg.delete(5000));

}

module.exports.help = {
    name: "darmembro"
}
