const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  once: false,
  async execute(client) {
    const member = message.author;
    if (member.bot) return;

    
  },
};