const Discord = require('discord.js');

module.exports = (client, message) => {
  const embed = new Discord.MessageEmbed()
    .addField(message.author.username, 'These are your stats.')
    .addField('Full Username:', `${message.author.username}#${message.author.discriminator}`)
    .addField('ID', message.author.id)
    .addField('Created At', message.author.createdAt);
  message.channel.send({ embed });
};
