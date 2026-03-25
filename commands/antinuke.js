const { SlashCommandBuilder } = require('discord.js');
const config = require('../config');

// simple global toggle (shared with events)
let enabled = true;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('antinuke')
    .setDescription('Toggle anti-nuke system'),

  async execute(interaction) {
    // ✅ Whitelist check
    if (!interaction.member.roles.cache.has(config.whitelistRole)) {
      return interaction.reply({ content: '❌ No permission.', ephemeral: true });
    }

    // 🔁 Toggle
    enabled = !enabled;

    // 💬 Reply
    await interaction.reply({
      content: `🛡️ Anti-Nuke is now **${enabled ? 'ENABLED' : 'DISABLED'}**`
    });

    // Store state globally so events can use it
    global.antiNukeEnabled = enabled;
  }
};
