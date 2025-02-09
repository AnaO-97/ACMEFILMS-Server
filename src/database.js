require('dotenv').config();
const { Sequelize } = require("sequelize");
const { DB_PROTOCOL, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const filmModel = require("./models/Film");
const userModel = require("./models/User");

const database = new Sequelize(
    `${ DB_PROTOCOL }://${ DB_USER }:${ DB_PASSWORD }@${ DB_HOST }/${ DB_NAME }`,
    { logging: false }
)

filmModel(database);
userModel(database);

module.exports = { database, ...database.models };