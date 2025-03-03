require('dotenv').config();
const { Sequelize } = require("sequelize");
const { DB_PROTOCOL, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const filmModel = require("./models/Film");
const userModel = require("./models/User");
const favoriteModel = require("./models/Favorite");

const database = new Sequelize(
    `${ DB_PROTOCOL }://${ DB_USER }:${ DB_PASSWORD }@${ DB_HOST }/${ DB_NAME }`,
    { logging: false }
)

filmModel(database);
userModel(database);
favoriteModel(database);

const {User, Film, Favorite} = database.models;

User.belongsToMany(Film, {through: Favorite, foreignKey: "userId"});
Film.belongsToMany(User, {through: Favorite, foreignKey: "filmId"});
Favorite.belongsTo(User, { foreignKey: 'userId' });
Favorite.belongsTo(Film, { foreignKey: 'filmId' });

module.exports = {database, ...database.models};