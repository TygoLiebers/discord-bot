const { Client, IntentsBitField} = require('discord.js');

const client = new Client({
intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
],
})

client.on('clientReady', (c) => {
    console.log("DAMN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
})

client.on('messageCreate', (message) =>{
    if (message.content == 'damn'){
        message.reply("DAMN!!!!!!!!!!!!!!!!!!!!!!!!")
    }
})

client.login("MTQzODEwMzM2MDE2MjEwMzM2Nw.GPYYKh.4OwUzWo_I2GYkP8hoGdtwqaeCDCQFqA_HMbbHM")