let reminderlist = []

module.exports = {
    checkRemind: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let arguments = splitCommand.slice(1)
    let first = splitCommand.slice(1)
    let second = splitCommand.slice(2)
    let content = splitCommand.slice(3).join(' ')
    // const secondlist = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let minute = parseInt(second)
    let hour = parseInt(first)
    let totalwait = (minute * 60000) + (hour * 3600000)
    let index = reminderlist.indexOf(content)

    found = false

    function remindUser() {
        reminderlist.splice(index, 1)
        console.log(index)
        console.log(content)
        console.log(reminderlist.splice(index, content))
        return receivedMessage.channel.send(`<@!${receivedMessage.author.id}> I am here to remind you to ${content} 🤔`)
    }
    // function nums() {
    //     return Array.from(String(second))
    // }

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog root'
            case 'remind' :

                if (arguments.toString().toLowerCase() == 'list') {
                    const embed = new MessageEmbed()
                    .setTitle('Active Reminders')
                    .setDescription(reminderlist.join(`
                    `))
                    .setColor('#00ADEF')
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})

                    // receivedMessage.reply('**Active Reminders: ** `' + reminderlist.join('` `') + '`')
                    
                }
                // else if (nums().includes(secondlist)) {
                //     // const embed = new MessageEmbed()
                //     // .setTitle('Active Reminders')
                //     // .setDescription(reminderlist[0].toString())
                //     // .setColor('#00ADEF')
                //     // .setTimestamp()
                //     // receivedMessage.reply({ embeds: [embed]})

                //     minute
                //     hour
                //     totalwait
                //     reminderlist.push(content)
                //     index = reminderlist.indexOf(content)

                //     const embed = new MessageEmbed()
                //     .setTitle('Reminder Set')
                //     .setDescription(`<@!${receivedMessage.author.id}> I will remind you to ${content} in ${hour} hours and ${minute} minutes.`)
                //     .setColor('#00ADEF')
                //     .setTimestamp()
                //     receivedMessage.reply({ embeds: [embed]})
                // }
                else {
                    // var totalwait = minute * 60000
                    totalwait
                    reminderlist.push(content)
                    index += 1

                    const embed = new MessageEmbed()
                    .setTitle('Reminder Set')
                    .setDescription(`<@!${receivedMessage.author.id}> I will remind you to ${content} in ${hour} hours and ${minute} minutes.`)
                    .setColor('#00ADEF')
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }

                setTimeout(remindUser, totalwait) // Waits for totalwait miliseconds then runs setTimeout() function
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}