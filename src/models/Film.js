const { DataTypes } = require("sequelize");

module.exports = (database) => {
    database.define("Film", {
        id: {
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey : true,
        },
        title: {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        image: {
            type : DataTypes.STRING(200),
            allowNull : false,
        }, 
        synopsis: {
            type : DataTypes.STRING(300),
            allowNull : false,
        },
        genre: {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        releaseDate: {
            type : DataTypes.STRING(50),
            allowNull : false,
        },
        minimumAge: {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        filmStudio: {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        actors: {
            type : DataTypes.ARRAY(DataTypes.STRING(100)),
            allowNull : false,
        },
        score: {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
    })
};