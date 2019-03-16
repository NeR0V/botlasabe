const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
  
  message.delete().catch(O_o=>{});
  
   let noPerm1 = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Erro", "❌ **|** Você não tem permissão para usar este comando.");
  

    let exemplo = new Discord.RichEmbed()
      .setColor("#363942")
      .addField("Exemplo", "Exemplo de uso: `w!msgpv <@NeR0#0632/ID> <mensagem> ");
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(noPerm1).then(msg => msg.delete(1000))
  
  let text = args.slice(1).join(' ')
  
   var bUser;
    if (message.mentions.members.size > 0) {
        if (/<@!?[\d]{18}>/.test(args[0]) && args[0].length <= 22) {
            bUser = message.mentions.members.first();
        }
    } else if (/[\d]{18}/.test(args[0]) && args[0].length === 18) {
        bUser = message.guild.members.get(args[0]) || args[0];
    } else {
        message.channel.send(exemplo);
        return 0;
    }
  
    if(!bUser) return message.channel.send(exemplo).then(msg => msg.delete(5000))
  
    let privado = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Preview", `Deseja enviar esse aviso?`);

    let mandando = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Aviso", `✅ **|** Enviando o aviso para ${bUser.user.tag}.`);
  
    let nao = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Aviso", `❌ **|** Cancelando Aviso.`);
  
      message.author.send(text)
      message.author.send(privado).then(async sentEmbed => {
      await sentEmbed.react("👍")
      await sentEmbed.react("👎")
      message.delete(35000)

      const filter = (reaction, user) => {
        return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
      };

      sentEmbed.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
          .then(collected => {
              const reaction = collected.first();

              if (reaction.emoji.name === '👍') {

                message.author.send(mandando).then(msg => msg.delete(5000))

                bUser.send(`${text}\n\nMensagem enviado por: ${message.author}`)
              }
              else {
                  message.author.send(nao).then(msg => msg.delete(5000))
              }
          })
          .catch(collected => {
              message.author.send(nao).then(msg => msg.delete(5000))
          });
        })
  
}
                                      
                                   

module.exports.help = {
    name: "msgpv"
}
