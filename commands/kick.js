module.exports = (client, message) => {
  const KickRole = message.guild.roles.find('name', 'Kick Permission');
  if (!message.member.roles.hasPermission('KICK_MEMBERS')) {
    return message.reply('Kick Permission role required, to execute.');
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
  message.channel.send('User has been successfully kicked!')
};
