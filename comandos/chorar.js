const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    var gifs = ["https://media.giphy.com/media/kUYWowJqB78jK/giphy.gif",
    "https://media.giphy.com/media/2YZ8QCX9IM7cs/giphy.gif",
    "https://media.giphy.com/media/Ui7MfO6OaLz4k/giphy.gif",
    "https://media.giphy.com/media/4NuAILyDbmD16/giphy.gif",
    "https://media.giphy.com/media/1eNhgXAsSwkKI/giphy.gif",
    "https://media.giphy.com/media/8YutMatqkTfSE/giphy.gif",
    "https://media.giphy.com/media/zHGXhFJCVCbD2/giphy.gif",
    "https://i.kym-cdn.com/photos/images/original/001/286/846/e95.gif",
    "https://pa1.narvii.com/5729/7239144f9492a477092d05271e10657b9e1a335b_hq.gif",
    "https://66.media.tumblr.com/5d4be9e172a65bbc7e099cf6090f0e0e/tumblr_p1j4i9NJwn1qbvovho1_r1_500.gif",
    "https://thumbs.gfycat.com/TautWigglyDodo-size_restricted.gif",
    "https://uploads.disquscdn.com/images/aec2fc2ca716a89316c78c9155dcdc1e4942f8a098f42483cbd0e8fcba4f7dc1.gif"]
            var temp = gifs[Math.floor(Math.random() * 12)]
  
            message.delete().catch(O_o=>{});

            var embed = new Discord.RichEmbed()
                .setColor("#8807df")
                .setDescription(`**${message.author} está chorando.**`)
                .setImage(temp)
            message.channel.send(embed);

}
module.exports.help = {
    name: "chorar"
}
