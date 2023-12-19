const chalk = require('chalk');
const moment = require('moment');
moment.locale('tr');
module.exports = async () => {
    console.log(chalk.magentaBright(`${moment().format('LL - LTS')} bot is activated!`))
}