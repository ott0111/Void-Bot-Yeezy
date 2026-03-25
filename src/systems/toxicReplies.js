function toxicReply(message) {
  const triggers = ['bot trash', 'bot sucks', 'stupid bot'];

  if (triggers.some(t => message.content.toLowerCase().includes(t))) {
    message.reply('you talk a lot for someone with no perms 💀');
  }
}

module.exports = { toxicReply };
