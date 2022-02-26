const {
    SlashCommandBuilder,
    time
} = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);
const owner_ID = require("../config.json").ownerID;
const { MessageEmbed } = require('discord.js');

const Role16 = require("../config.json").Role16;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minecraft')
        .setDescription('Sends reaction role message'),
    async execute(interaction, client) {
        if (interaction.user.id != owner_ID) {
            return await interaction.reply({ content:"This command is not for you : )",ephemeral: true });
        }
        function sendMsg() {
            const reactionRole = client.channels.cache.get(client.config.ChannelID);
            const embed = new client.discord.MessageEmbed()
            .setColor('RED')
            .setDescription('```MINECRAFT PLAYERS```')
            .setTimestamp();
        const button = new client.discord.MessageActionRow()
            .addComponents(
                new client.discord.MessageButton()
                .setCustomId('role16')
                .setLabel(Role16)
                .setEmoji('⛏️')
                .setStyle('SUCCESS'),
            );
        reactionRole.send({ embeds: [embed], components: [button] });
        }
        sendMsg();
        interaction.reply("`Reaction Sent Sucessfully!`");   
        
    },
};