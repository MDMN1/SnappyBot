const Discord = require('discord.js');

module.exports = (client, message) => {
  const user = message.mentions.users.first() || message.author;

  if (user.presence.activity !== null && user.presence.activity.type === 'LISTENING' && user.presence.activity.name === 'Spotify' && user.presence.activity.assets !== null) {
    //  Variables
    const trackIMG = `https://i.scdn.co/image/${user.presence.activity.assets.largeImage.slice(8)}`;
    const trackURL = `https://open.spotify.com/track/${user.presence.activity.syncID}`;
    const trackName = user.presence.activity.details;
    const trackAuthor = user.presence.activity.state;
    const trackAlbum = user.presence.activity.assets.largeText;
    //  Code
    const embed = new Discord.MessageEmbed()
      .setAuthor('Spotify Track Info', 'https://cdn.discordapp.com/emojis/408668371039682560.png')
      .setColor(0x1ED760)
      .setThumbnail(trackIMG)
      .addField('Song Name', trackName, true)
      .addField('Album', trackAlbum, true)
      .addField('Author', trackAuthor, false)
      .addField('Listen to Track:', `[\`${trackURL}\`](trackURL)`, false);
    message.channel.send({ embed });
  } else {
    message.channel.send('User not listening to **Spotify!**');
  }
};
