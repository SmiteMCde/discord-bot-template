const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,

    /**
     * @param {import('../class/AdvancedClient')} client 
     * @param {import('discord.js').Interaction} interaction 
     */
    run: async (client, interaction) => {
        if (interaction.isCommand()) {
            const command = client.collection.commands.get(interaction.commandName);
            if (!command) return;

            try {
                return await command.run(client, interaction);
            } catch (error) {
                console.error(error);
                return await interaction.reply({ content: '> There was an error while executing this command!', ephemeral: true });
            }
        } else if (interaction.isAutocomplete()) {
            const autocomplete = client.collection.components.autocompletes.get(interaction.commandName);
            if (!autocomplete) return;

            try {
                return await autocomplete.run(client, interaction);
            } catch (error) {
                console.error(error);
            }
        } else if (interaction.isButton()) {
            const button = client.collection.components.buttons.get(interaction.customId);
            if (!button) return;

            try {
                return await button.run(client, interaction);
            } catch (error) {
                console.error(error);
                return await interaction.reply({ content: '> There was an error while executing this button!', ephemeral: true });
            }
        } else if (interaction.isAnySelectMenu()) {
            const select = client.collection.components.selects.get(interaction.customId);
            if (!select) return;

            try {
                return await select.run(client, interaction);
            } catch (error) {
                console.error(error);
                return await interaction.reply({ content: '> There was an error while executing this select menu!', ephemeral: true });
            }
        } else if (interaction.isModalSubmit()) {
            const modal = client.collection.components.modals.get(interaction.customId);
            if (!modal) return;

            try {
                return await modal.run(client, interaction);
            } catch (error) {
                console.error(error);
                return await interaction.reply({ content: '> There was an error while executing this modal!', ephemeral: true });
            }
        }
    }
}