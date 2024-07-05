const { readdirSync } = require('node:fs');
const AdvancedClient = require('../class/AdvancedClient');

/**
 * @param {AdvancedClient} client 
 */
module.exports = (client) => {
    for (const dir of readdirSync('./src/components')) {
        for (const file of readdirSync(`./src/components/${dir}`).filter(file => file.endsWith('.js'))) {
            const module = require(`../components/${dir}/${file}`);
            if (!module) continue;

            switch (dir) {
                case 'autocomplete': {
                    if (!module.commandName || !module.run) {
                        console.warn('[WARN]'.yellow, `Unable to load the component ${file} due to missing \'commandName\' or/and \'run\' properties.`);
                        continue;
                    }

                    client.collection.components.autocompletes.set(module.commandName, module);
                    break;
                }
                case 'buttons': {
                    if (!module.customId || !module.run) {
                        console.warn('[WARN]'.yellow, `Unable to load the component ${file} due to missing \'customId\' or/and \'run\' properties.`);
                        continue;
                    };

                    client.collection.components.buttons.set(module.customId, module);
                    break;
                }
                case 'selects': {
                    if (!module.customId || !module.run) {
                        console.warn('[WARN]'.yellow, `Unable to load the component ${file} due to missing \'customId\' or/and \'run\' properties.`);
                        continue;
                    };

                    client.collection.components.selects.set(module.customId, module);
                    break;
                }
                case 'modals': {
                    if (!module.customId || !module.run) {
                        console.warn('[WARN]'.yellow, `Unable to load the component ${file} due to missing \'customId\' or/and \'run\' properties.`);
                        continue;
                    };

                    client.collection.components.modals.set(module.customId, module);
                    break;
                }
                default: {
                    console.error('[ERROR]'.red, `Unable to load the component ${file} due to unknown component type.`);
                    continue;
                }
            }
        }
    }
}