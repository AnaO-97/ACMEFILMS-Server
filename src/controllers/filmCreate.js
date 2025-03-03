const {Film} = require("../database");

module.exports = async( attributes ) => {
    const newFilm = await Film.create(attributes);

    return newFilm;
};