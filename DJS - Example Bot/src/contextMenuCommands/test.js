
const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js')
module.exports = {
    data: new ContextMenuCommandBuilder()
    .setName('Test')
    .setType(ApplicationCommandType.User)
    .setDMPermission(false),
    async execute (client, interaction) {
        interaction.reply({content: `Test`, ephemeral: true})

    }
}