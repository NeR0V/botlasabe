const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  
    message.delete().catch(O_o=>{});

    let noPerm = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Erro", "❌ **|** Você não tem permissão para usar este comando.");

    let cantMute = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Erro", "❌ **|** Você não pode mutar este usuário.");
  
    let manyTime = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Erro", "❌ **|** O tempo máximo de mute é de `8h`.");
    
    let minTime = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Erro", "❌ **|** O tempo mínimo de mute é de `5m`.");
    
    let exemplo = new Discord.RichEmbed()
    .setColor("#363942")
    .addField("Exemplo", "Exemplo de uso: `w!mute @NeR0#4444 5m <Motivo>`");
    
    let mutadoja = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Erro", `❌ **|** O membro ${tomute} já está mutado.`);
  

    var tomute;
    if (message.mentions.members.size > 0) {
        if (/<@!?[\d]{18}>/.test(args[0]) && args[0].length <= 22) {
            tomute = message.mentions.members.first();
        }
    } else if (/[\d]{18}/.test(args[0]) && args[0].length === 18) {
        tomute = message.guild.members.get(args[0]);
    }
  
    if(!tomute) return message.channel.send(exemplo).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{});
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noPerm).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{});
    if(tomute.hasPermission("ADMINISTRATOR")) return message.channel.send(cantMute).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{});
    let muterole = message.guild.roles.find(`name`, "Mutado");

    if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mutado",
        color: "#000001",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  
  if (tomute.roles.find(r => r.name === `Mutado`)) {
        message.channel.send(mutadoja).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{});
        return 0;
    }
  
    if (args.length < 2) {
        message.channel.send(exemplo).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{});
    }
  
  let time = ms(args[1]);
    if (!time || time < ms("5m")) {
        message.channel.send(minTime);
        return 0;
    }
    if (time > ms("8h")) {
        message.channel.send(manyTime);
        return 0;
    }
  
  let reason = args.slice(2).join(' ').slice(0, 201);
    if (!reason.length) {
        reason = `Sem motivo.`;
    }
  
    let executor = message.author.tag
  
    tomute.addRole(muterole, `${executor} | Motivo: ${reason}`);
  
      let muteTime = ms(time);
            if (muteTime.slice(-1)[0] === "m") {
                muteTime = `${muteTime.slice(0, muteTime.length - 1)} minutos`;
            }
            if (ms(time).slice(-1)[0] === "h") {
                muteTime = `${muteTime.slice(0, muteTime.length - 1)} horas`;
            }

    let muted = new Discord.RichEmbed()
      .setTitle("`Membro mutado`")
            .addField(`Usuário mutado`, `\`${tomute.user.tag}\``, true)
            .addField(`Executado por`, `\`${message.author.tag}\``, true)
            .addField(`Tempo`, muteTime, true)
            .addField(`:clipboard: Motivo`, reason, true)
            .setColor("363942")
            .setThumbnail(tomute.user.displayAvatarURL)
            .setFooter(`${message.author.username} mutou ${tomute.user.username}`, message.author.displayAvatarURL)
            .setTimestamp();
    message.channel.send(muted);
  
  let unMuted = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Mute", `✅ **|** ${tomute} foi desmutando após ${ms(time)}!`);

    setTimeout(function(){
      tomute.removeRole(muterole);
      message.channel.send(unMuted).then(msg => msg.delete(5000)) + message.delete().catch(O_o=>{});
    }, time);

}

module.exports.help = {
    name: "mute"
}
