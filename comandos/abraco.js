const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
  
  message.delete().catch(O_o=>{});

    var gifs = ["https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif",
                "https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
                "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
                "https://media1.tenor.com/images/49a21e182fcdfb3e96cc9d9421f8ee3f/tenor.gif?itemid=3532079",
                "http://78.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif",
                "https://i.imgur.com/r9aU2xv.gif",
                "https://cdn.discordapp.com/attachments/505495605791948801/508293588182892555/tumblr_nk36z05cHo1u4fj88o1_500.gif",
                "https://cdn.discordapp.com/attachments/505495605791948801/508295849542156288/PolishedGloriousGoldenmantledgroundsquirrel-small.gif",
                "https://cdn.discordapp.com/attachments/505495605791948801/508294733550845965/tumblr_m22p5oW5ye1qaxi3go1_500_large.gif"]
            var temp = gifs[Math.floor(Math.random() * 9)]

            let firstMentioned = message.mentions.users.first();
  
            let frasees = args.join(" ")
  
            let exemplo = new Discord.RichEmbed()
            .setColor("#363942")
            .addField("Exemplo", "Exemplo de uso: `w!abraçar <frase>`");

            if(args.length === 0){

              return message.channel.send(exemplo).then(msg => msg.delete(10000))

            }

            var embed = new Discord.RichEmbed()
                .setColor("#8807df")
                .setDescription(`**${message.author} abraçou ${frasees}**`)
                .setImage(temp)
            message.channel.send(embed);
}

module.exports.help = {
    name: "abraçar"
}
