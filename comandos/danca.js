const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    var gifs = ["https://d2w9rnfcy7mm78.cloudfront.net/2145256/original_cd9c01187cead45cd791beafa78f7e08.gif",
                "http://3.bp.blogspot.com/-s6kt7-BR-GI/UtRzuhyEkWI/AAAAAAAADHg/a33aiu4mRkI/s1600/Kyoukai-no-Kanata-kyoukai-no-kanata-36030478-500-281.gif",
                "https://media.giphy.com/media/YZX4FWwOJTK5W/giphy.gif",
                "http://pa1.narvii.com/5776/5bbc8d47e5d073a4177b047e6d5fafaa1915c5db_hq.gif",
                "https://img.fireden.net/a/image/1472/69/1472691290793.gif",
                "https://i.kym-cdn.com/photos/images/newsfeed/001/115/816/936.gif",
                "https://78.media.tumblr.com/43ce092d371ebae3bc902b547cee5135/tumblr_n2i2zpzDBn1rrr564o3_r1_500.gif",
                "https://media.giphy.com/media/CEiFjgIXfIDG8/source.gif"]
            var temp = gifs[Math.floor(Math.random() * 8)]
            
            message.delete().catch(O_o=>{});
            
            var embed = new Discord.RichEmbed()
                .setColor("#8807df")
                .setDescription(`**${message.author} está dançando muito louco.**`)
                .setImage(temp)
            message.channel.send(embed);
}

module.exports.help = {
    name: "dançar"
}
