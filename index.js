/* eslint consistent-return: 0, no-console: 0 */
const Discord = require('discord.js');

const client = new Discord.Client();
client.config = require('./config.json');


client.log = require('./functions/log.js');

client.commands = new Discord.Collection();

client.commands.set('ping', require('./commands/ping.js'));
client.commands.set('announce', require('./commands/announce.js'));
client.commands.set('say', require('./commands/say.js'));
client.commands.set('cmds', require('./commands/cmds.js'));
client.commands.set('8ball', require('./commands/8ball.js'));
client.commands.set('invite', require('./commands/invite.js'));
client.commands.set('add', require('./commands/add.js'));
client.commands.set('multiply', require('./commands/multiply.js'));
client.commands.set('divide', require('./commands/divide.js'));
client.commands.set('subtract', require('./commands/subtract.js'));
client.commands.set('about', require('./commands/about.js'));
client.commands.set('myinfo', require('./commands/myinfo.js'));
client.commands.set('kick', require('./commands/kick.js'));
client.commands.set('ban', require('./commands/ban.js'));
client.commands.set('report', require('./commands/report.js'));
client.commands.set('dog', require('./commands/dog.js'));
client.commands.set('cat', require('./commands/cat.js'));
client.commands.set('setgame', require('./commands/setGame.js'));
client.commands.set('dice', require('./commands/dice.js'));
client.commands.set('resetgame', require('./commands/resetgame.js'));
client.commands.set('clean', require('./commands/clean.js'));

client.on('message', message => require('./events/message.js')(client, message));
client.on('guildCreate', guild => require('./events/guildCreate.js')(client, guild));
client.on('ready', () => require('./events/ready.js')(client));
client.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(client, member));

client.login(client.config.token);
