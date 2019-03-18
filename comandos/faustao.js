const Discord = require("discord.js");
const snekfetch = require("node-superfetch");
const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {
  
  message.delete().catch(O_o=>{});
  
  const canvas = Canvas.createCanvas(480, 546);
  const ctx = canvas.getContext('2d');
  
  const faustao = await Canvas.loadImage('https://cdn.glitch.com/503b60e0-00cb-4293-b5fd-6c56ff0c2b50%2Ffaustao.jpg?1547590292967');
  ctx.drawImage(faustao, 0, 0, 480, 546)
  
  
  let text = message.content.slice('w!faustao'.length);
  
  ctx.font = "30px Arial";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillText(`${text}`, 11, 46);
  
  
  const attach = new Discord.Attachment(canvas.toBuffer(), 'faustaomeme.png');
  
  message.channel.send(attach);

  }

module.exports.help = {
    name: "faustao"
}
