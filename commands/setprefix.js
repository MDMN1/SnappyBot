const Discord = require('discord.js');
const fs = require('fs');

module.exports = (client, message, args) => {
  if (message.channel.type === 'dm') return message.reply('Sorry, you are not allowed to use this command in your PM\'s');
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You need administrator permission to execute this!');

  const prefixes = JSON.parse(fs.readFileSync('./Storage/prefixes.json'), 'utf8');
  prefixes[message.guild.id] = {
    prefixes: args[0],
  };

  fs.writeFile('./Storage/prefixes.json', JSON.stringify(prefixes), (err) => {
    if (err) message.reply(`An unknown error occured: ${err}`);
  });

  const embed = new Discord.MessageEmbed()
    .setColor(0xFFBE33)
    .setTitle(`Set prefix to ${args[0]}`);
  message.channel.send({ embed });
};
