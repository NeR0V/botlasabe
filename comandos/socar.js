const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    var gifs = ["https://pa1.narvii.com/5668/d845ea44f1ce209351976f2a22b4c728873fac21_hq.gif",
                "https://media.giphy.com/media/iWAqMe8hBWKVq/giphy-downsized-large.gif",
                "https://media.giphy.com/media/B2EPZUJnvce3u/giphy.gif",
                "https://i.redd.it/3iiocp7oxfvy.gif ",
                "https://data.whicdn.com/images/286613675/original.gif",
                "https://78.media.tumblr.com/1f1f72af8e4202a3b2d9c2166cc7967f/tumblr_nmqo10FoDN1ri1zbno1_500.gif",
                "https://media1.tenor.com/images/67ba9eb3278bc0d57735e097fb3ae15a/tenor.gif?itemid=6014368"]
            var temp = gifs[Math.floor(Math.random() * 7)]

            let firstMentioned = message.mentions.users.first();

            var embed = new Discord.RichEmbed()
                .setColor("#8807df")
                .setDescription(`**${message.author} bateu no(a) <@${firstMentioned.id}> com força.**`)
                .setImage(temp)
            message.channel.send(embed);
}

module.exports.help = {
    name: "socar"
}
