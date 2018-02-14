module.exports = (client) => {
  client.log('Log', `Logged in as ${client.user.tag}!`);
  client.user.setActivity('!cmds');
};
