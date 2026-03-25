const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
  data: new SlashCommandBuilder().setName('close').setDescription('Close ticket'),

  async execute(interaction) {
    const msgs = await interaction.channel.messages.fetch({ limit: 100 });
    const content = msgs.map(m => `${m.author.tag}: ${m.content}`).join('\n');

    fs.writeFileSync(`transcripts/${interaction.channel.id}.txt`, content);

    await interaction.reply('Closing...');
    setTimeout(() => interaction.channel.delete(), 2000);
  }
};
