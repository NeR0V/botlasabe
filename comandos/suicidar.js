const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    var gifs = ["https://media.giphy.com/media/WsWJZcJoxmLUk/giphy.gif",
    "https://steamusercontent-a.akamaihd.net/ugc/911288903785406241/9B6112ACC081EFBD100ACBFC825A005D5E4289C2/",
    "https://media1.tenor.com/images/47892bb88afc132a3afb775988208240/tenor.gif",
    "https://cdn60.picsart.com/182542841000202.gif?r1024x1024",
    "https://thumbs.gfycat.com/EquatorialGleefulArabianhorse-size_restricted.gif",
    "https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif?itemid=5091706",
    "http://data.whicdn.com/images/107593752/large.gif"]
            var temp = gifs[Math.floor(Math.random() * 7)]

            var embed = new Discord.RichEmbed()
                .setColor("#8807df")
                .setDescription(`**${message.author} desistiu do mundo e se suicidou.**`)
                .setImage(temp)
            message.channel.send(embed);

}
module.exports.help = {
    name: "suicidar"
}
