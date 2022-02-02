module.exports = {
    checkCode: function(receivedMessage) {

    const {MessageEmbed, MessageButton, MessageActionRow} = require('discord.js')
    // const client = new Client()

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    // const readme = new MessageAttachment('./README.cmd')
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog code'
            case 'code' :
                const embed = new MessageEmbed()
                .setTitle('Source Code')
                .setDescription(`Click the corresponding buttons to access the GitHub repository and join the Discord!`)
                .setThumbnail('https://avatars.githubusercontent.com/u/73574038?v=4')
                .setColor('#ffff00')
                .setURL('https://github.com/flyinglobster69/Poggo')
                .setTimestamp()
                // .attachFiles(readme)
                // receivedMessage.reply({ embeds: [embed]})

                const row = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                        .setURL('https://github.com/flyinglobster69/Poggo')
                        .setLabel('Source Code')
                        .setStyle('LINK'),
                        new MessageButton()
                        .setURL('https://discord.gg/JDTRUPP')
                        .setLabel('Discord')
                        .setStyle('LINK')
			)
            receivedMessage.reply({ embeds: [embed], components: [row]})

		    // await receivedMessage.reply({ embeds: [embed], components: [row] });
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}