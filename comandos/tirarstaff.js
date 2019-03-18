const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let noPers = new Discord.RichEmbed()
  .setColor("#ff0000")
  .addField("Tirar staff", "Marque o usuário que será tirado.");

  let noCargo = new Discord.RichEmbed()
  .setColor("#ff0000")
  .addField("Tirar Staff", "Coloque o motivo.");

  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send(noPers).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{}); ;
  let reason = args.join(" ").slice(22);
  if(!reason) return message.channel.send(noCargo).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{}); ;

  let staffEmbed = new Discord.RichEmbed()
  .setColor(`#8807df`)
  .setThumbnail(wUser.user.displayAvatarURL)
  .addField("Tchau amigo...", `${message.author} tirou ${wUser} da staff por: **${reason}**.`)
  .setTimestamp(message.createdAt)
  .setFooter(`${message.author.username} tirou ${wUser.displayName} da staff.`, message.author.avatarURL);

  let staffchannel = message.guild.channels.find(`name`, "📝║movimentação-staff");
  if(!staffchannel) return message.channel.send ("Nao foi possivel encontrar esta sala!")

  message.delete().catch(O_o=>{});
  staffchannel.send(staffEmbed)

  return;

}

module.exports.help = {
    name: "tirarstaff"
}
