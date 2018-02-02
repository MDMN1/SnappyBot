const Discord = require('discord.js');

module.exports = (client, message) => {
  if (!message.member.roles.has('KICK_MEMBERS')) {
    return message.reply('Kick Permission required to execute.');
  }
  if (message.mentions.users.size === 0) {
    return message.reply('Please type a user you want to kick like @Mikulasz12! jk pls no');
  }
  const kickMember = message.guild.member(message.mentions.users.first());
  if (!kickMember) {
    return message.reply('Invalid user, please use @ to mention a user');
  }
  if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
    return message.reply('I need KICK_MEMBER to execute this command!');
  }
  kickMember.kick();
  const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL())
    .setFooter('!kick')
    .setColor(0x16A085)
    .addField(`User kicked by ${message.author.username}!`, 'Reason coming soon!');
  message.channel.send({ embed });
};
