const fs = require('fs');
const chalk = require('chalk');

const reqEvent = (event) => require(`../events/${event}`)

module.exports = (client) => {
    fs.readdir("./src/events/", (_err, files) => {
        files.forEach((file) => {
            if (!file.endsWith(".js")) return;
            let eventName = file.split(".")[0];
            client.on(eventName, reqEvent(eventName))
            
            console.log(chalk.yellowBright(`Event loaded successfully: ${eventName}`));
        });
        console.log(chalk.greenBright(`All events loaded successfully!`));
        console.log(`\u200b`)
    });

}