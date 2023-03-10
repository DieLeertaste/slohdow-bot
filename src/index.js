// Imports
const { Client, GatewayIntentBits, Events, Collection } = require('discord.js')
const path = require("node:path");
require("dotenv").config();
const fs = require("node:fs");
const { newUser } = require('./database.js')

// Create Bot
const client = new Client({intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
]})

// Event Handler //
const eventsPath = path.join(__dirname, 'events')
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'))

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

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

newUser(1, 'lol', 0, 0)