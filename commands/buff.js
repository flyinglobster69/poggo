module.exports = {
    checkBuff: function(receivedMessage) {
    const {MessageAttachment} = require('discord.js')
    const andrewps = new MessageAttachment('andrewps.png')

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand) {
            case 'andrew' :
                receivedMessage.channel.send(andrewps)
                receivedMessage.channel.send("lmfao photoshopped")
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}