const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let noFound = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Kick", "Não foi possível encontrar o usuário.");

    let noPerm = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Sem permissão", "Você não tem permissão para usar este comando.");

    let cantKick = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Sem permissão", "Você não pode kikar este usuário.");

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(noFound).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{});
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(noPerm).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{});
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(cantKick).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{});

    let kickEmbed = new Discord.RichEmbed()
    .setColor(`#8807df`)
    .setThumbnail(kUser.user.displayAvatarURL)
    .addField("`Membro kikado`", `${message.author} kikou ${kUser}.`)
    .addField("Motivo", `${kReason}`)
    .setTimestamp(message.createdAt)
    .setFooter(`${message.author.username} kickou ${kUser.displayName}`, message.author.avatarURL);

    message.guild.member(kUser).kick(kReason)
    message.delete().catch(O_o=>{});
    message.channel.send(kickEmbed)

    return;

}

module.exports.help = {
  name: "kick"
}
