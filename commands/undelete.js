module.exports = {
    checkUndelete: function(receivedMessage) {
    const {MessageAttachment} = require('discord.js')
    
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog undelete'
            case 'undelete' :
                if (arguments.includes('deleted')) { // if user requests to see their deleted message logs, send the log file
                    const msgdeleted = new MessageAttachment('./msgdeleted/' + `msgdeleted${receivedMessage.author.username}.txt`)
                    receivedMessage.channel.send(msgdeleted)
                }
                else if (arguments.includes('exe')) { // if user requests to see their exe message logs, send the log file
                    const msgdeleted = new MessageAttachment('./msghistory/' + `msghistory${receivedMessage.author.username}.txt`)
                    receivedMessage.channel.send(msgdeleted)
                }
                else { // if the user didn't specify which data they want
                    receivedMessage.channel.send('please specify which data you would like to access (`deleted` or `exe`)')
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}