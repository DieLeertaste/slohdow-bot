// Importing
const { SlashCommandBuilder } = require('discord.js')
const { EmbedBuilder } = require("@discordjs/builders");

// Creating Slash Command
module.exports = {
    data: new SlashCommandBuilder()
        .setName('vote')
        .setDescription('Vote on Top.gg for the Bot and the Server'),
    // Command Code
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Vote!')
            .addFields(
                {
                    name: "Server",
                    value: "https://top.gg/servers/1081960839369740458"
                },
                {
                    name: "Bot",
                    value: "Coming Soon"
                }
            )
        await interaction.reply({embeds: [embed]});
}}