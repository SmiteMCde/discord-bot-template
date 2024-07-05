const { Client, Collection, GatewayIntentBits, Partials, ActivityType } = require('discord.js');
const { readdirSync } = require('node:fs');
const config = require('../../config.json');

module.exports = class extends Client {
    collection = {
        commands: new Collection(),
        components: {
            buttons: new Collection(),
            selects: new Collection(),
            modals: new Collection(),
            autocompletes: new Collection()
        }
    };
    applicationcommandsArray = [];

    constructor() {
        super({
            intents: [Object.keys(GatewayIntentBits)],
            partials: [Object.keys(Partials)],
            presence: {
                activities: [{
                    name: 'discord.js v14 - bot template',
                    type: ActivityType.Custom
                }],
                status: 'online'
            }
        });
    };

    start = async () => {
        console.log('[INFO]'.blue, 'Initializing discord client...');

        require('../handlers/events')(this);
        await this.login(config.token).then(async () => {
            for (const file of readdirSync(`./src/handlers`).filter(file => file.endsWith('.js'))) {
                if (file === 'events.js') continue;
                require(`../handlers/${file}`)(this);
            }
        });
    }
}