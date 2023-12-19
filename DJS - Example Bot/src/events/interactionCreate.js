module.exports = async interaction => {
    let client = interaction.client;
    let config = client.config

    if (interaction.isContextMenuCommand()) {
        const command = client.contextCommands.get(interaction.commandName);
        if (!command) return;
        try {
           await command.execute(client, interaction)
            
        } catch(err) {
            if (err) console.log(err)
            await interaction.reply({
                content: `Something went wrong!`,
                ephemeral: true
            }).catch(err => {})
        }
    }
    
    if (interaction.isCommand()) {
    const command = client.slashCommands.get(interaction.commandName);
    if (!command) return;
    try {
       await command.execute(client, interaction)
        
    } catch(err) {
        if (err) console.log(err)
        await interaction.reply({
            content: `Something went wrong!`,
            ephemeral: true
        }).catch(err => {})
    }
    }

}