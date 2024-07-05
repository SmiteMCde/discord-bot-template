const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('example')
        .setDescription('Example command')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Input something (Autocompete example)')
                .setAutocomplete(true)
                .setRequired(false)
        ),

    /**
     * @param {import('../class/AdvancedClient')} client
     * @param {import('discord.js').CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        const buttonRow = new ActionRowBuilder()
            .setComponents(
                new ButtonBuilder()
                    .setCustomId('examplebutton')
                    .setLabel('Click me!')
                    .setStyle(ButtonStyle.Primary),
            );

        const selectRow = new ActionRowBuilder()
            .setComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('exampleselect')
                    .setPlaceholder('Select something')
                    .setMinValues(1)
                    .setMaxValues(1)
                    .setOptions([
                        { label: 'Option 1', value: 'option1' },
                        { label: 'Option 2', value: 'option2' },
                        { label: 'Option 3', value: 'option3' },
                        { label: 'Option 4', value: 'option4' },
                        { label: 'Option 5', value: 'option5' }
                    ])
            )

        return await interaction.reply({
            content: 'Hello, World!',
            components: [buttonRow, selectRow]
        });
    }
}