const Discord = require('discord.js');

module.exports = (client, message, args) => {
  const rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!rUser) return message.channel.send('Couldn\'t find user.');
  const rreason = args.join(' ').slice(22);
  if (rreason.length === 0) return message.reply('Please enter a reason.');

  const reportEmbed = new Discord.MessageEmbed()
    .setDescription('Reports')
    .setColor('#15f153')
    .addField('Reported User', `${rUser} with ID: ${rUser.id}`)
    .addField('Reported By', `${message.author} with ID: ${message.author.id}`)
    .addField('Channel', message.channel)
    .addField('Time', message.createdAt)
    .addField('Reason', rreason);

  const reportschannel = message.guild.channels.find('name', 'reports');
  if (!reportschannel) return message.channel.send('Couldn\'t find reports channel. Are you sure that it exists and I have permission to view it?');

  reportschannel.send(reportEmbed);
  message.channel.send(reportEmbed);
  message.reply('Reported the user, this is how it will look.');
};
