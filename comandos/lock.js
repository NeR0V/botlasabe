const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_CHANNELS", false, true, true)) {
        message.reply("Você não tem permissão para utilizar esse comando!");
        return 0;
    }
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS", false, true)) {
        return 0;
    }

          await message.channel.overwritePermissions(message.guild.defaultRole, { SEND_MESSAGES: false }, `Chat bloqueado por ${message.author.tag}`);

          let lock = new Discord.RichEmbed()
          .setColor("#ff0000")
          .addField("Chat Bloqueado", `O chat foi bloqueado por ${message.author}. Para desbloquear use s!unlock`)
          .setTimestamp(message.createdAt)
          .setFooter(`Lock feito por ${message.author.username}`, message.author.displayAvatarURL);

          return message.channel.send(lock).then(msg => msg.delete(15000)) + message.delete().catch(O_o=>{});
  }

module.exports.help = {
    name: "lock"
}
