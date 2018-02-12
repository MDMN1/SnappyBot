const Discord = require('discord.js');

module.exports = (client, message, args) => {
  if (message.channel.type === 'dm') return message.reply('Sorry, you are not allowed to use this command in your PM\'s');
  const AnnouncePerm = message.guild.roles.find('name', 'Announce Permission');
  if (!message.guild.roles.find('name', 'Announce Permission')) return message.reply('You need to create a role called "Announce Permission".');
  if (!message.member.roles.has(AnnouncePerm.id)) {
    return message.channel.send('You do not have enough **permissions** to execute this command (Announce Permission required!)');
  }
  const announce = announcement = args.join(' ');
  const embed = new Discord.MessageEmbed() 
    .setThumbnail(message.guild.iconURL())
    .setFooter('Server owned by ' + message.guild.owner.user.tag, message.guild.owner.user.avatarURL())
    .setColor(0x16A085)
    .addField(`Announcement by ${message.author.username}!`, `${announcement}`);
  message.channel.send({ embed });
  message.delete();
};
