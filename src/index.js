// Imports
const { Client, GatewayIntentBits } = require('discord.js')

// Create Bot
const client = new client({intents:[
    GatewayIntentBits.Guilds,
]})

// Events //
// Startup event
client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`)
})

// Interaction Create Event
client.on(Events.InteractionCreate, async interaction => {
    if(!interaction.isChatInputCommand()) return
    
    const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
})

// Start Bot