const Discord = require('discord.js');
const weather = require('weather-js');


module.exports = (client, message, args) => {
  weather.find({ search: args.join(' '), degreeType: 'F' }, function (err, result) { // Make sure you get that args.join part, since it adds everything after weather.
    if (err) message.channel.send(err);

    // We also want them to know if a place they enter is invalid.
    if (result.length === 0) {
      message.channel.send('**Please enter a valid location.**');
      return;
    }

    const current = result[0].current; // This is a constiable for the current part of the JSON output
    const location = result[0].location;

    const embed = new Discord.MessageEmbed()
      .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
      .setAuthor(`Weather for ${current.observationpoint}`)
      .setThumbnail(current.imageUrl)
      .setColor(0x00AE86)
      .addField('Timezone', `UTC${location.timezone}`, true)
      .addField('Degree Type', location.degreetype, true)
      .addField('Temperature', `${current.temperature} Degrees`, true)
      .addField('Feels Like', `${current.feelslike} Degrees`, true)
      .addField('Winds', current.winddisplay, true)
      .addField('Humidity', `${current.humidity}%`, true);

    // Now, let's display it when called
    message.channel.send({ embed });
  });
};
