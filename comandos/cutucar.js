const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {

    var gifs = ["https://media.giphy.com/media/WvVzZ9mCyMjsc/giphy.gif",
                "https://66.media.tumblr.com/913f6c8b397a28cce5d739d9e5440f13/tumblr_on0ks5LR3P1ridyfoo1_500.gif",
                "https://media1.tenor.com/images/ab936c887562756472f83850426bf6ef/tenor.gif?itemid=11956062",
                "https://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-9.gif",
                "http://i.imgur.com/rxsyBWA.jpg",
                "https://i.gifer.com/8xtR.gif",
                "https://78.media.tumblr.com/0809478d6759a0a4b431755026f677a0/tumblr_ntpfvoxeoz1u03j02o1_500.gif",
                "https://i.imgur.com/Z4ZeNT1.gif"]
            var temp = gifs[Math.floor(Math.random() * 8)]
  
            let frasees = args.join(" ")
            
            message.delete().catch(O_o=>{});

            var embed = new Discord.RichEmbed()
                .setColor("#8807df")
                .setDescription(`**${message.author} cutucou ${frasees}.**`)
                .setImage(temp)
            message.channel.send(embed);
}

module.exports.help = {
    name: "cutucar"
}
