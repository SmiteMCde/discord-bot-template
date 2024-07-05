const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('admin')
        .setDescription('Admin command')
        .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),

    /**
     * @param {import('../../class/AdvancedClient')} client
     * @param {import('discord.js').CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        return await interaction.reply('Hello, World! This is an admin command!');
    }
}