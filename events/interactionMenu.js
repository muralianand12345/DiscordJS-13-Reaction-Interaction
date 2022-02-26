const Role17 = require("../config.json").Role17;
const Role18 = require("../config.json").Role18;
const Role19 = require("../config.json").Role19;
const Role20 = require("../config.json").Role20;
const Role21 = require("../config.json").Role21;
const Role22 = require("../config.json").Role22;

const RoleID17 = require("../config.json").Role17ID;
const RoleID18 = require("../config.json").Role18ID;
const RoleID19 = require("../config.json").Role19ID;
const RoleID20 = require("../config.json").Role20ID;
const RoleID21 = require("../config.json").Role21ID;
const RoleID22 = require("../config.json").Role22ID;

const Log = require("../config.json").Log;

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {

        //REGION

        if (interaction.customId == "region") {
            interaction.reply({ content: "`Creating Menu for You ...`", ephemeral: true }).then(async c => {

                const embed = new client.discord.MessageEmbed()
                    .setColor('RED')
                    .setDescription('```CONTINENT MENU```')
                    .setTimestamp();
                const row = new client.discord.MessageActionRow()
                    .addComponents(
                    new client.discord.MessageSelectMenu()
                        .setCustomId('category')
                        .setPlaceholder('Select Your Continent!')
                        .addOptions([
                            {
                                label: 'ASIA',
                                value: 'asia',
                                emoji: '🔴',
                            },
                            {
                                label: 'NORTH AMERICA',
                                value: 'na',
                                emoji: '🔵',
                            },
                            {
                                label: 'SOUTH AMERICA',
                                value: 'sa',
                                emoji: '🟣',
                            },
                            {
                                label: 'EUROPE',
                                value: 'eu',
                                emoji: '🟤',
                            },
                            {
                                label: 'AUSTRALIA / OCEANIA',
                                value: 'au',
                                emoji: '⚫',
                            },
                            {
                                label: 'AFRICA',
                                value: 'af',
                                emoji: '⚪',
                            }
                        ]),
                    );
                    
                msg = await interaction.editReply({ content: "`Created a Menu!`", embeds: [embed], components: [row], ephemeral: true });
                const collector = msg.createMessageComponentCollector({
                    componentType: 'SELECT_MENU',
                    time: 20000 //20 secs timeout for menu
                });
                collector.on('collect', i => {
                    if (i.user.id === interaction.user.id) {

                        const userMenu = i.member;
    
                    if (i.values[0] == 'asia') {

                        if (userMenu.roles.cache?.has(`${RoleID18}`) || userMenu.roles.cache?.has(`${RoleID19}`) || userMenu.roles.cache?.has(`${RoleID20}`) || userMenu.roles.cache?.has(`${RoleID21}`) || userMenu.roles.cache?.has(`${RoleID22}`)) {
                            return i.reply({content:'`You Cannot Have Multiple Roles!`', ephemeral: true});
                        }

                        if (userMenu.roles.cache?.has(`${RoleID17}`)){
                            let role = i.guild.roles.cache.get(`${RoleID17}`);
                            userMenu.roles.remove(role);
                            i.reply({content:`${Role17} has been removed!`, ephemeral: true});
                            client.channels.cache.get(Log).send(`${userMenu} removed ${Role17}`);
                        } else {
                            let role = i.guild.roles.cache.get(`${RoleID17}`);
                            userMenu.roles.add(role);
                            i.reply({content:`${Role17} has been added!`, ephemeral: true});
                            client.channels.cache.get(Log).send(`${userMenu} received ${Role17}`);
                        }
                    }
    
                    if (i.values[0] == 'na') {

                        if (userMenu.roles.cache?.has(`${RoleID17}`) || userMenu.roles.cache?.has(`${RoleID19}`) || userMenu.roles.cache?.has(`${RoleID20}`) || userMenu.roles.cache?.has(`${RoleID21}`) || userMenu.roles.cache?.has(`${RoleID22}`)) {
                            return i.reply({content:'`You Cannot Have Multiple Roles!`', ephemeral: true});
                        }

                        if (userMenu.roles.cache?.has(`${RoleID18}`)){
                            let role = i.guild.roles.cache.get(`${RoleID18}`);
                            userMenu.roles.remove(role);
                            i.reply({content:`${Role18} has been removed!`, ephemeral: true});
                            client.channels.cache.get(Log).send(`${userMenu} removed ${Role18}`);
                        } else {
                            let role = i.guild.roles.cache.get(`${RoleID18}`);
                            userMenu.roles.add(role);
                            i.reply({content:`${Role18} has been added!`, ephemeral: true});
                            client.channels.cache.get(Log).send(`${userMenu} received ${Role18}`);
                        }
                    }
        
                    if (i.values[0] == 'sa') {

                        if (userMenu.roles.cache?.has(`${RoleID17}`) || userMenu.roles.cache?.has(`${RoleID18}`) || userMenu.roles.cache?.has(`${RoleID20}`) || userMenu.roles.cache?.has(`${RoleID21}`) || userMenu.roles.cache?.has(`${RoleID22}`)) {
                            return i.reply({content:'`You Cannot Have Multiple Roles!`', ephemeral: true});
                        }

                        if (userMenu.roles.cache?.has(`${RoleID19}`)){
                            let role = i.guild.roles.cache.get(`${RoleID19}`);
                            userMenu.roles.remove(role);
                            i.reply({content:`${Role19} has been removed!`, ephemeral: true});
                            client.channels.cache.get(Log).send(`${userMenu} removed ${Role19}`);
                        } else {
                            let role = i.guild.roles.cache.get(`${RoleID19}`);
                            userMenu.roles.add(role);
                            i.reply({content:`${Role19} has been added!`, ephemeral: true});
                            client.channels.cache.get(Log).send(`${userMenu} received ${Role19}`);
                        }
                    }
        
                    if (i.values[0] == 'eu') {

                        if (userMenu.roles.cache?.has(`${RoleID17}`) || userMenu.roles.cache?.has(`${RoleID18}`) || userMenu.roles.cache?.has(`${RoleID19}`) || userMenu.roles.cache?.has(`${RoleID21}`) || userMenu.roles.cache?.has(`${RoleID22}`)) {
                            return i.reply({content:'`You Cannot Have Multiple Roles!`', ephemeral: true});
                        }

                        if (userMenu.roles.cache?.has(`${RoleID20}`)){
                            let role = i.guild.roles.cache.get(`${RoleID20}`);
                            userMenu.roles.remove(role);
                            i.reply({content:`${Role20} has been removed!`, ephemeral: true});
                            client.channels.cache.get(Log).send(`${userMenu} removed ${Role20}`);
                        } else {
                            let role = i.guild.roles.cache.get(`${RoleID20}`);
                            userMenu.roles.add(role);
                            i.reply({content:`${Role20} has been added!`, ephemeral: true});
                            client.channels.cache.get(Log).send(`${userMenu} received ${Role20}`);
                        }
                    }
              
                    if (i.values[0] == 'au') { 

                        if (userMenu.roles.cache?.has(`${RoleID17}`) || userMenu.roles.cache?.has(`${RoleID18}`) || userMenu.roles.cache?.has(`${RoleID19}`) || userMenu.roles.cache?.has(`${RoleID20}`) || userMenu.roles.cache?.has(`${RoleID22}`)) {
                            return i.reply({content:'`You Cannot Have Multiple Roles!`', ephemeral: true});
                        }
                        
                        if (userMenu.roles.cache?.has(`${RoleID21}`)){                                   
                            let role = i.guild.roles.cache.get(`${RoleID21}`);                  
                            userMenu.roles.remove(role);                  
                            i.reply({content:`${Role21} has been removed!`, ephemeral: true});                 
                            client.channels.cache.get(Log).send(`${userMenu} removed ${Role21}`);
                        } else {
                            let role = i.guild.roles.cache.get(`${RoleID21}`);              
                            userMenu.roles.add(role);             
                            i.reply({content:`${Role21} has been added!`, ephemeral: true});             
                            client.channels.cache.get(Log).send(`${userMenu} received ${Role21}`);
                        }
                    }
        
                    if (i.values[0] == 'af') {

                        if (userMenu.roles.cache?.has(`${RoleID17}`) || userMenu.roles.cache?.has(`${RoleID18}`) || userMenu.roles.cache?.has(`${RoleID19}`) || userMenu.roles.cache?.has(`${RoleID20}`) || userMenu.roles.cache?.has(`${RoleID21}`)) {
                            return i.reply({content:'`You Cannot Have Multiple Roles!`', ephemeral: true});
                        }

                        if (userMenu.roles.cache?.has(`${RoleID22}`)){
                            let role = i.guild.roles.cache.get(`${RoleID22}`);
                            userMenu.roles.remove(role);
                            client.channels.cache.get(Log).send(`${userMenu} removed ${Role22}`);
                        } else {
                            let role = i.guild.roles.cache.get(`${RoleID22}`);
                            userMenu.roles.add(role);   
                            i.reply({content:`${Role22} has been added!`, ephemeral: true});      
                            client.channels.cache.get(Log).send(`${userMenu} received ${Role22}`);
                        }  
                    }

                    }
            
                });

                collector.on('end', collected => {
                    interaction.editReply("**Menu Has Been Closed!**");
                });
        
            });
        
        }
    
    }


}