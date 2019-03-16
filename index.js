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

// Constantes
const Discord = require("discord.js");

const botconfig = require("./botconfig.json");

const fs = require("fs");
const moment = require('moment');

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
    console.log(`Iniciando o ${bot.user.tag}.`)
  
    bot.user.setActivity(`Seja bem vindo ao servidor :D`, {type: "STREAMING", url:"https://www.twitch.tv/alanzoka"});

   })

bot.on(`message`, async message => {

    if(message.author.bot) return;
    if(message.channel.type === `dm`) return;
    

let prefix = botconfig.prefix;
if (!message.content.startsWith("n!")) return;
let messageArray = message.content.split(` `);
let cmd = messageArray[0];
let args = messageArray.slice(1);

let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args);

});

bot.on('guildMemberAdd', async member => {
  
});

// Bot Login
bot.login("NTU2NTg3NzE0ODc1NzUyNDc4.D276dA.8Ubbcri8l6eHHF08ti8JJfu7oo4")
