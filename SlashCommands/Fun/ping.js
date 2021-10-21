const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Pong!!',
    ownerOnly: false,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {
            const embed = new MessageEmbed()
                .setDescription("Pong!!")
                .setColor("#FF0000")
            interaction.followUp({ embeds: [embed] });
        }
    }
