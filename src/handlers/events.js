const { readdirSync } = require('node:fs');
const AdvancedClient = require('../class/AdvancedClient');

/**
 * @param {AdvancedClient} client 
 */
module.exports = (client) => {
    for (const file of readdirSync('./src/events').filter(file => file.endsWith('.js'))) {
        const module = require(`../events/${file}`);
        if (!module) continue;

        if (!module.name || !module.run) {
            console.warn('[WARN]'.yellow, `Unable to load the event ${file} due to missing \'name\' or/and \'run\' properties.`);
            continue;
        };

        if (module.once) {
            client.once(module.name, (...args) => module.run(client, ...args));
        } else {
            client.on(module.name, (...args) => module.run(client, ...args));
        }

        console.log('[INFO]'.blue, `Loaded event "${module.name}" from ${file}`);
    }
}