const { ChannelType, PermissionsBitField } = require('discord.js');
const config = require('../config');
const { log } = require('./logger');

let tickets = new Map();

async function createTicket(interaction) {
  const type = interaction.customId.split('_')[1];

  let rolePing;
  if (type === 'roster') rolePing = config.rosterRole;
  if (type === 'staff') rolePing = config.staffRole;
  if (type === 'business') rolePing = config.businessRole;

  const channel = await interaction.guild.channels.create({
    name: `ticket-${type}-${interaction.user.username}`,
    type: ChannelType.GuildText,
    permissionOverwrites: [
      { id: interaction.guild.id, deny: [PermissionsBitField.Flags.ViewChannel] },
      { id: interaction.user.id, allow: [PermissionsBitField.Flags.ViewChannel] }
    ]
  });

  tickets.set(channel.id, {
    owner: interaction.user.id,
    claimed: null,
    type
  });

  channel.send(`🎫 ${type} ticket created by ${interaction.user}\n<@&${rolePing}>`);
  interaction.reply({ content: `Created ${channel}`, ephemeral: true });

  log(interaction.guild, `📩 Ticket opened (${type}) by ${interaction.user.tag}`);
}

module.exports = { createTicket, tickets };
