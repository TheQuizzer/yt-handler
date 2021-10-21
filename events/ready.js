const client = require("../index");
console.clear();

client.on("ready", () =>
    console.log(`${client.user.tag} is up and ready to go!`)
);
