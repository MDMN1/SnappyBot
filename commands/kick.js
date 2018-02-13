const Discord = require('discord.js');

module.exports = (client, message, args) => {
  if (message.channel.type === 'dm') return message.reply('Sorry, you are not allowed to use this command in your PM\'s');
  const kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!kUser) return message.channel.send('Can\'t find user!');
  const kReason = args.join(' ').slice(22);
  if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You are missing a permission by the name of KICK_MEMBERS');
  if (kUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send('That person can\'t be kicked!');

  if (kReason.length === 0) return message.reply('Please enter a reason.');

  const embed = new Discord.MessageEmbed()
    .setDescription('~Kick~')
    .setColor('#e56b00')
    .addField('Kicked User', `${kUser} with ID ${kUser.id}`)
    .addField('Kicked By', `<@${message.author.id}> with ID ${message.author.id}`)
    .addField('Kicked In', message.channel)
    .addField('Time', message.createdAt)
    .addField('Reason', kReason);
  message.channel.send({ embed });


  const actionlog = message.guild.channels.find('name', 'action-logs');
  if (!actionlog) return message.channel.send('Can\'t find action-log channel. Are you sure that this channel exists and I have permission to view it?');

  message.guild.member(kUser).kick(kReason);
  actionlog.send(embed);
};
