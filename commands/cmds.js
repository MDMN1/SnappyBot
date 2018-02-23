const Discord = require('discord.js');

module.exports = (client, message) => {
  const embed = new Discord.MessageEmbed()
    .addField('Commands', '8ball - Ask a question and it will predict your future!\nmultiply\nadd\nsubtract\ndivide\nannounce - You need a role called "Announce Permission"\ncmds\ninvite - Invites the bot to your server\nping - Checks the Latency along with the API Latency\nabout - About the bot\nmyinfo - Displays your info\nKick - Kicks a user (kick_members permission)\nBan - Bans a user (ban_members permission)\nReport - Reports a user\nCat - MEOW MEOW HISS! Shows a random cute cat! \nDog - BARK BARK BITE! Shows a random cute dog!\nDice - Picks a number from 1 to 10. \nclean - Cleans a certain amount of messages up to 100.\nweather - Shows real time weather based on what you typed, recommended to do in private messages.')
    .addField('Owner only', 'Say - Makes the bot say something \nsetgame - Owner only, sets the status of the bot (what game he is playing)\nresetgame - Resets the game to !cmds | !invite')
    .setColor(0xFF5233)
    .setFooter('Not case sensitive.');
  message.channel.send({ embed });
};

