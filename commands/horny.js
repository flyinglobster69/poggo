module.exports = {
    checkHorny: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog horny'
            case 'horny' :
                const embed = new MessageEmbed()
                .setDescription('go to horny jail smh')
                receivedMessage.channel.send(embed) // horny bad
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}