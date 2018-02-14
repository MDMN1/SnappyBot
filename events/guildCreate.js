module.exports = (client, guild, message) => {
  client.log('Log', `I have been added to the guild: ${guild.name}, Owned by: ${guild.owner.user.tag}, with ${guild.memberCount} members.`);
  message.defaultChannel.send('Hello, thanks for adding me! In order for the bot to function properly, you have to add these channels: #action-logs, #reports. If you want me to kick users, you will have to give me ban and kick permission.');
};
