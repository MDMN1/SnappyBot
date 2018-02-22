const fs = require('fs');

module.exports = (client, message) => {
  const prefixes = JSON.parse(fs.readFileSync('./Storage/prefixes.json'), 'utf8');

  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: client.config.prefix,
    };
  }

  const prefixcheck = prefixes[message.guild.id].prefixes || client.config.prefix;

  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: client.config.prefix,
    };
  }

  if (message.author.bot) return;
  if (!message.content.startsWith(prefixcheck)) return;

  if (message.content.indexOf(prefixcheck) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (client.commands.has(command)) {
    client.commands.get(command)(client, message, args);
  }
};
