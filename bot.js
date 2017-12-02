var Discord = require("discord.js");
var bot = new Discord.Client();
var prefix = "!";

bot.on("ready", () => {
	console.log("I am ready!");
	bot.user.setGame('!cmds')
});

bot.on('message', message => {
	if(message.author.bot) return;
	if(!message.content.startsWith(prefix)) return;

	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);

	let args = message.content.split(" ").slice(1);

	if (command === "add") {
		let num1 = parseInt(args[0]);
		let num2 = parseInt(args[1]);
		message.channel.sendMessage(num1 + num2)
	} else

	if (command === "say") {
		message.channel.sendMessage(args.join(" "));
	} else

	if (command === "cmds") {
		message.channel.sendMessage('Here are the commands! \n \n**motd - Message of the day!** \n \n**Add - Add a number! ==add 5 6**');
	} else

	if (command === "motd") {
		message.channel.sendMessage('This bot is in bvar Discord = require("discord.js");
var bot = new Discord.Client();
var prefix = "==";

bot.on("ready", () => {
	console.log("I am ready!");
	bot.user.setGame('==cmds')
});

bot.on('message', message => {
	if(message.author.bot) return;
	if(!message.content.startsWith(prefix)) return;

	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);

	let args = message.content.split(" ").slice(1);

	if (command === "add") {
		let num1 = parseInt(args[0]);
		let num2 = parseInt(args[1]);
		message.channel.sendMessage(num1 + num2)
	} else

	if (command === "say") {
		message.channel.sendMessage(args.join(" "));
	} else

	if (command === "cmds") {
		message.channel.sendMessage('Here are the commands! \n **motd - Message of the day!** \n **Add - Add a number! ==add 5 6** \n **Say - The bot says something you just said!**');
	} else

	if (command === "motd") {
		message.channel.sendMessage('This bot is in beta!');
	}



});



bot.login(process.env.BOT_TOKEN);
