const Discord = require('discord.js');

module.exports = (client, message) => {
  const embed = new Discord.MessageEmbed()
    .setColor(0xFF33AF)
    .addField('About', 'This bot was made by Mikulasz12. He is trying to improve the bot and make it more awesome!')
    .addField('Info', '\n**Default Prefix**: !\n**Host**: Heroku');
  message.channel.send({ embed });
};
