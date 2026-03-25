const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('panel').setDescription('Send ticket panel'),

  async execute(interaction) {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('ticket_roster').setLabel('Roster').setStyle(ButtonStyle.Primary),
      new ButtonBuilder().setCustomId('ticket_staff').setLabel('Staff').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('ticket_business').setLabel('Business').setStyle(ButtonStyle.Secondary)
    );

    interaction.reply({ content: 'Open a ticket:', components: [row] });
  }
};
