// Imports
const mongoose = require('mongoose')
const User = require('./models/User.js')

// Connect to MongoDB
const uri ="mongodb+srv://root:r0jpkmcZLy0zqr5o@slohdow.ym89jr7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))

async function newUser(discord_id, username, level, xp) {
    const user = new User({
        discord_id: discord_id,
        username: username,
        level: level,
        xp: xp
    })

    user.save().catch((err) => {return err})
}

async function IsRegistered(discord_id) {

}

module.exports = {
    newUser: newUser,
    IsRegistered: IsRegistered
}