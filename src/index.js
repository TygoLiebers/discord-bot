const { Client: DiscordClient, IntentsBitField } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
const play = require('play-dl')

const { token } = require('../token.js'); // your discord token

var connection = null
var player = createAudioPlayer();

// discord client setup
const discordClient = new DiscordClient({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildVoiceStates
  ]
});

discordClient.once('clientReady', () => {
  console.log('DAMN!!!!!!!!!!!!!!!!!!!!!!!!');
});


//basic message
discordClient.on('messageCreate', (message) => {
  if (message.content === 'damn') {
    message.reply("DAMN!!!!!!!!!!!!!!!!!!!!!!!!");
  }
});

//join call
discordClient.on('messageCreate', (message) => {
    if (message.content === '!join') {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply("cannot find what voice channel youre in");

        connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: voiceChannel.guild.id,
            adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        });
    }
});

//play audio
discordClient.on('messageCreate', async (message) => {
  if (message.content.startsWith('!play')) {
    playAudio();
  }
});

async function playAudio() {
    const resource = createAudioResource('../bird.mp3');
    player.play(resource);
    connection.subscribe(player);
}

discordClient.login(token);









