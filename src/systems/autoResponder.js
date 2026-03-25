const config = require('../config');

function autoRespond(message) {
  if (
    message.channel.id === config.autoChannel &&
    message.content.toLowerCase().includes('how to join')
  ) {
    message.reply(`Check <#${config.redirectChannel}>`);
  }
}

module.exports = { autoRespond };
