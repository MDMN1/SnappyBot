const Discord = require('discord.js');

module.exports = (client, message) => {
  const answer = answers[Math.floor(Math.random() * answers.length)];
  const embed = new Discord.MessageEmbed()
    .setColor(0xF1ED04)
    .setDescription(`You rolled ${answer}!`);
  message.channel.send({ embed });
};


const answers = [
  '0 (unlucky isn\'t it?',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
];
