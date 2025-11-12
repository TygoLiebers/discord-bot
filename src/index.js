const { Client, IntentsBitField} = require('discord.js')
const { token } = require('../token.js');;

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

client.login(token)