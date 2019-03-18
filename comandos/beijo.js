const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    var gifs = ["https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif",
                "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
                "http://gifimage.net/wp-content/uploads/2017/09/anime-gif-kiss-11.gif",
                "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
                "https://media.giphy.com/media/BaEE3QOfm2rf2/giphy.gif",
                "https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif",
                "https://78.media.tumblr.com/3d93be7699a2ba8b4bc13a29a37b84ad/tumblr_odt2geMkpc1t86l7wo1_500.gif",
                "https://cdn.discordapp.com/attachments/409130487609557032/506667056817504276/tumblr_mk8xzkenY71qzd219o1_500.gif",
                "https://78.media.tumblr.com/fa20ef0dc64981e7d5df01e657fe82ad/tumblr_mofnbpnM291rgn0hpo1_500.gif",
                "https://78.media.tumblr.com/d95ce6f088d546bcbedf19bbd9880d2e/tumblr_mwwawixMeF1qbvovho1_500.gif",
                "https://66.media.tumblr.com/0c18cbfe89f27eb725fd4110f6457e37/tumblr_nuigmu4oCV1twyezqo1_500.gif",
                "https://thumbs.gfycat.com/MeaslyConcreteArmednylonshrimp-small.gif"]
            var temp = gifs[Math.floor(Math.random() * 12)]

            let firstMentioned = message.mentions.users.first();
  
            message.delete().catch(O_o=>{});
  
            let frasees = args.join(" ")
  
            let exemplo = new Discord.RichEmbed()
            .setColor("#363942")
            .addField("Exemplo", "Exemplo de uso: `w!beijar <frase>`");

            if(args.length === 0){

              return message.channel.send(exemplo).then(msg => msg.delete(10000))

            }

            var embed = new Discord.RichEmbed()
                .setColor("#8807df")
                .setDescription(`**${message.author} beijou ${frasees}.**`)
                .setImage(temp)
            message.channel.send(embed);
}

module.exports.help = {
    name: "beijar"
}
