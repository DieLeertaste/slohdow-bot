// Imports
const User = require('../../models/User.js')

const user = new User({
    discord_id: 1234,
    username: 'test',
    level: 0,
    xp: 0
})

user.save().then(() => console.log('Registered User')).catch((err) => console.log(err))