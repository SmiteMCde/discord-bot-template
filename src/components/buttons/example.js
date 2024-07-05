module.exports = {
    customId: 'examplebutton',

    /**
     * @param {import('../../class/AdvancedClient')} client 
     * @param {import('discord.js').ButtonInteraction} interaction 
     */
    run: async (client, interaction) => {
        return await interaction.reply('Hello, World! You clicked the button!');
    }
}