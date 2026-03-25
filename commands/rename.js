const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rename')
    .setDescription('Rename ticket')
    .addStringOption(o => o.setName('name').setRequired(true)),

  async execute(interaction) {
    const name = interaction.options.getString('name');
    await interaction.channel.setName(name);
    interaction.reply('Renamed');
  }
};
