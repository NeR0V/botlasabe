const Discord = require("discord.js");
const snekfetch = require("node-superfetch");
const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {
  
  message.delete().catch(O_o=>{});
  
  const canvas = Canvas.createCanvas(1140, 597);
  const ctx = canvas.getContext('2d');
  
  const bolsonaro = await Canvas.loadImage('https://cdn.glitch.com/503b60e0-00cb-4293-b5fd-6c56ff0c2b50%2Ftemplate.png?1548279254859');
  ctx.drawImage(bolsonaro, 0, 0, 1140, 597)
  
  let exemplo = new Discord.RichEmbed()
    .setColor("#363942")
    .addField("Exemplo", "Exemplo de uso: `w!bolsonaro <link da imagem>`");

  let text = message.content.slice('w!bolsonaro'.length);
  
  const foto = await Canvas.loadImage(text);
  ctx.drawImage(foto, 226, 17, 878, 485)
  
  const pers = await Canvas.loadImage('https://cdn.glitch.com/503b60e0-00cb-4293-b5fd-6c56ff0c2b50%2Fbolsonaro.png?1548279253634');
  ctx.drawImage(pers, 0, 0, 1140, 597)
  
  const attach = new Discord.Attachment(canvas.toBuffer(), 'bolsonaromeme.png');
  
  message.channel.send(attach);

  }

module.exports.help = {
    name: "bolsonaro"
}
