const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = async (client, message) => {
  const { body } = await superagent
    .get('https://random.dog/woof.json');

  const embed = new Discord.MessageEmbed()
    .setDescription(':dog2: BARK BARK!')
    .setImage(body.url)
    .setColor(0xFFE333);

  message.channel.send(embed);
};
