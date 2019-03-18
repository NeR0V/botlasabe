const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    var gifs = ["https://media1.tenor.com/images/d97e4bc853ed48bf83386664956d75ec/tenor.gif?itemid=10364764",
                "https://66.media.tumblr.com/7e2cad3ab0432205cdd5c37fab83d977/tumblr_ojh7gzPyeB1uzwbyjo1_500.gif",
                "https://i.kym-cdn.com/photos/images/newsfeed/001/027/044/1cd.gif",
                "https://cdn.discordapp.com/attachments/515688982630236200/516693635564175360/dc2.gif",
                "http://i.imgur.com/fWSIugu.gif",
                "https://i.pinimg.com/originals/19/11/36/1911360385b4b39b6687bcaaf2ab3061.gif",
                "https://data.whicdn.com/images/151203966/original.gif"]
            var temp = gifs[Math.floor(Math.random() * 7)]

            let bUser = message.guild.member(message.mentions.users.first())

            var embed2 = new Discord.RichEmbed()
                .setColor("#8807df")
                .setDescription(`**${message.author} se mordeu.**`)
                .setImage(temp)

            if(!message.mentions.users.first()) return message.channel.send(embed2)

            var embed = new Discord.RichEmbed()
                .setColor("#8807df")
                .setDescription(`**${message.author} mordeu o/a ${bUser}.**`)
                .setImage(temp)
            message.channel.send(embed);

}

module.exports.help = {
    name: "morder"
}
