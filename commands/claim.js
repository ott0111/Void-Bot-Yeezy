const { SlashCommandBuilder } = require('discord.js');
const { tickets } = require('../systems/ticketSystem');
const { addTicket } = require('../systems/modStats');

module.exports = {
  data: new SlashCommandBuilder().setName('claim').setDescription('Claim ticket'),

  async execute(interaction) {
    const data = tickets.get(interaction.channel.id);
    if (!data) return interaction.reply('Not a ticket');

    data.claimed = interaction.user.id;
    addTicket(interaction.user.id);

    interaction.reply(`Claimed by ${interaction.user}`);
  }
};
