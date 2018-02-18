const Discord = require('discord.js');

module.exports = (client, message) => {
  const embed = new Discord.MessageEmbed()
    .addField('Commands', '8ball - Ask a question and it will predict your future!\nmultiply\nadd\nsubtract\ndivide\nannounce - You need a role called "Announce Permission"\ncmds\nexe - Owner only\ninvite - Invites the bot to your server\nping - Checks the Latency along with the API Latency\nabout - About the bot\nmyinfo - Displays your info\nKick - Kicks a user (kick_members permission)\nBan - Bans a user (ban_members permission)\nsay - Owner only\nReport - Reports a user\nCat - MEOW MEOW HISS! Shows a random cute cat! \nDog - BARK BARK BITE! Shows a random cute dog!\nsetgame - Owner only, sets the status of the bot (what game he is playing)\nDice - Picks a number from 0 to 6.')
    .setColor(0xFF5233)
    .setFooter('Not case sensitive.');
  message.channel.send({ embed });
};
