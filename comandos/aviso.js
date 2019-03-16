const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  message.delete().catch(O_o=>{});

  let splitarg = args.join(" ").split(" | ");
  
  let exemplo = new Discord.RichEmbed()
    .setColor("#363942")
    .addField("Exemplo", "Exemplo de uso: `w!aviso <aviso> | <link da imagem>`");

  if(args.length === 0){

    return message.channel.send(exemplo)

  }

  let aconteudo = splitarg[0];

  let aImage = splitarg[1];

    const embed = new Discord.RichEmbed()
    .setDescription(`**AVISO:** \n${aconteudo}`)
    .setColor("#8807df")
    .setFooter(`Aviso enviado por: ${message.author.username}`, message.author.avatarURL)
    .setImage(aImage)
    .setTimestamp();

    let privado = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Preview", `Deseja enviar esse aviso?`);

    let mandando = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Aviso", `✅ **|** Enviando o aviso para ${message.guild.memberCount} membros.`);

    let nao = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Aviso", `❌ **|** Cancelando Aviso.`);

    let noPerm = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Aviso", `❌ **|** Você não tem permissão para user esse comando.`);

    if (message.member.roles.find(r => r.name === 'Anunciador')) {

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

              message.guild.members.forEach(member => {
                if (member.id != bot.user.id && !member.user.bot) member.send(embed)
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

        message.channel.send(noPerm).then(msg => msg.delete(5000));
    }
  }


module.exports.help = {
  name: "aviso"
}
