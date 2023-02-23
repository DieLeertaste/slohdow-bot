// Importing
const { EmbedBuilder } = require('@discordjs/builders')
const { SlashCommandBuilder, PermissionFlagsBits, Embed } = require('discord.js')

// Creating Slash Command
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban an User')
        .addUserOption(option => option
            .setName('member')
            .setDescription('The Member you want to Ban')
            .setRequired(true))
        .addStringOption(option => option
            .setName('reason')
            .setDescription('The Reason you want to ban the Member'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    // Command Code
    async execute(interaction) {
        const member = interaction.option.getUser('Member')
        const reason = interaction.option.getString('Reason')

        const succes_embed = new EmbedBuilder()
            .setTitle("Banned Successfully")
            .addFields(
                {
                    name: 'Banned Member',
                    value: member.toString()
                },
                {
                    name: 'Reason',
                    value: reason
                }
            )
        
        const failed_embed = new EmbedBuilder()
          .setTitle("Banned Successfully")
          .addFields(
            {
              name: "Tried to ban:",
              value: member.toString(),
            },
            {
              name: "Reason",
              value: reason,
            }
          );

        if (member.bannable) {
            await interaction.guild.members.ban(member)
            await interaction.reply(succes_embed)
        } else {
            await interaction.reply(failed_embed)
        }
}}