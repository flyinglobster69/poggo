module.exports = {
    checkBiden: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog biden'
            case 'biden' :
                receivedMessage.channel.send("***Will you shut up man?***") // tells user to shut up
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}