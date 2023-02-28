// Imports
const { Model, Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("node-test", "root", "n7GSycc@$sWnT1F6LmDj", {
  dialect: 'mysql',
  host: 'localhost'
});

class User extends Model {}
User.init({
  id: DataTypes.INTEGER,
  username: DataTypes.STRING,
  level: DataTypes.INTEGER,
  xp: DataTypes.INTEGER
}, {sequelize, modelName: 'user'})



module.exports = sequelize, User

