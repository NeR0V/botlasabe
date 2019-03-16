const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let noPerm1 = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Erro", "❌ **|** Você não tem permissão para usar este comando.");

    let cantBan1 = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Erro", "❌ **|** Você não pode banir este usuário.");
  
    let exemplo = new Discord.RichEmbed()
    .setColor("#363942")
    .addField("Exemplo", "Exemplo de uso: `w!ban @NeR0#4444`");

    var bUser;
    if (message.mentions.members.size > 0) {
        if (/<@!?[\d]{18}>/.test(args[0]) && args[0].length <= 22) {
            bUser = message.mentions.members.first();
        }
    } else if (/[\d]{18}/.test(args[0]) && args[0].length === 18) {
        bUser = message.guild.members.get(args[0]) || args[0];
    } else {
        message.channel.send(exemplo);
        return 0;
    }
  
    if(!bUser) return message.channel.send(exemplo).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{});
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(noPerm1).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{});
    let executor = message.author.tag
    
    if (typeof bUser !== "string") {
        if (bUser.id === message.guild.ownerID) {
            message.channel.send(cantBan1);
            return 0;
        }
        if (bUser.id === bot.user.id) {
            message.channel.send(cantBan1);
            return 0;
        }
        let executorRole = message.member.highestRole;
        let targetRole = bUser.highestRole;
        if (executorRole.comparePositionTo(targetRole) <= 0 && message.author.id !== message.guild.ownerID) {
            message.channel.send(cantBan1);
            return 0;
        }
        let clientRole = message.guild.me.highestRole;
        if (clientRole.comparePositionTo(targetRole) <= 0) {
            message.channel.send(cantBan1);
            return 0;
        }
    }
  
    let bReason = args.slice(1).join(' ').slice(0, 201) || "Sem motivo.";
      
    let banEmbed1 = new Discord.RichEmbed()
    .setTitle("`Membro banido`")
    .addField("Ban executado por", `\`${message.author.tag}\``, true)
    .addField("Usuário banido", `\`${bUser.user.tag}\``, true)
    .addField(":clipboard: Motivo", bReason)
    .setThumbnail(bUser.user.displayAvatarURL)
    .setColor("36393F")
    .setFooter(`${message.author.username} baniu ${bUser.user.username}`, message.author.displayAvatarURL)
    .setTimestamp();
      
    message.guild.member(bUser).ban(`${executor} | Motivo: ${bReason}`)
    message.delete().catch(O_o=>{});
    message.channel.send(banEmbed1)
      
      return;
      
  
}                                 
  

module.exports.help = {
  name: "ban"
}
