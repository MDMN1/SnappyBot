const Discord = require('discord.js');

module.exports = (client, message, args) => {
  if (message.channel.type === 'dm') return message.reply('Sorry, you are not allowed to use this command in your PM\'s');
  const bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!bUser) return message.channel.send('Can\'t find user!');
  const bReason = args.join(' ').slice(22);
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You are missing a permission by the name of BAN_MEMBERS');
  if (bUser.hasPermission('MANAGE_MESSAGES')) return message.channel.send('That person can\'t be kicked!');

  if (bReason.length === 0) return message.reply('Please enter a reason.');

  const embed = new Discord.MessageEmbed()
    .setDescription('~Ban~')
    .setColor('#bc0000')
    .addField('Banned User', `${bUser} with ID ${bUser.id}`)
    .addField('Banned By', `<@${message.author.id}> with ID ${message.author.id}`)
    .addField('Banned In', message.channel)
    .addField('Time', message.createdAt)
    .addField('Reason', bReason);
  message.channel.send({ embed });

  const actionlog = message.guild.channels.find('name', 'action-logs');
  if (!actionlog) return message.channel.send('Can\'t find action-logs channel. Are you sure that this channel exists and I have permission to view it?');

  message.guild.member(bUser).ban(bReason);
  actionlog.send(embed);
};
