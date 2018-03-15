const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Hello, I am DownDog, developed my @Pelex and @Ev0!');
        
client.on('message', message => {
    if (message.content === '!updog'); {
        message.replay('This command will be able to send links at a later date.);
  	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
