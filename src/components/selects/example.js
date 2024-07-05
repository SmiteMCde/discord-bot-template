module.exports = {
    customId: 'exampleselect',

    /**
     * @param {import('../../class/AdvancedClient')} client 
     * @param {import('discord.js').AnySelectMenuInteraction} interaction 
     */
    run: async (client, interaction) => {
        return await interaction.reply('Hello, World! You selected something!');
    }
}