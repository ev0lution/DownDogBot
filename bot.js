const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Hello, I am DownDog, developed my @Pelex and @Ev0!');
  	)
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
