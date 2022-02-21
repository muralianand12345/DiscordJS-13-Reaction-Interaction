const Role1 = require("../config.json").Role1;
const Role2 = require("../config.json").Role2;

const RoleID1 = require("../config.json").Role1ID;
const RoleID2 = require("../config.json").Role2ID;

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        try{
            if (!interaction.isButton()) return;
            const User = interaction.member;
            if (interaction.customId == "role1") {
                if ( User.roles.cache?.has(`${RoleID1}`)) {
                    let role = interaction.guild.roles.cache.get(`${RoleID1}`);
                    User.roles.remove(role);
                    interaction.reply({content:`${Role1} has been removed!`, ephemeral: true});
                } else {
                    let role = interaction.guild.roles.cache.get(`${RoleID1}`);
                    User.roles.add(role);
                    interaction.reply({content:`${Role1} has been added!`, ephemeral: true});
                }
            }
            if (interaction.customId == "role2") {
                if ( User.roles.cache?.has(`${RoleID2}`)) {
                    let role = interaction.guild.roles.cache.get(`${RoleID2}`);
                    User.roles.remove(role);
                    interaction.reply({content:`${Role2} has been removed!`, ephemeral: true});
                } else {
                    let role = interaction.guild.roles.cache.get(`${RoleID2}`);
                    User.roles.add(role);
                    interaction.reply({content:`${Role2} has been added!`, ephemeral: true});
                }
            }

        } catch(err) {
            console.log(err);
            interaction.reply({content:"Error has occured!", ephemeral: true})
        }
        
    },
};
