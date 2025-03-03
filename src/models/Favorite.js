const { DataTypes } = require("sequelize");

module.exports = (database) => {
    database.define("Favorite", {
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "Users",
                key: "id",
            },
        },
        filmId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "Films",
                key: "id",
            },
        }
    })
};