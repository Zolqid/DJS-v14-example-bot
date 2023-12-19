const Discord = require('discord.js');
const { GatewayIntentBits, Partials, EmbedBuilder} = require('discord.js');
const fs = require('fs');
const yaml = require('js-yaml');
const config = yaml.load(fs.readFileSync('./config.yml', 'utf8'));
const moment = require('moment');
moment.locale('tr');
const client = new Discord.Client({ 
    intents: [
        GatewayIntentBits.MessageContent, 
        GatewayIntentBits.GuildMembers, 
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.DirectMessages, 
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.GuildInvites,
    ],
    partials: [
        Partials.Channel, 
        Partials.Message, 
        Partials.GuildMember, 
        Partials.Reaction, 
        Partials.User,
    ],
})

client.config = config;

require('./src/handlers/slashCommandHandler')(client);
require('./src/handlers/eventHandler')(client);
require('./src/handlers/commandHandler')(client);

process.on('unhandledRejection', error => {
	console.error(`${moment().format('LL - LTS')}`, error);
});

client.login(config['token'])