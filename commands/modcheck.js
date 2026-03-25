const { SlashCommandBuilder } = require('discord.js');
const { getStats } = require('../systems/modStats');

module.exports = {
  data: new SlashCommandBuilder().setName('modcheck').setDescription('Staff stats'),

  async execute(interaction) {
    const stats = getStats();

    let text = '';

    stats.forEach((data, id) => {
      const member = interaction.guild.members.cache.get(id);
      if (!member) return;

      const role = member.roles.highest.name;
      text += `${member.user.username} - ${role} - Tickets: ${data.tickets} - Messages: ${data.messages}\n`;
    });

    interaction.reply(text || 'No data');
  }
};
