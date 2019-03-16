const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let pingembed = new Discord.RichEmbed()
        .setColor("#8807df")
        .addField('Ping do Host: ', Date.now() - message.createdTimestamp + ' ms')
        .addField('Ping da API: ', Math.floor(bot.ping) + ' ms')
        .setTimestamp(new Date())
        .setFooter(message.guild.name, message.guild.iconURL);

    message.delete().catch(O_o=>{});
    message.channel.send(pingembed);

};

module.exports.help = {
    name: "ping"
};
