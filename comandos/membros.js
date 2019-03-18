const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const embed = new Discord.RichEmbed()
		.setAuthor(message.guild.name, bot.user.displayAvatarURL)
		.setColor('#8807df')
		.setThumbnail(bot.user.displayAvatarURL)
		.addField('Membros', `**${message.guild.memberCount}**`, true)
		.addBlankField(true)
		.addField('Pessoas', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
		.addField('Bots', `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
		.addField('Status dos Membros', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Ausente\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Não Perturbe\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisível\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streamando`)
		.setFooter(`Dono: ${message.guild.owner.user.tag}`, message.guild.owner.user.displayAvatarURL);
	message.channel.send(embed);

}

module.exports.help = {
    name: "membros"
}
