const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    var gifs = ["https://media1.tenor.com/images/c08efe7356f36e19ee3e2489c10d31f3/tenor.gif?itemid=10173924",
    "https://image.myanimelist.net/ui/_3fYL8i6Q-n-155t3dn_4r102rO13nTjT4m7dTEfIUmuQSCOgE_DMfZMchYbwgz0",
    "https://image.myanimelist.net/ui/_3fYL8i6Q-n-155t3dn_4oa8joxN4d65hmFMp22bNTIUW3ufQExKZv-GKL4AdqgU",
    "https://data.whicdn.com/images/233322524/original.gif",
    "https://media1.tenor.com/images/6f04cbe23fa862cd1e7da987c2b0308e/tenor.gif?itemid=9187874",
    "https://i.kym-cdn.com/photos/images/original/001/115/759/095.gif",
    "https://gifimage.net/wp-content/uploads/2017/09/anime-sleep-gif-9.gif",
    "https://i.kym-cdn.com/photos/images/newsfeed/000/988/701/941.gif"]
            var temp = gifs[Math.floor(Math.random() * 8)]

            var embed = new Discord.RichEmbed()
                .setColor("#8807df")
                .setDescription(`**${message.author} está dormindo 💤.**`)
                .setImage(temp)
            message.channel.send(embed);

}
module.exports.help = {
    name: "dormir"
}
