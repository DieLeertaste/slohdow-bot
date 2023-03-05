module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        discord_id: {
            type: DataTypes.INT,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        level: {
            type: DataTypes.INT,
            allowNull: false
        },
        xp: {
            type: DataTypes.INT,
            allowNull: false
        }
    })
    return User;
}