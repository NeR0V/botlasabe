const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  message.delete().catch(O_o=>{});
  
  // Embeds ----------------------------------------------- 

  let chat = new Discord.RichEmbed()
  .setColor("#363942")
  .addField("Ajuda", "```Mandei a lista de comandos no seu privado.```")
  .setThumbnail(bot.user.displayAvatarURL);

  let embed = new Discord.RichEmbed()
  .setTitle("• Comandos do Guardião.")
  .setDescription(`:rotating_light: | Staff's \n` +
  `:pencil: | Misc\n` +
  `:arrow_left: | Voltar\n\n`)
  .setColor("36393f")
  .setThumbnail(bot.user.displayAvatarURL)
  
  let misca = new Discord.RichEmbed()
  .setTitle(`:pencil: | Misc`)
  .setColor("#36393f")
  .setDescription(`**•Prefix: w!**\n\n` +
  `w!avatar: Mostra o seu avatar ou de alguém. \n` +
  `w!emoji: Aumenta o tamanho do emoji. \n` +
  `w!ping: Mostra o ping do bot.`)
  .setThumbnail("📝".url);                

  let mod = new Discord.RichEmbed()
  .setTitle(`:rotating_light: | Staff's`)
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
  .setThumbnail("🚨".url)
  
  // Misc --------------------------------------------------- 

    message.channel.send(chat).then(msg => msg.delete(5000))
  
      var paginas = [
        mod,
        misca,
        embed
      ]
      
      var emojis = [
        "🚨",
        "📝",
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
