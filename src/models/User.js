const { DataTypes } = require("sequelize");

module.exports = (database) => {
    database.define("User", {
        id : {
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey : true,
        },
        userType : {
            type : DataTypes.STRING(100),
        },
        fullName : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        email : {
            type : DataTypes.STRING(100),
            unique : true,
            allowNull : false,
        },
        password : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
    })
};