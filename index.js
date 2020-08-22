const Discord = require("discord.js");

const { prefix, token } = require ('./config.json')

const Client = new Discord.Client;

Client.once("ready", () => {
    console.log("bot opérationnel");

});

client.on('message', (message) => {
    if (message.content === `${prefix}help`) {
        message.channel.send ('Bonjour je suis en dévelloppement désolé pour l'+ "'" + 'attente '):
    }

}):

Client.login(token);