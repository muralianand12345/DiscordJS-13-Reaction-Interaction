const {
    SlashCommandBuilder,
    time
} = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);
const owner_ID = require("../config.json").ownerID;
const { MessageEmbed } = require('discord.js');

const Role7 = require("../config.json").Role7;
const Role8 = require("../config.json").Role8;
const Role9 = require("../config.json").Role9;
const Role10 = require("../config.json").Role10;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('device')
        .setDescription('Sends reaction role message'),
    async execute(interaction, client) {
        if (interaction.user.id != owner_ID) {
            return await interaction.reply({ content:"This command is not for you : )",ephemeral: true });
        }
        function sendMsg() {
            const reactionRole = client.channels.cache.get(client.config.ChannelID);
            const embed = new client.discord.MessageEmbed()
            .setColor('RED')
            .setDescription('```DEVICE / PLATFORM```')
            .setTimestamp();
        const button = new client.discord.MessageActionRow()
            .addComponents(
                new client.discord.MessageButton()
                .setCustomId('role7')
                .setLabel(Role7)
                .setEmoji('📱')
                .setStyle('PRIMARY'),
                new client.discord.MessageButton()
                .setCustomId('role8')
                .setLabel(Role8)
                .setEmoji('🖥️')
                .setStyle('SECONDARY'),
                new client.discord.MessageButton()
                .setCustomId('role9')
                .setLabel(Role9)
                .setEmoji('🎮')
                .setStyle('SUCCESS'),
                new client.discord.MessageButton()
                .setCustomId('role10')
                .setLabel(Role10)
                .setEmoji('🎮')
                .setStyle('DANGER'),
                
            );
        reactionRole.send({ embeds: [embed], components: [button] });
        }
        sendMsg();
        interaction.reply("`Reaction Sent Sucessfully!`");   
        
    },
};