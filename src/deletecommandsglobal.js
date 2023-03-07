const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const clientId = process.env.test_application_id;
const token = process.env.test_token;

const rest = new REST({ version: "9" }).setToken(
  "MTA3NzMxNTkxOTkyNTIzNTc4NA.GJH2Tu.oqm8mGUnUd0tD4_k0ytHRRG9vXaH72ZIfOOoMo"
);

rest
  .get(Routes.applicationCommands("1077315919925235784"))
  .then((commands) => {
    console.log(`Deleting ${commands.length} commands.`);
    rest
      .put(Routes.applicationCommands("1077315919925235784"), { body: [] })
      .then(() => console.log("Commands successfully deleted."))
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error));