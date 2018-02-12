const Discord = require('discord.js');

module.exports = (client, message) => {
  const embed = new Discord.MessageEmbed()
    .addField('Commands', '8ball\nmultiply\nadd\nsubtract\ndivide\nannounce - You need a role called "Announce Permission"\ncmds\nexe - Owner only\ninvite\nping\nsay - Owner only')
    .setColor(0xFF5233)
    .setFooter('Not case sensitive.');


  message.channel.send({ embed });
};
