const { log } = require('../systems/logger');

let actions = {};

module.exports = (client) => {

  function detect(userId, guild) {
    if (!actions[userId]) actions[userId] = 0;
    actions[userId]++;

    setTimeout(() => actions[userId]--, 10000);

    if (actions[userId] >= 3) {
      const member = guild.members.cache.get(userId);
      if (member) {
        member.kick().catch(() => {});
        log(guild, `🚨 Anti-nuke: Kicked ${member.user.tag}`);
      }
    }
  }

  client.on('channelDelete', async (channel) => {
    const logs = await channel.guild.fetchAuditLogs({ limit: 1 });
    const entry = logs.entries.first();
    if (entry) detect(entry.executor.id, channel.guild);
  });

  client.on('roleDelete', async (role) => {
    const logs = await role.guild.fetchAuditLogs({ limit: 1 });
    const entry = logs.entries.first();
    if (entry) detect(entry.executor.id, role.guild);
  });
};
