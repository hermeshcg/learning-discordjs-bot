require('dotenv').config({ path: __dirname + '/.env' });
const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env['DISCORD_TOKEN'];

const prefix = '"';

const servers = {
  server: {
    connection: null,
    dispatcher: null,
  },
};

client.on('ready', () => {
  console.log("i'm on bitch");
});

client.on('message', async (msg) => {
  // filter
  if (!msg.guild) return;

  if (!msg.content.startsWith(prefix)) return;

  if (!msg.member.voice.channel) {
    msg.channel.send('**You must be on a voice channel to use this command**');
    return;
  }

  //commands
  if (msg.content === prefix + 'play') {
    servers.server.connection = await msg.member.voice.channel.join();
    servers.server.connection.play('./teste.mp3');
  }

  if (msg.content === prefix + 'cavalo') {
    servers.server.connection = await msg.member.voice.channel.join();
    servers.server.connection.play('./cavalo.mp3');
  }
});

client.login(token);

// link to invite bot: https://discord.com/oauth2/authorize?client_id=869260878711771147&scope=bot&permissions=8
