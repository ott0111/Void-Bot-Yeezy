const { autoRespond } = require('../systems/autoResponder');
const { toxicReply } = require('../systems/toxicReplies');
const { autoMod } = require('../systems/autoMod');
const { trackMessage } = require('../systems/modStats');

module.exports = (client) => {
  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    trackMessage(message);
    autoRespond(message);
    toxicReply(message);
    autoMod(message);
  });
};
