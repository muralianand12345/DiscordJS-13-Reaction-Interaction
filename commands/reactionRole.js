const {
    SlashCommandBuilder,
    time
} = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);
const owner_ID = require("../config.json").ownerID;
const { MessageEmbed } = require('discord.js');

const Role1 = require("../config.json").Role1;
const Role2 = require("../config.json").Role2;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('reactionrole')
        .setDescription('Sends reaction role message'),
    async execute(interaction, client) {
        if (interaction.user.id != owner_ID) {
            return await interaction.reply({content:"This command is not for you : )",ephemeral: true});
        }
        function sendMsg() {
            const reactionRole = client.channels.cache.get(client.config.ChannelID);
            const embed = new client.discord.MessageEmbed()
            .setColor('RED')
            .setDescription('`CODM VERSION`')
            .setTimestamp();
        const button = new client.discord.MessageActionRow()
            .addComponents(
                new client.discord.MessageButton()
                .setCustomId('role1')
                .setLabel(Role1)
                .setEmoji('🔵')
                .setStyle('PRIMARY'),
                new client.discord.MessageButton()
                .setCustomId('role2')
                .setLabel(Role2)
                .setEmoji('🔴')
                .setStyle('DANGER'),
            );
        reactionRole.send({ embeds: [embed], components: [button] });
        }
        sendMsg();
        interaction.reply("`Reaction Sent Sucessfully!`");
        
        
        
    },
};