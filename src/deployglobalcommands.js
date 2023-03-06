require("dotenv").config();
const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const commands = [];
const path = require("node:path");
const clientId = process.env["test_application_id"];
const guildId = process.env["test_guild"];

const commandfiles = fs
  .readdirSync("./src/commands")
  .filter((file) => file.endsWith(".js"));

commandfiles.forEach((commandfile) => {
  const command = require(`./commands/${commandfile}`);
  commands.push(command.data.toJSON());
});

const restClient = new REST({ version: "9" }).setToken(process.env.test_token);

restClient
  .put(
    Routes.applicationCommands(process.env.test_application_id), { body: commands }
  )
  .then(() => console.log("Succesfully registered Commands"))
  .catch(console.error);
