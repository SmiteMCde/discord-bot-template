module.exports = {
    commandName: 'example',

    /**
     * @param {import('../../class/AdvancedClient')} client 
     * @param {import('discord.js').AutocompleteInteraction} interaction 
     */
    run: async (client, interaction) => {
        console.log('Autocomplete interaction received!');
        const options = [
            { name: 'Option 1', value: 'option1' },
            { name: 'Option 2', value: 'option2' },
            { name: 'Option 3', value: 'option3' },
            { name: 'Option 4', value: 'option4' },
            { name: 'Option 5', value: 'option5' },
        ];

        return await interaction.respond(options);
    }
}