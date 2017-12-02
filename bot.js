var Discord = require("discord.js");
var bot = new Discord.Client();
var config = require("./config.json");

bot.on("ready", () => {
	console.log("I am ready!");
	bot.user.setGame('Happy to help! Type !cmds')
});

bot.on('message', message => {
	if(message.author.bot) return;
	if(!message.content.startsWith(config.prefix)) return;

	let command = message.content.split(" ")[0];
	command = command.slice(config.prefix.length);

	let args = message.content.split(" ").slice(1);

	if (command === "add") {
		let numArray = args.map(n=> parseInt(n));
		let total = numArray.reduce( (p, c) => p+c);

		message.channel.sendMessage(total);
	} else

	if (command === "say") {
		message.channel.sendMessage(args.join(" "));
	} else

	if (command === "cmds") {
		message.channel.sendMessage('Here are the commands! \n **motd - Message of the day!** \n **Add - Add a number! !add 5 6** \n **Say - The bots says something you just said!**');
	} else

	if (command === "motd") {
		message.channel.sendMessage('This bot is in beta!');
	}



});



bot.login(process.env.BOT_TOKEN);
