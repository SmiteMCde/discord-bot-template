const AdvancedClient = require('./class/AdvancedClient');
require('colors');

const client = new AdvancedClient();
client.start();

// Handles errors and avoids crashes when they occur
process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);