function autoMod(message) {
  const badWords = ['discord.gg/', 'free nitro'];

  if (badWords.some(w => message.content.toLowerCase().includes(w))) {
    message.delete().catch(() => {});
    message.channel.send(`${message.author}, not allowed.`);
  }

  if (message.content.length > 500) {
    message.delete().catch(() => {});
  }
}

module.exports = { autoMod };
