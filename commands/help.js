const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('help').setDescription('Show commands'),

  async execute(interaction) {
    interaction.reply(`
Commands:
 /panel
 /claim
 /close
 /rename
 /modcheck
 /help
`);
  }
};
