var Discord = require("discord.js");
var bot = new Discord.Client();
var prefix = "!";

bot.on("ready", () => {
	console.log("I am ready!");
	bot.user.setGame('Hiya! !cmds')
});

bot.on('message', message => {
	if(message.author.bot) return;
	if(!message.content.startsWith(prefix)) return;

	if(message.content.startsWith(prefix + "cmds")) {
		message.channel.sendMessage('Here are the commands: **motd - Message of the day!**');
	} else

	if(message.content.startsWith(prefix + "motd")) {
		message.channel.sendMessage('');
	}


	
});



bot.login(process.env.BOT_TOKEN);
