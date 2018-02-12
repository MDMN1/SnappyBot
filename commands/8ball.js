const Discord = require('discord.js');

module.exports = (client, message, args) => {
  const question = questions = args.join(' ');
  const answer = answers[Math.floor(Math.random() * answers.length)];
  const embed = new Discord.MessageEmbed() 
    /*.setThumbnail(message.guild.iconURL())*/
    .setFooter(`The Magic !8ball`)
    .setColor(0xFFC733)
    .addField(`${question}`, `${answer}`);
  message.channel.send({ embed });
};


const answers = [
  'Signs point to yes.',
  'Yes.',
  'Reply hazy, try again.',
  'Without a doubt.',
  'My sources say no.',
  'As I see it, yes.',
  'You may rely on it.',
  'Concentrate and ask again.',
  'Outlook not so good.',
  'It is decidedly so.',
  'Better not tell you now.',
  'Very doubtful.',
  'Yes - definitely.',
  'It is certain.',
  'Cannot predict now.',
  'Most likely.',
  'Ask again later.',
  'My reply is no.',
  'Outlook good.',
  'Don\'t count on it.',
  'Who cares?',
  'Never, ever, ever.',
  'Possibly.',
  'There is a small chance.',
  'Why would you ask that question..',
  'Maybe, I am too dumb to figure it out.',
  'Maybe, let me check, sorry no.',
  'Maybe, let me check, yes!'
];
