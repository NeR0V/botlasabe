const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  
  if (message.member.hasPermission("ADMINISTRATOR")) {

  let splitarg = args.join(" ").split(" | ");
  
  let exemplo = new Discord.RichEmbed()
    .setColor("#363942")
    .addField("Exemplo", "Exemplo de uso: `w!avisostaff <aviso> | <link da imagem>`");

  if(args.length === 0){

    return message.reply(exemplo)

  }

  let aconteudo = splitarg[0];

  let aImage = splitarg[1];

    const embed = new Discord.RichEmbed()
    .setDescription(`**AVISO STAFF:** \n${aconteudo}`)
    .setColor("#8807df")
    .setFooter(`Aviso enviado por: ${message.author.username}`, message.author.avatarURL)
    .setImage(aImage)
    .setTimestamp();

    let privado = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Preview", `Deseja enviar esse aviso?`);

    let mandando = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Aviso", `✅ **|** Enviando o aviso para todos os staff's.`);

    let nao = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Aviso", `❌ **|** Cancelando Aviso.`);

    let noPerm = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Aviso", `❌ **|** Você não tem permissão para user esse comando.`);

      message.author.send(embed)
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

              message.guild.roles.get('557026862979743773').members.map(member => {
                  member.send(embed)
              })

              }
              else {
                  message.author.send(nao).then(msg => msg.delete(5000))
              }
          })
          .catch(collected => {
              message.author.send(nao).then(msg => msg.delete(5000))
          });
        })

  } else {
  
  message.channel.send('Você não tem permissão para usar este comando.')
  
}
}


module.exports.help = {
  name: "avisostaff"
}
