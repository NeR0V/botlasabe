const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  message.delete().catch(O_o=>{});
  
var achievement = args.join(" ");
 var request = require('request');
 var fs = require('fs');
   function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    if (typeof obj !== "object") return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
  }
        var wembed = new Discord.RichEmbed()
          .setColor('#363942')
          .addField("**w!conquista <conquista>**", "mude a `<conquista>` para qualquer coisa.")
          .setTimestamp()
          .setFooter(`${message.author.username} tente novamente.`, `${message.author.avatarURL}`);
        if (isEmpty(achievement)) return message.channel.send(wembed);
        var download = function(uri, filename, callback){
          request.head(uri, function(err, res, body){

            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        var dir = `achievement.png`;
        download('https://www.minecraftskinstealer.com/achievement/a.php?i=19&h=Conquista+realizada%21&t='+achievement, dir, function(){
        message.channel.send({file: dir});
        });

  }

module.exports.help = {
    name: "conquista"
}
