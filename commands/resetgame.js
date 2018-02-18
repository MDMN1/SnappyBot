const Discord = require('discord.js');

module.exports = (client, message) => {
  if (message.author.id !== client.config.ownerID) return;
  client.user.setActivity('!cmds | !invite');
  const embed = new Discord.MessageEmbed()
    .setColor(0x64E01D)
    .setDescription(':white_check_mark: Done, changes should now take effect! Sometimes, they might not.');
  message.channel.send({ embed });
};
