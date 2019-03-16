const Discord = require("discord.js");
const moment = require('moment');
const snek = require('node-superfetch');
const twemoji = require('twemoji');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

  message.delete().catch(O_o=>{});
  
    try {
      const emote = Discord.Util.parseEmoji(args[0]);
      if (emote.animated === true) {
        const URL = `https://cdn.discordapp.com/emojis/${emote.id}.gif?v=1`;
        const { body: buffer } = await snek.get(`${URL}`);
        const toSend = fs.writeFileSync('emote.gif', buffer);
        message.channel.send({ file: 'emote.gif' });
      } else if (emote.id === null) {
        const twemote = twemoji.parse(args[0]);
        const regex = /src="(.+)"/g;
        const regTwemote = regex.exec(twemote)[1];
        const { body: buffer } = await snek.get(`${regTwemote}`);
        const toSend = fs.writeFileSync('emote.png', buffer);
        await message.channel.send({ file: 'emote.png' });
      } else {
        const URL = `https://cdn.discordapp.com/emojis/${emote.id}.png`;
        const { body: buffer } = await snek.get(`${URL}`);
        const toSend = fs.writeFileSync('emote.png', buffer);
        message.channel.send({ file: 'emote.png' });
      }
    } catch (error) {
      if (error.message === 'TypeError: Cannot read property \'1\' of null') {
        message.reply('Give me an actual emote.');
      }
    }
}

module.exports.help = {
    name: "emoji"
}
