// Importing
const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("@discordjs/builders");

// Creating Slash Command
module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Deletes the Amount of Messages in this Channel Max 100 Messages")
    .addIntegerOption((option) => option.setName('amount').setDescription('the amount of messages that will be deleted').setRequired(true)),
  // Command Code
  async execute(interaction) {
        const amount = interaction.option.getInt('amount')

        
  },
};
