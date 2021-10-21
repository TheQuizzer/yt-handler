const { Client, Collection } = require("discord.js");
const mongodb = require("mongodb")
const fs = require("fs");

const client = new Client({
    intents: 32767,
});

const { GiveawaysManager } = require('discord-giveaways');

const manager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    default: {
        botsCanWin: false,
        embedColor: '#FF0000',
        embedColorEnd: '#FF0000',
        reaction: '🎉'
    }
});
client.giveawaysManager = manager;


module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);


client.login(client.config.token);
