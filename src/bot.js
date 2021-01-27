require('dotenv').config();
const { Client } = require('discord.js');

const client = new Client();
client.on('ready',()=>{
    console.log(`${client.user.username}`);
});

client.on('message', (message)=>{
   var msg = message.content;
   if(msg.startsWith('!t')){
       message.reply(' requested a timer');
   }
});
client.login(process.env.DiscordBotToken);