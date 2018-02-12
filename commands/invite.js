const Discord = require('discord.js');

module.exports = (client, message) => {
  message.reply('Check your Direct Messages!');
  const embed = new Discord.MessageEmbed()
    .setColor(0x3393FF)
    .addField('Here you go!', 'https://discordapp.com/oauth2/authorize?client_id=407179814974259200&scope=bot&permissions=2146958591');
  message.author.send({ embed });
};
