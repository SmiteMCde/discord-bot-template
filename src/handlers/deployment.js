const { REST, Routes } = require('discord.js');
const AdvancedClient = require('../class/AdvancedClient');
const config = require('../../config.json');

/**
 * @param {AdvancedClient} client
 */
module.exports = async (client) => {
    const rest = new REST({ version: '10' }).setToken(config.token);

    try {
        console.log('[INFO]'.blue, 'Started loading application commands... (this might take minutes!)');

        await rest.put(Routes.applicationCommands(client.user.id), {
            body: client.applicationcommandsArray,
        });

        console.log('[INFO]'.blue, 'Successfully loaded application commands globally to Discord API.');
    } catch (e) {
        console.error(e)
        console.error('[ERROR]'.red, `Unable to load application commands to Discord API: ${e.message}`);
    }
}