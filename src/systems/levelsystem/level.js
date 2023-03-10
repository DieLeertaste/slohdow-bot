const { newUser, IsRegistered } = require("../../database.js");

//newUser(2, "lol", 0, 0);
if (IsRegistered(2) == true) {
    console.log('Jo');
} else {
    console.log('Ne')
}
