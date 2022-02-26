const Role1 = require("../config.json").Role1;
const Role2 = require("../config.json").Role2;
const Role3 = require("../config.json").Role3;
const Role4 = require("../config.json").Role4;
const Role5 = require("../config.json").Role5;
const Role6 = require("../config.json").Role6;
const Role7 = require("../config.json").Role7;
const Role8 = require("../config.json").Role8;
const Role9 = require("../config.json").Role9;
const Role10 = require("../config.json").Role10;
const Role11 = require("../config.json").Role11;
const Role12 = require("../config.json").Role12;
const Role13 = require("../config.json").Role13;
const Role14 = require("../config.json").Role14;
const Role15 = require("../config.json").Role15;
const Role16 = require("../config.json").Role16;

const RoleID1 = require("../config.json").Role1ID;
const RoleID2 = require("../config.json").Role2ID;
const RoleID3 = require("../config.json").Role3ID;
const RoleID4 = require("../config.json").Role4ID;
const RoleID5 = require("../config.json").Role5ID;
const RoleID6 = require("../config.json").Role6ID;
const RoleID7 = require("../config.json").Role7ID;
const RoleID8 = require("../config.json").Role8ID;
const RoleID9 = require("../config.json").Role9ID;
const RoleID10 = require("../config.json").Role10ID;
const RoleID11 = require("../config.json").Role11ID;
const RoleID12 = require("../config.json").Role12ID;
const RoleID13 = require("../config.json").Role13ID;
const RoleID14 = require("../config.json").Role14ID;
const RoleID15 = require("../config.json").Role15ID;
const RoleID16 = require("../config.json").Role16ID;

const Log = require("../config.json").Log;

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        try{

          const User = interaction.member;
          

          //CODM VERSION

          if (interaction.customId == "role1") {

            if (User.roles.cache?.has(`${RoleID2}`)) {
              client.channels.cache.get(Log).send(`${User} tried to get both roles`);
              return interaction.reply({content:'`You cannot have both roles`', ephemeral: true});
            }

            if ( User.roles.cache?.has(`${RoleID1}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID1}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role1} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role1}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID1}`);
              User.roles.add(role);
              interaction.reply({content:`${Role1} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role1}`);
            }

          }
          if (interaction.customId == "role2") {

            if (User.roles.cache?.has(`${RoleID1}`)) {
              client.channels.cache.get(Log).send(`${User} tried to get both roles`);
              return interaction.reply({content:'`You cannot have both roles`', ephemeral: true});
            }

            if ( User.roles.cache?.has(`${RoleID2}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID2}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role2} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role2}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID2}`);
              User.roles.add(role);
              interaction.reply({content:`${Role2} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role2}`);
            }

          }

          //AGE

          if (interaction.customId == "role3") {

            if (User.roles.cache?.has(`${RoleID4}`)) {
              client.channels.cache.get(Log).send(`${User} tried to get both roles`);
              return interaction.reply({content:'`You cannot have both roles`', ephemeral: true});
            }

            if ( User.roles.cache?.has(`${RoleID3}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID3}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role3} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role3}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID3}`);
              User.roles.add(role);
              interaction.reply({content:`${Role3} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role3}`);
            }

          }
          if (interaction.customId == "role4") {

            if (User.roles.cache?.has(`${RoleID3}`)) {
              return interaction.reply({content:'`You cannot have both roles`', ephemeral: true});
            }

            if ( User.roles.cache?.has(`${RoleID4}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID4}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role4} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role4}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID4}`);
              User.roles.add(role);
              interaction.reply({content:`${Role4} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role4}`);
            }

          }

          //GENDER

          if (interaction.customId == "role5") {

            if (User.roles.cache?.has(`${RoleID6}`)) {
              return interaction.reply({content:'`You cannot have both roles`', ephemeral: true});
            }

            if ( User.roles.cache?.has(`${RoleID5}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID5}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role5} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role5}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID5}`);
              User.roles.add(role);
              interaction.reply({content:`${Role5} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role5}`);
            }

          }
          if (interaction.customId == "role6") {

            if (User.roles.cache?.has(`${RoleID5}`)) {
              return interaction.reply({content:'`You cannot have both roles`', ephemeral: true});
            }

            if ( User.roles.cache?.has(`${RoleID6}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID6}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role6} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role6}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID6}`);
              User.roles.add(role);
              interaction.reply({content:`${Role6} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role6}`);
            }

          }

          //DEVICE

          if (interaction.customId == "role7") {

            if ( User.roles.cache?.has(`${RoleID7}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID7}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role7} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role8}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID7}`);
              User.roles.add(role);
              interaction.reply({content:`${Role7} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role7}`);
            }

          }
          if (interaction.customId == "role8") {

            if ( User.roles.cache?.has(`${RoleID8}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID8}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role8} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role8}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID8}`);
              User.roles.add(role);
              interaction.reply({content:`${Role8} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role8}`);
            }

          }

          if (interaction.customId == "role9") {

            if ( User.roles.cache?.has(`${RoleID9}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID9}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role9} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role9}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID9}`);
              User.roles.add(role);
              interaction.reply({content:`${Role9} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role9}`);
            }

          }
          if (interaction.customId == "role10") {

            if ( User.roles.cache?.has(`${RoleID10}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID10}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role10} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role10}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID10}`);
              User.roles.add(role);
              interaction.reply({content:`${Role10} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role10}`);
            }

          }

          //MUSIC

          if (interaction.customId == "role11") {

            if ( User.roles.cache?.has(`${RoleID11}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID11}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role11} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role11}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID11}`);
              User.roles.add(role);
              interaction.reply({content:`${Role11} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role11}`);
            }

          }

          //PING

          if (interaction.customId == "role12") {

            if ( User.roles.cache?.has(`${RoleID12}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID12}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role12} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role12}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID12}`);
              User.roles.add(role);
              interaction.reply({content:`${Role12} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role12}`);
            }

          }
          if (interaction.customId == "role13") {

            if ( User.roles.cache?.has(`${RoleID13}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID13}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role13} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role13}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID13}`);
              User.roles.add(role);
              interaction.reply({content:`${Role13} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role13}`);
            }

          }

          if (interaction.customId == "role14") {

            if ( User.roles.cache?.has(`${RoleID14}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID14}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role14} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role14}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID14}`);
              User.roles.add(role);
              interaction.reply({content:`${Role14} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role14}`);
            }

          }
          if (interaction.customId == "role15") {

            if ( User.roles.cache?.has(`${RoleID15}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID15}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role15} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role15}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID15}`);
              User.roles.add(role);
              interaction.reply({content:`${Role15} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role15}`);
            }

          }

          //MINECRAFT

          if (interaction.customId == "role16") {

            if ( User.roles.cache?.has(`${RoleID16}`)) {
              let role = interaction.guild.roles.cache.get(`${RoleID16}`);
              User.roles.remove(role);
              interaction.reply({content:`${Role16} has been removed!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} removed ${Role16}`);
            } else {
              let role = interaction.guild.roles.cache.get(`${RoleID16}`);
              User.roles.add(role);
              interaction.reply({content:`${Role16} has been added!`, ephemeral: true});
              client.channels.cache.get(Log).send(`${User} received ${Role16}`);
            }

          }        

        } catch(err) {
            console.log(err);
        }
        
    },
};