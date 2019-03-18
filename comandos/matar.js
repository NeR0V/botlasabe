const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    var gifs = ["https://media.giphy.com/media/QyY5z4XcUhwlO/giphy.gif",
    "https://media.giphy.com/media/iRA3ddLHM5cti/giphy.gif",
    "http://gifimage.net/wp-content/uploads/2017/09/anime-kill-gif-10.gif",
    "http://gifimage.net/wp-content/uploads/2017/09/anime-kill-gif.gif",
    "https://static.tumblr.com/0bbcd00a2c6a627a2825a40618360958/a9hthvz/Wusn55z8v/tumblr_static_tumblr_static_2tc8bk24dds0ko4wcwgw80ww4_640.gif",
    "https://media.giphy.com/media/loAOm3GR29gPK/giphy.gif",
    "https://media.giphy.com/media/c50XjzM32p4qI/giphy.gif",
    "https://static1.squarespace.com/static/596001c2579fb355caec7aac/t/59efbab68dd04101b529bbeb/1508883132864/690ea0f0dd927d10853e0a8fa88c9e647cc63fe0_hq.gif",
    "https://static1.squarespace.com/static/596001c2579fb355caec7aac/t/59ef94561f318df89891d6fb/1508873306837/giphy+%283%29.gif"]
            var temp = gifs[Math.floor(Math.random() * 9)]

            let firstMentioned = message.mentions.users.first();

            var embed = new Discord.RichEmbed()
                .setColor("#8807df")
                .setDescription(`**${message.author} matou friamente o/a <@${firstMentioned}>**`)
                .setImage(temp)
            message.channel.send(embed);
}

module.exports.help = {
    name: "matar"
}
