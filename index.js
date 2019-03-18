// Constantes
const Discord = require("discord.js");

const botconfig = require("./botconfig.json");

const fs = require("fs");
const moment = require('moment');
const superagent = require("superagent");
const db = require("quick.db");

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// Cliente
const bot = new Discord.Client({disableEveryone: true});

// Comando
bot.commands = new Discord.Collection();

//-------------------------------------------------------

// Comandos em outros arquivos
fs.readdir("./comandos/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Não foi possivel encontrar a pasta.");
      return;
    }

    jsfile.forEach((f, i) =>{
      let props = require(`./comandos/${f}`);
      console.log(`${f} Carregado!`);
      bot.commands.set(props.help.name, props);
    });

  });

// Bot Pronto no Console
bot.on("ready", async () => {
    console.log(`Iniciando o ${bot.user.tag}`)

    // Status do Bot
    bot.user.setActivity(`Bot quase pronto, só não termino pq estou com preguiça.`, {type: "STREAMING", url:"https://www.twitch.tv/ner0v"});

   })

// Salas - Chat Global e Regras


bot.on(`message`, async message => {

    if(message.author.bot) return;
    if(message.channel.type === `dm`) return;
    

let prefix = botconfig.prefix;
if (!message.content.startsWith("y!")) return;
let messageArray = message.content.split(` `);
let cmd = messageArray[0];
let args = messageArray.slice(1);

let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args);

});

bot.on('guildMemberAdd', async member => {
  
    db.get(`messageChannel_${member.guild.id}.canal`).
    
      db.get(`joinMessage_${member.guild.id}.texto`)
        
        if (!`joinMessage_${member.guild.id}.texto`) return
        else member.guild.channels.get(`messageChannel_${member.guild.id}.canal`.text), `joinMessage_${member.guild.id}.texto`.text.replace('{user}', member)
  
});
  

// Bot Login
bot.login(process.env.TOKEN)