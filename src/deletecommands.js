const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const clientId = process.env.test_application_id;
const token = process.env.test_token;

const rest = new REST({ version: "9" }).setToken(
  "MTA3Nzk5ODM1NzM0MTAxMjAxOQ.GerPQL.P1JiVZd12SGzkht5c0SPxDEKO7CsrQFKyVnvFA"
);

rest
  .get(Routes.applicationCommands("1077998357341012019"))
  .then((commands) => {
    console.log(`Deleting ${commands.length} commands.`);
    rest
      .put(Routes.applicationCommands("1077998357341012019"), { body: [] })
      .then(() => console.log("Commands successfully deleted."))
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error));