require('dotenv').config();
const motionArray = require('./motions');
const { Client } = require('discord.js');
const client = new Client();
const Prefix = '!';

client.on('ready',()=>{
    console.log(`${client.user.username}`);
});

client.on('message', (message)=>{

   
   if(!message.author.bot){
    var msg = message.content;
    if(msg.startsWith(Prefix)){
      const [command, ...args] = msg
                                .trim()
                                .substring(Prefix.length)
                                .split(/\s+/);
      
      if (command === 'time') 
        {
          
        }

      if(command == 'toss')
        {
           var toss_num = Math.floor(Math.random()*2);
           if (toss_num == 0) {            
             message.reply(':coin: was tossed & HEADS came up!');
           } else {
             message.reply(':coin: was tossed & TAILS came up!');
           }
        }

      if(command == 'motion')
        { 
          var motion_num = Math.floor(Math.random() * motionArray.length);
          message.reply('\n' + motionArray[motion_num] + '\nAll the best for the debate. :handshake: ');

        }

      if(command == 'help')
        {
          message.reply(
            '**Welcome to Loud-Clear Bot** \n' +
            '!help - to find all the commands for the bot\n' +
            '!time  *7m 20s* - to start a timer of 7m 20s \n' +
            '!toss - to toss a coin \n'+
            '!motion - to have a random motion for debate'
          ).then(console.log('help rendered to' + message.author.toString()));
        }  

    }
    

   }else{
       
       return;
   }
});
client.login(process.env.DiscordBotToken);