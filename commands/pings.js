const {
    SlashCommandBuilder,
    time
} = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);
const owner_ID = require("../config.json").ownerID;
const { MessageEmbed } = require('discord.js');

const Role12 = require("../config.json").Role12;
const Role13 = require("../config.json").Role13;
const Role14 = require("../config.json").Role14;
const Role15 = require("../config.json").Role15;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('pings')
        .setDescription('Sends reaction role message'),
    async execute(interaction, client) {
        if (interaction.user.id != owner_ID) {
            return await interaction.reply({ content:"This command is not for you : )",ephemeral: true });
        }
        function sendMsg() {
            const reactionRole = client.channels.cache.get(client.config.ChannelID);
            const embed = new client.discord.MessageEmbed()
            .setColor('RED')
            .setDescription('```PING ROLES```')
            .setTimestamp();
        const button = new client.discord.MessageActionRow()
            .addComponents(
                new client.discord.MessageButton()
                .setCustomId('role12')
                .setLabel(Role12)
                .setEmoji('🔴')
                .setStyle('PRIMARY'),
                new client.discord.MessageButton()
                .setCustomId('role13')
                .setLabel(Role13)
                .setEmoji('🔵')
                .setStyle('SECONDARY'),
                new client.discord.MessageButton()
                .setCustomId('role14')
                .setLabel(Role14)
                .setEmoji('🟣')
                .setStyle('SUCCESS'),
                new client.discord.MessageButton()
                .setCustomId('role15')
                .setLabel(Role15)
                .setEmoji('⚪')
                .setStyle('DANGER'),
                
            );
        reactionRole.send({ embeds: [embed], components: [button] });
        }
        sendMsg();
        interaction.reply("`Reaction Sent Sucessfully!`");   
        
    },
};