const { Client: DiscordClient, IntentsBitField } = require('discord.js');
const { joinVoiceChannel, getVoiceConnection  } = require('@discordjs/voice');
const ytdl = require('ytdl-core');
const Spotify = require('spotify-api.js');
const ytSearch = require('yt-search');

const { token } = require('../token.js'); // your Discord token

// ----------------------
// Discord client setup
// ----------------------
const discordClient = new DiscordClient({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
});

discordClient.once('clientReady', () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);
});

// Simple test message
discordClient.on('messageCreate', (message) => {
  if (message.content === 'damn') {
    message.reply("DAMN!!!!!!!!!!!!!!!!!!!!!!!!");
  }
});

discordClient.login(token);



















// discordClient.on('messageCreate', async (message) => {
//   if (message.content.startsWith('!play ')) {
//     const spotifyURL = message.content.split(' ')[1];

//     // Check voice channel
//     const member = message.member;
//     if (!member) return message.reply("Couldn't find you in the server!");
//     const voiceChannel = member.voice.channel;
//     if (!voiceChannel) return message.reply("You need to join a voice channel first!");

//     await playSpotifyTrackOnDiscord(voiceChannel, spotifyURL);
//   }
// });


// // ----------------------
// // Spotify client setup
// // ----------------------
// const spotify = new Spotify.Client({
//   token: 'YOUR_SPOTIFY_OAUTH_TOKEN' // replace with your Spotify OAuth token
// });


// async function playYouTubeAudio(voiceChannel, youtubeURL) {
//   const connection = joinVoiceChannel({
//     channelId: voiceChannel.id,
//     guildId: voiceChannel.guild.id,
//     adapterCreator: voiceChannel.guild.voiceAdapterCreator
//   });

//   const stream = ytdl(youtubeURL, {
//     filter: 'audioonly',
//     quality: 'highestaudio',
//     highWaterMark: 1 << 25
//   });

//   const resource = createAudioResource(stream);
//   const player = createAudioPlayer({
//     behaviors: { noSubscriber: NoSubscriberBehavior.Pause }
//   });

//   player.play(resource);
//   connection.subscribe(player);

//   player.on(AudioPlayerStatus.Idle, () => {
//     connection.destroy();
//   });
// }

// async function playSpotifyTrackOnDiscord(voiceChannel, spotifyURL) {
//   try {
//     const track = await spotify.tracks.get(spotifyURL);
//     const query = `${track.name} ${track.artists[0].name}`;

//     const result = await ytSearch(query);
//     const video = result.videos[0];
//     if (!video) throw new Error('No matching YouTube video found');

//     await playYouTubeAudio(voiceChannel, video.url);
//   } catch (err) {
//     console.error(err);
//   }
// }

// discordClient.on('messageCreate', async (message) => {
//   if (message.content.startsWith('bah')) {
//     const spotifyURL = message.content.split(' ')[1];
//     const voiceChannel = discordClient.channels.cache.get(message.member.voice.channelId)
//     if (!voiceChannel) return console.error("The channel does not exist!");

//     voiceChannel.join().then(connection => {
//         console.log("Successfully connected.");
//     }).catch(e => {
//         console.error(e);
//     });


//     // if (!voiceChannel) return message.reply("Join a voice channel first!");
//     // await playSpotifyTrackOnDiscord(voiceChannel, spotifyURL);
//   }
// });
