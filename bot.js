var Discord = require("discord.js");
var bot = new Discord.Client();
var prefix = "==";

bot.on("ready", () => {
	console.log("I am ready!");
	bot.user.setGame('')
});

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


bot.login(process.env.BOT_TOKEN);
