const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    return message.channel.send("Hello! " + message.author);
}

module.exports.help = {
    name: "hello"
}