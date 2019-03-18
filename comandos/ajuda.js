const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  message.delete().catch(O_o=>{});
  
  // Embeds ----------------------------------------------- 

  let chat = new Discord.RichEmbed()
  .setColor("#363942")
  .addField("Ajuda", "```Mandei a lista de comandos no seu privado.```")
  .setThumbnail(bot.user.displayAvatarURL);

  let embed = new Discord.RichEmbed()
  .setTitle("• Comandos do Wanted Bot.")
  .setDescription(`<a:Alerta:523975384346394625> | Staff's \n` +
  `<a:HyperNeko:530577636028710932> | Entretenimento\n` +
  `<a:Partner:530829714986762240> | Misc\n` +
  `:arrow_left: | Voltar\n\n`)
  .setColor("36393f")
  .setThumbnail(bot.user.displayAvatarURL)
  
  let misca = new Discord.RichEmbed()
  .setTitle(`<a:Partner:530829714986762240> | Misc`)
  .setColor("#36393f")
  .setDescription(`**•Prefix: w!**\n\n` +
  `w!avatar: Mostra o seu avatar ou de alguém. \n` +
  `w!bolsonaro: Faz um meme do bolsonaro. \n` +
  `w!conquista: Faz uma conquista do minecraft. \n` +
  `w!emoji: Aumenta o tamanho do emoji. \n` +
  `w!faustao: Faz um meme do Faustão. \n` +
  `w!ping: Mostra o ping do bot.`)
  .setThumbnail(bot.emojis.get("530829714986762240").url);                

  let emoc = new Discord.RichEmbed()
  .setColor("#36393f")
  .setTitle(`<a:HyperNeko:530577636028710932> | Entretenimento`)
  .setDescription(`**•Prefix: w!**\n\n` +
  `w!chorar: Chorar sozinho sem ninguém. \n` +
  `w!abraçar: Você abraça seu abiguinho .\n` +
  `w!beijar: Você beija seu webgadinho.\n` +
  `w!bater: Você bate em alguém. \n` +
  `w!cutucar: Cutucar só de levis. \n` +
  `w!dançar: Dancin... \n` +
  `w!dormir: Tirar uma sonequinha. \n` +
  `w!matar: Matar aquele "amiguinho" hehehe. \n` +
  `w!morder: Você morde um carinha aí. \n` +
  `w!rir: Você não vai parar de rir. \n` +
  `w!suicidar: Adeus mundo cruel...`)
  .setThumbnail(bot.emojis.get("530577636028710932").url);

  let mod = new Discord.RichEmbed()
  .setTitle(`<a:Alerta:523975384346394625> | Staff's`)
  .setDescription(`**•Prefix: w!**\n\n` +
  `w!lock: Trava o chat contra flood e ataques.\n` +
  `w!unlock: Destrava o chat.\n` +
  `w!hackban: Bane o usuário por ID que não esteja no servidor..\n` +
  `w!ban: Bane o usuário por ID ou menção!\n` +
  `w!unban: Desbane o usuário por ID!\n` +
  `w!mute: Muta o usuário mencionado.\n` +
  `w!unmute: Desmuta o usuário mutado.\n` +
  `w!limpar: Limpa o chat. (Max 99 mensagens)\n`)
  .setColor("36393f")
  .setThumbnail(bot.emojis.get("523975384346394625").url)
  
  // Misc --------------------------------------------------- 

    message.channel.send(chat).then(msg => msg.delete(5000))
  
      var paginas = [
        mod,
        emoc,
        misca,
        embed
      ]
      
      var emojis = [
        bot.emojis.find(emoji => emoji.name === "Alerta"),
        bot.emojis.find(emoji => emoji.name === "HyperNeko"),
        bot.emojis.find(emoji => emoji.name === "Partner"),
        "⬅"
      ]
      
    // -------------------------------------------------------

  let msg = await message.author.send(embed);
    const filter = (reaction, user) => {
        return user.id === message.author.id;
    };
    msg.createReactionCollector(filter, {time: 4000 * 60}).on("collect", async e => {
      
        let index = emojis.findIndex(i => i.name ? i.name === e.emoji.name : i === e.emoji.name);
      
        if (index < 0) return;
      await msg.edit(paginas[index]).catch(()=>{});
      
    }).on("end", () => {
      
        msg.delete().catch(()=>{});
      
    });
  
    for (let i = 0; i < emojis.length; ++i) {
        await msg.react(emojis[i]).catch(()=>{})
        
    }

}

module.exports.help = {
  name: "ajuda"
}
