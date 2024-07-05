module.exports = {
    customId: 'examplemodal',
    
    /**
     * @param {import('../../class/AdvancedClient')} client
     * @param {import('discord.js').ModalSubmitInteraction} interaction
     */
    run: async (client, interaction) => {
        return await interaction.reply('Hello, World! This is a modal submission!');
    }
}