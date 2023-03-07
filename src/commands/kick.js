// Importing
const { EmbedBuilder } = require("@discordjs/builders");
const {
  SlashCommandBuilder,
  PermissionFlagsBits
} = require("discord.js");

// Creating Slash Command
module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("kick an User")
    .addUserOption((option) =>
      option
        .setName("member")
        .setDescription("The Member you want to kick")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("The Reason you want to kick the Member")
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
  // Command Code
  async execute(interaction) {
    const member = interaction.option.getUser("Member");
    const reason = interaction.option.getString("Reason");

    const succes_embed = new EmbedBuilder()
      .setTitle("Kicked Successfully")
      .addFields(
        {
          name: "Kicked Member",
          value: member.toString(),
        },
        {
          name: "Reason",
          value: reason,
        }
      );

    const failed_embed = new EmbedBuilder()
      .setTitle("Kicked Successfully")
      .addFields(
        {
          name: "Tried to kick:",
          value: member.toString(),
        },
        {
          name: "Reason",
          value: reason,
        }
      );

    if (member.kickable) {
      await interaction.guild.members.kick(member);
      await interaction.reply({ embeds: [succes_embed] });
    } else {
      await interaction.reply({ embeds: [failed_embed] });
    }
  },
};
