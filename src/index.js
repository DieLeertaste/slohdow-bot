// Imports
const { Client, GatewayIntentBits, Events, Collection } = require('discord.js')
const path = require("node:path");
require("dotenv").config();
const fs = require("node:fs");
const { newUser, IsRegistered, dbconnect } = require('./database.js');
const User = require('./models/User.js');

// Db Connection
dbconnect();

// Create Bot
const client = new Client({intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
]})

// Events //
// Client Ready Event //
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`)
})

// Message Create Event //
client.on(Events.MessageCreate, message => {
    const member = message.author
    const username = message.author.username;

    async function checkIsRegistered() {
      const isNew = await IsRegistered(member.id);
      if (isNew) {
        newUser(member.id, username, 0, 0)
        console.log('New User registered');
      } else {
        const level = [5, 10, 50, 100, 500, 1000]
        
        function getRandomInt(max) {
          return Math.floor(Math.random() * max);
        }
        const user = await User.findOne({ discord_id: member.id });
        const xp = getRandomInt(5)
        const old_xp = user['xp']
        const new_xp = old_xp + xp;
        var new_lvl = 0

        await User.findOneAndUpdate({discord_id: member.id}, {xp: new_xp })
      }
    }
    checkIsRegistered();
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