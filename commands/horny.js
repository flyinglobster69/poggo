module.exports = {
    checkHorny: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) {
            case 'horny' :
                receivedMessage.channel.send("go to horny jail smh")
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}