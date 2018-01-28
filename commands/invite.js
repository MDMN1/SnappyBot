const Discord = require('discord.js');

module.exports = (client, message) => {
  const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL())
    .setFooter('Please check your direct messages.')
    .setColor(0x16A085);
  message.channel.send({ embed });
};
