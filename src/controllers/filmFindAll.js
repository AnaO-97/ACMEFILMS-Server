const { Film } = require("../database");

module.exports = async() => {
    const allFilms = await Film.findAll();

    return allFilms;
}
