// Imports
const { Model, Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("node-test", "root", "n7GSycc@$sWnT1F6LmDj", {
  dialect: 'mysql',
  host: 'localhost'
});

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  level: DataTypes.INTEGER,
  xp: DataTypes.INTEGER
}, {sequelize, modelName: 'user'})

async function newuser (discord_id ,username, level, xp) {
  await sequelize.sync()
  const u = await User.create({
    discord_id: discord_id,
    username: username,
    level: level,
    xp: xp
  })
}

async function IsRegistered (Username) {
  await sequelize.fn(`SELCET * FROM users WHERE username = (?)`, [Username])

}
//newuser(1, 'test', 1, 1)
IsRegistered('test')

exports = {newuser, IsRegistered}
exports.User = User
exports.sequelize = sequelize

