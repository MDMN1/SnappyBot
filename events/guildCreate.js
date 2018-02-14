module.exports = (client, guild, message) => {
  client.log('Log', `I have been added to the guild: ${guild.name}, Owned by: ${guild.owner.user.tag}, with ${guild.memberCount} members.`);
};
