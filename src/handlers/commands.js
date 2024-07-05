const { readdirSync } = require('node:fs');
const AdvancedClient = require('../class/AdvancedClient');

/**
 * @param {AdvancedClient} client 
 */
module.exports = (client) => {
    for (const dir of readdirSync('./src/commands')) {
        for (const file of readdirSync(`./src/commands/${dir}`).filter(file => file.endsWith('.js'))) {
            const module = require(`../commands/${dir}/${file}`);
            if (!module.structure?.name) continue;

            if (!module.structure?.name || !module.run) {
                console.warn('[WARN]'.yellow, `Unable to load the command ${file} due to missing \'structure#name\' or/and \'run\' properties.`);
                continue;
            };

            client.collection.commands.set(module.structure.name, module);
            client.applicationcommandsArray.push(module.structure);

            console.log('[INFO]'.blue, `Loaded command "${module.structure.name}" from ${dir}/${file}`);
        }
    }
};