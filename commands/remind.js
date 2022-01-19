module.exports = {
    checkRemind: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    var first = splitCommand.slice(1)
    var second = splitCommand.slice(2)
    // var third = splitCommand.slice(3)
    found = false

    function remindUser() {
        return receivedMessage.channel.send(`<@!${receivedMessage.author.id}> I am here to remind you of something 🤔`)
    }

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog root'
            case 'remind' :

                if (second == '') {
                    var minute = parseInt(first)
                    var totalwait = minute * 60000

                    const embed = new MessageEmbed()
                    .setTitle('Reminder Set')
                    .setDescription(`<@!${receivedMessage.author.id}> I will remind you about something in ${minute} minutes.`)
                    .setColor('#00ADEF')
                    .setTimestamp()
                    receivedMessage.channel.send(embed)
                }
                else {
                    var minute = parseInt(second)
                    var hour = parseInt(first)
                    var totalwait = (minute * 60000) + (hour * 3600000)

                    const embed = new MessageEmbed()
                    .setTitle('Reminder Set')
                    .setDescription(`<@!${receivedMessage.author.id}> I will remind you about something in ${hour} hours and ${minute} minutes.`)
                    .setColor('#00ADEF')
                    .setTimestamp()
                    receivedMessage.channel.send(embed)
                }

                setTimeout(remindUser, totalwait) // Waits for totalwait miliseconds then runs setTimeout() function
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}