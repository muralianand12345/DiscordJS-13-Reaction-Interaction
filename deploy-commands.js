const fs = require('fs');
const {
    REST
} = require('@discordjs/rest');
const {
    Routes
} = require('discord-api-types/v9');
const {
    clientId
} = require('./config.json');

require('dotenv').config();
var token = process.env.TOKEN;
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({
    version: '9'
}).setToken(token);

rest.put(Routes.applicationCommands(clientId,939507689283784735), {
        body: commands
    })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);