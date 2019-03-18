const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  var user = message.mentions.users.first();
  if (!user) user = message.author;
  var targetInvites = await message.guild.fetchInvites();
  var invitesUses = 0;
  for (let invite of targetInvites.values()) {
      if (invite.inviter === user) {
          invitesUses += invite.uses;
      }
  }
  var embed = new Discord.RichEmbed()
  .setAuthor(user.username)
  .setThumbnail(user.displayAvatarURL)
  .addField("★ Membros Convidados ★", `\`\`\`md\n# ${invitesUses} Membros\`\`\``)
  .setColor("#363942")
  .setFooter(`Comando por: ${message.author.username}`, message.author.displayAvatarURL)
  .setTimestamp();
  message.delete().catch(console.error);
  message.channel.send(embed).catch(console.error);

}

module.exports.help = {
  name: "div"
}
