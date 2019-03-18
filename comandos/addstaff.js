const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
            let exemplo = new Discord.RichEmbed()
            .setColor("#363942")
            .addField("Exemplo", "Exemplo de uso: `w!addstaff <usuário> <cargo>`");

  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send(exemplo).then(msg => msg.delete(10000)) + message.delete().catch(O_o=>{}); ;
  let reason = args.join(" ").slice(22);
  if(!reason) return message.channel.send(exemplo).then(msg => msg.delete(10000)) + message.delete().catch(O_o=>{}); ;

  let staffEmbed = new Discord.RichEmbed()
  .setColor(`#8807df`)
  .setThumbnail(wUser.user.displayAvatarURL)
  .addField("Novato", `${message.author} adicionou ${wUser} ao cargo de ${reason}.`)
  .setTimestamp(message.createdAt)
  .setFooter(`${message.author.username} adicionou ${wUser.displayName} a staff.`, message.author.avatarURL);

  let staffchannel = message.guild.channels.find(`name`, "📝║movimentação-staff");
  if(!staffchannel) return message.channel.send ("Nao foi possivel encontrar esta sala!")

  message.delete().catch(O_o=>{});
  staffchannel.send(staffEmbed)

  return;

}

module.exports.help = {
    name: "addstaff"
}
