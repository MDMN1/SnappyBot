const Discord = require('discord.js');

module.exports = (client, message) => {
  const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL())
    .setFooter('!invite')
    .addField('User Input', 'Check your direct messages!')
    .setColor(0x16A085);
  message.channel.send({ embed });
  message.author.send('The bot is not ready to get released to the public!');
};
