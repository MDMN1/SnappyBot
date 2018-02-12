const Discord = require('discord.js');

module.exports = (client, message) => {
  const embed = new Discord.MessageEmbed()
    .addField('Commands', '8ball - Ask a question and it will predict your future!\nmultiply\nadd\nsubtract\ndivide\nannounce - You need a role called "Announce Permission"\ncmds\nexe - Owner only\ninvite - Invites the bot to your server\nping - Checks the Latency along with the API Latency\nabout - About the bot\nsay - Owner only')
    .setColor(0xFF5233)
    .setFooter('Not case sensitive.');
  message.channel.send({ embed });
};
