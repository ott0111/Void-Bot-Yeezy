const { Events } = require('discord.js');

module.exports = (client) => {
  client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isChatInputCommand()) {
      const cmd = client.commands.get(interaction.commandName);
      if (!cmd) return;

      try {
        await cmd.execute(interaction);
      } catch (err) {
        console.error(err);
      }
    }

    // BUTTONS
    if (interaction.isButton()) {
      const { createTicket } = require('../systems/ticketSystem');
      await createTicket(interaction);
    }
  });
};
