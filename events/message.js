module.exports = (client, message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith('!')) return;
  if (message.channel.type === 'dm') return message.reply("Sorry, you are not allowed to use this bot in your PM's!");

  if (message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (client.commands.has(command)) {
    client.commands.get(command)(client, message, args)
  }
};
