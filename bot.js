var Discord = require("discord.js");
var bot = new Discord.Client();
var config = require("./config.json");

bot.on("ready", () => {
	console.log("I am ready!");
	bot.user.setGame('Happy to help! Type !cmds')
});

bot.on("guildMemberAdd", member => {
	let guild = member.guild;
	guild.defaultChannel.sendMessage(`Welcome ***${member.user.username}*** to ${guild.name}`);
});

bot.on("guildCreate", guild => {
	console.log(`New guild added : ${guild.name}, owned by ${guild.owner.user.username}`);
});

bot.on("presenceUpdate", (oldMember, newMember) => {
	let guild = newMember.guild;
	let playRole = guild.roles.find("name", "Playing ROBLOX");
	if(!playRole) return;

	if(newMember.user.presence.game && newMember.user.presence.game.name === "ROBLOX") {
		newMember.addRole(playRole);
	} else if(!newMember.user.presence.game && newMember.roles.has(playRole.id)) {
		newMember.removeRole(playRole);
	}
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
		let AdminRole = message.guild.roles.find("name", "Admin", "Main Owner", "Head-Admin", "Operator", "💬Active-Users💬", "💥Veteran💥");
		if(!message.member.roles.has(AdminRole.id)) {
			return message.channel.sendMessage("This command is only available to 💬Active-Users💬+ due to abusers, sorry! **(This command might be brought back!)**");
		}
		message.channel.sendMessage(args.join(" "));
	} else

	if (command === "cmds") {
		message.channel.sendMessage('Here are the commands! \n **motd - Message of the day!** \n **Add - Add a number! !add 5 6** \n **Say - The bots says something you just said! (Active-Users+ only!)** \n **Kick - Kicks a player (Operator+ only!)**');
	} else
s
	if (command === "motd") {
		message.channel.sendMessage('**Merry christmas!**');
	}

	if (command === "kick") {
		let AdminRole = message.guild.roles.find("name", "Admin", "Head-Admin");
		if(!message.member.roles.has(AdminRole.id)) {
			return message.reply("Not enough permissions! Operator+ role required!");
		}
		if(message.mentions.users.size === 0) {
			return message.reply("Please mention the user you want to kick!");
		}
		let kickMember = message.guild.member(message.mentions.users.first());
		if(!kickMember) {
			return message.reply("That user doesn't exist!");
		}
		if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
			return message.reply("Sorry, I don't have the permissions to **KICK**! Please give it to me.");
		}
		kickMember.kick().then(member => {
			message.reply(`${member.user.username} was successfully kicked!`);
		});
	}

	if (command === "pmall") {
		message.users.sendMessage("Hi");
	}



});


bot.login(process.env.BOT_TOKEN);
