module.exports = {
  token: process.env.DISCORD_TOKEN,
  clientId: process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID,

  whitelistRole: process.env.WHITELIST_ROLE,
  logChannel: process.env.LOG_CHANNEL,

  rosterRole: process.env.ROSTER_ROLE,
  staffRole: process.env.STAFF_ROLE,
  businessRole: process.env.BUSINESS_ROLE,

  autoChannel: process.env.AUTO_CHANNEL,
  redirectChannel: process.env.REDIRECT_CHANNEL
};
