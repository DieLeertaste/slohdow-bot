const { sequelize, User } = require('../../../database.js');

(async () => {
    await sequelize.sync()
})()
