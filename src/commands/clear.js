// Importing
const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  Embed,
} = require("discord.js");
const { EmbedBuilder } = require("@discordjs/builders");

// Creating Slash Command
module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription(
      "Deletes the Amount of Messages in this Channel Max 100 Messages"
    )
    .addIntegerOption((option) =>
      option
        .setName("amount")
        .setDescription("the amount of messages that will be deleted")
        .setRequired(true)
        .setMaxValue(100)
        .setMinValue(1)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  // Command Code
  async execute(interaction) {
    const amountOption = interaction.options.get("amount");
    const amount = amountOption.value;

    await interaction.channel.bulkDelete(amount);
    await interaction.reply('Finished!')
  },
};
