module.exports = (client, message, args) => {
  if (message.author.id !== client.config.ownerID) return message.reply('This command is available to the owner, try !announce instead.');
  message.channel.send(args.join(' '));
  message.delete();
};

