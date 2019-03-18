const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let noPerm1 = new Discord.RichEmbed()
  .setColor("#ff0000")
  .addField("Sem Permissão", "Você não tem permissão para usar este comando.");

  let noFound = new Discord.RichEmbed()
  .setColor("#ff0000")
  .addField("Erro", ":warning: **|** Usuário não encontrado, saindo...");

  let cantBan1 = new Discord.RichEmbed()
  .setColor("#ff0000")
  .addField("Erro", ":warning: **|** Você não pode banir este usuário.");


  let mid = args.join(' ');
  if (!message.member.hasPermission(["BAN_MEMBERS"], false, true, true)) return message.reply(noPerm1);
const carregando = client.emojis.get("498981285633458197");
let desbanir = args[0];
if(!desbanir) return message.channel.send(noFound).then(msg => msg.delete(15000));

  let deseja = new Discord.RichEmbed()
  .setColor("#ff0000")
  .addField("Hackban", `Deseja realmente dar hackban em <@${mid}>?`);

    message.channel.send(deseja).then(msg => {
    msg.react('✅').then( r => {
    msg.react('❌')

  const confirmar1 = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
  const cancelar1 = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

  const confirma = msg.createReactionCollector(confirmar1, { time: 60000 });
  const cancela = msg.createReactionCollector(cancelar1, { time: 60000 });

  confirma.on('collect', r => {
    message.channel.bulkDelete(2);

    msg.edit(`${carregando} **|** Banindo.`)
    msg.edit(`${carregando} **|** Banindo..`)
    msg.edit(`${carregando} **|** Banindo...`)
    msg.edit(`${carregando} **|** Banindo.`)
    msg.edit(`${carregando} **|** Banindo..`)
    msg.edit(`${carregando} **|** Banindo...`)
    msg.edit(`${carregando} **|** Banindo.`)
    msg.edit(`${carregando} **|** Banindo..`)
    msg.edit(`${carregando} **|** Banindo...`)
    client.fetchUser(mid).then(id => {
        message.guild.ban(id).catch(err => {

          let noPos = new Discord.RichEmbed()
          .setColor("#ff0000")
          .addField("Erro", `❌ **|** Não foi possível banir esse usuário.`);

          message.channel.send(noPos).then(msg => msg.delete(5000));
          console.log(err)
        })

        let succ = new Discord.RichEmbed()
        .setColor("#00ff00")
        .addField("Hackban", `✅ **|** Usuário banido com sucesso ${id}.`);

        message.channel.send(succ).then(msg => msg.delete(5000));
      }).catch(() => {

        let noEx = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("Erro", `:warning: **|** Esse ID não existe.`);

        message.channel.send(noEx).then(msg => msg.delete(5000));
      })
})

cancela.on('collect', r => {

  message.channel.bulkDelete(2);

  let cancel = new Discord.RichEmbed()
  .setColor("#ff0000")
  .addField("Hackban", `❌ **|** Banimento cancelado, saindo...`);

  message.channel.send(cancel).then(msg => msg.delete(5000));
  })
  })
  })

}
module.exports.help = {
  name: "hackban"
}
