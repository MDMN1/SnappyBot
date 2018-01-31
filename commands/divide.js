module.exports = (client, message, args) => {
  const numArray = args.map(n => parseInt(n));
  const total = numArray.reduce( (p, c) => p / c);

  message.channel.send(total);
};
