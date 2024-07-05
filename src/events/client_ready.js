const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true, // This is an optional property, if not provided it will default to false

    /**
     * @param {import('../class/AdvancedClient')} client 
     */
    run: async (client) => {
        console.log('[INFO]'.blue, `Logged in as ${client.user.tag}!`);
    }
}