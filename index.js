/* eslint consistent-return: 0, no-console: 0 */
const Discord = require('discord.js');

const client = new Discord.Client();
client.config = require('./config.json');

client.log = require('./functions/log.js');

client.commands = new Discord.Collection();

client.commands.set('ping', require('./commands/ping.js'));
client.commands.set('announce', require('./commands/announce.js'));
client.commands.set('say', require('./commands/say.js'));
client.commands.set('kick', require('./commands/kick.js'));
client.commands.set('ban', require('./commands/ban.js'));
client.commands.set('exe', require('./commands/exe.js'));
client.commands.set('cmds', require('./commands/cmds.js'));

client.on('message', message => require('./events/message.js')(client, message));
client.on('guildCreate', guild => require('./events/guildCreate.js')(client, guild));
client.on('ready', () => require('./events/ready.js')(client));
client.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(client, member));

client.login(client.config.token);
