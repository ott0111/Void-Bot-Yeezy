const config = require('../config');

function log(guild, msg) {
  const ch = guild.channels.cache.get(config.logChannel);
  if (ch) ch.send(msg);
}

module.exports = { log };
