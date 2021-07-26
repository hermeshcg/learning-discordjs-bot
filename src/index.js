require('dotenv').config({ path: __dirname + '/.env' });
const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env['DISCORD_TOKEN'];

client.on('ready', () => {
  console.log("i'm on bitch");
});

client.on('message', (msg) => {
  if (msg.content === 'Ola') {
    msg.reply('Salve');
  }
  if (msg.content === 'vai tomar no cu') {
    msg.reply('vai tu caralho');
  }
  if (msg.content === 'teste') {
    msg.channel.send('testa ai ' + msg.author.username);
  }
});

client.login(token);

// link to invite bot: https://discord.com/oauth2/authorize?client_id=869260878711771147&scope=bot&permissions=8
