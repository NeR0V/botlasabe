const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let noPerm = new Discord.RichEmbed()
  .setColor("#ff0000")
  .addField("`Promover`", "Você não tem permissão para usar este comando.");
  
  let noPers = new Discord.RichEmbed()
  .setColor("#ff0000")
  .addField("`Promover`", "Mencione a pessoa que irá ser promovido.");

  let noCargo = new Discord.RichEmbed()
  .setColor("#ff0000")
  .addField("Promover", "Marque o cargo do usuário.");

  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send(noPers).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{}); ;
  let reason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noPerm).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{});
  if(!reason) return message.channel.send(noCargo).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{}); ;

  let staffEmbed = new Discord.RichEmbed()
  .setColor(`#8807df`)
  .setThumbnail(wUser.user.displayAvatarURL)
  .addField("Novato", `${message.author} promoveu ${wUser} para ${reason}.`)
  .setTimestamp(message.createdAt)
  .setFooter(`${message.author.username} promoveu ${wUser.displayName}.`, message.author.avatarURL);

  let staffchannel = message.guild.channels.find(`name`, "📝║movimentação-staff");
  if(!staffchannel) return message.channel.send ("Nao foi possivel encontrar esta sala!")

  message.delete().catch(O_o=>{});
  staffchannel.send(staffEmbed)

  return;

}

module.exports.help = {
    name: "promover"
}
