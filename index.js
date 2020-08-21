const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "avm!";

client.once ('Démarage réussit', () => {
console.log('Démarage réussit')
});

Client.on("ready", () => {
    console.log("bot opérationnel");

});

Client.login("NzQ0Mjc1MTU4MjcyODM1NjQ0.Xzg2QQ.nPsTTpALVylzTodBGS32RmoXI0I");