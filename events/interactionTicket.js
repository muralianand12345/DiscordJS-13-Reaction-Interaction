module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isButton()) return;
        if (interaction.customId == "open-ticket") {
            if (client.guilds.cache.get(interaction.guildId).channels.cache.find(c => c.topic == interaction.user.id)) {
                interaction.reply({
                    content: 'You have already created a ticket!',
                    ephemeral: true
                }).catch(err => console.log(err));
                return;
            };

            interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                parent: client.config.parentOpened,
                topic: interaction.user.id,
                permissionOverwrites: [{
                        id: interaction.user.id,
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                    },
                    {
                        id: interaction.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL'],
                    },
                ],
                type: 'text',
            }).then(async c => {
                interaction.reply({
                    content: `Ticket created! <#${c.id}>`,
                    ephemeral: true
                }).catch(err => console.log(err));

                const embed = new client.discord.MessageEmbed()
                    .setColor('6d6ee8')
                    .setAuthor({name:'Ticket', iconURL:'https://cdn.discordapp.com/attachments/930507930602717235/946805538946187315/JlOIOvncUQAAAABJRU5ErkJggg.png'})
                    .setDescription('Select the category of your ticket')
                    .setFooter({text:'Ticket', iconURL:'https://cdn.discordapp.com/attachments/930507930602717235/946805538946187315/JlOIOvncUQAAAABJRU5ErkJggg.png'})
                    .setTimestamp();
                const row = new client.discord.MessageActionRow()
                    .addComponents(
                        new client.discord.MessageButton()
                        .setCustomId('close-ticket')
                        .setLabel('Close ticket')
                        .setEmoji('899745362137477181')
                        .setStyle('DANGER'),
                    );

                msg = await c.send({
                    content: `<@!${interaction.user.id}>`,
                    embeds: [embed],
                    components: [row]
                }).catch(err => console.log(err));

            });
        };
        try{

        if (interaction.customId == "close-ticket") {
            const guild = client.guilds.cache.get(interaction.guildId);
            const chan = guild.channels.cache.get(interaction.channelId);

            const row = new client.discord.MessageActionRow()
                .addComponents(
                    new client.discord.MessageButton()
                    .setCustomId('confirm-close')
                    .setLabel('Close ticket')
                    .setStyle('DANGER'),
                    new client.discord.MessageButton()
                    .setCustomId('no')
                    .setLabel('Cancel closure')
                    .setStyle('SECONDARY'),
                );

            const verif = await interaction.reply({
                content: 'Are you sure you want to close the ticket?',
                components: [row]
            });

            const collector = interaction.channel.createMessageComponentCollector({
                componentType: 'BUTTON',
                time: 10000
            });

            collector.on('collect', i => {
                if (i.customId == 'confirm-close') {
                    interaction.editReply({
                        content: `Ticket closed by <@!${i.user.id}>`,
                        components: []
                    });

                    chan.edit({
                            name: `closed-${chan.name}`,
                            permissionOverwrites: [
                                {
                                    id: client.users.cache.get(chan.topic), //error
                                    deny: ['SEND_MESSAGES','VIEW_CHANNEL'],
                                },
                                {
                                    id: interaction.guild.roles.everyone,
                                    deny: ['VIEW_CHANNEL'],
                                },
                            ],
                        }).catch(err => console.log(err))
                        .then(async() => {
                            const embed = new client.discord.MessageEmbed()
                                .setColor('6d6ee8')
                                .setAuthor({name:'Ticket', iconURL:'https://cdn.discordapp.com/attachments/930507930602717235/946805538946187315/JlOIOvncUQAAAABJRU5ErkJggg.png'})
                                .setDescription('```Ticket Deleted```')
                                .setFooter({text:'Ticket', iconURL:'https://cdn.discordapp.com/attachments/930507930602717235/946805538946187315/JlOIOvncUQAAAABJRU5ErkJggg.png'})
                                .setTimestamp();

                            const row = new client.discord.MessageActionRow()
                                .addComponents(
                                    new client.discord.MessageButton()
                                    .setCustomId('delete-ticket')
                                    .setLabel('Delete ticket')
                                    .setEmoji('🗑️')
                                    .setStyle('DANGER'),
                                );

                            chan.send({
                                embeds: [embed],
                                components: [row]
                            });
                        });

                    collector.stop();
                };
                if (i.customId == 'no') {
                    interaction.editReply({
                        content: 'Ticket closure cancelled !',
                        components: []
                    });
                    collector.stop();
                };
            });

            collector.on('end', (i) => {
                if (i.size < 1) {
                    interaction.editReply({
                        content: 'Closing of the canceled ticket!',
                        components: []
                    });
                };
            });
        };
    } catch(err){
        console.log(err);
    }

    try{

        if (interaction.customId == "delete-ticket") {
            const guild = client.guilds.cache.get(interaction.guildId);
            const chan = guild.channels.cache.get(interaction.channelId);
            interaction.reply("Deleting Channel!")

            //chan.send("Deleting the channel...");
            setTimeout( () => chan.delete().catch(err => console.log(err)), 5000);

        };
    } catch(err){
        console.log(err);
    }
    },
};