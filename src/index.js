const { Client: DiscordClient, IntentsBitField } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer } = require('@discordjs/voice');
const play = require('play-dl')

const { token } = require('../token.js'); // your Discord token

var connection = null
var player = createAudioPlayer();

// Discord client setup
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
        if (!voiceChannel) return message.reply("bro WHERE ARE YOU");

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
    const url = message.content.split(' ')[1];
    if (!url) return message.reply("add a url man");

    playAudio(url);
  }
});

async function playAudio(url) {
    console.log(url)
    const stream = await play.stream(url);
    const resource = createAudioResource(stream.stream, { inputType: stream.type });

    connection.subscribe(player);
    player.play(resource);
}

discordClient.login(token);









