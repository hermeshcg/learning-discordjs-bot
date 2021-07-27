require('dotenv').config({ path: __dirname + '/.env' });
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

const token = process.env['DISCORD_TOKEN'];

const prefix = ',';

const servidores = {
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
  if (msg.content === prefix + 'join') {
    servidores.server.connection = await msg.member.voice.channel.join();
  }

  if (msg.content === prefix + 'pepeta1') {
    servidores.server.connection.play('./pepeta1.mp3');
  }

  if (msg.content === prefix + 'pepeta2') {
    servidores.server.connection.play('./pepeta2.mp3');
  }

  if (msg.content === prefix + 'pepeta3') {
    servidores.server.connection.play('./pepeta3.mp3');
  }

  if (msg.content === prefix + 'cavalo') {
    servidores.server.connection.play('./cavalo.mp3');
  }

  if (msg.content.startsWith(prefix + 'play')) {
    let toPlay = msg.content.slice(6);
    if (ytdl.validateURL(toPlay)) {
      servidores.server.dispatcher = servidores.server.connection.play(
        ytdl(toPlay)
      );
    } else {
      msg.reply(`${toPlay} is not a valid URL`);
    }
  }
});

client.login(token);

// link to invite bot: https://discord.com/oauth2/authorize?client_id=869260878711771147&scope=bot&permissions=8
// where i stopped https://www.youtube.com/watch?v=PnN0ORWiwMc
