const Discord = require('discord.js');

module.exports = (client, message, args) => {
  if (message.author.id !== process.env.ownerID) return;
  const status = realstatus = args.join(' ');
  if (status.length === 0) {
    const embed = new Discord.MessageEmbed()
      .setColor(0xFF0000)
      .setDescription(':x: Your argument can\'t be empty.');
    message.channel.send({ embed });
    return;
  }
  client.user.setActivity(`${status}`);
  const embed = new Discord.MessageEmbed()
    .setColor(0x64E01D)
    .setDescription(':white_check_mark: Done, changes should now take effect! Sometimes, they might not.');
  message.channel.send({ embed });
};
