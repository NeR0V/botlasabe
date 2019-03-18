const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    var gifs = ["https://media1.tenor.com/images/b3e0ecd965e324aa328a0137c38a44f1/tenor.gif?itemid=5566554",
    "https://thumbs.gfycat.com/ClassicRealisticHyena-max-1mb.gif",
    "https://media.giphy.com/media/12scWlqkDOzDKo/giphy.gif",
    "https://media.giphy.com/media/NhdlgJRFXAScg/giphy.gif",
    "https://i.gifer.com/Bqda.gif",
    "https://media1.tenor.com/images/26df2182fc943676dc6cc51371efc04b/tenor.gif?itemid=8932912",
    "https://thumbs.gfycat.com/AcademicWindyFalcon-small.gif"]
            var temp = gifs[Math.floor(Math.random() * 7)]

            var embed = new Discord.RichEmbed()
                .setColor("#8807df")
                .setDescription(`**${message.author} está rindo 😂 frenéticamente.**`)
                .setImage(temp)
            message.channel.send(embed);

}
module.exports.help = {
    name: "rir"
}
