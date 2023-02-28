// Imports
const { Client, GatewayIntentBits, Events, Collection } = require('discord.js')
const path = require("node:path");
require("dotenv").config();
const fs = require("node:fs");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { sequelize, User, newuser, IsRegistered } = require("./database.js");

// Create Bot
const client = new Client({intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
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

// MessageCreate Event
client.on(Events.MessageCreate, async (message) => {
    const member = message.author
    if(member.bot) return
    if(await IsRegistered(member)) {

    } else if (!await IsRegistered(member)) {

    }
})

// Command Handler
client.commands = new Collection()

const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)

    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command)
    } else {
        console.log(`[WARNING] Der Command: ${filePath} fehlt "data" oder "execute"`)
    }
}

// Start Bot
client.login(process.env.test_token);









