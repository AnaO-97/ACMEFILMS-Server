const {Film, User, Favorite} = require("../database");

module.exports = async( userId, filmId ) => {
    const isUser = await User.findByPk(userId);
    const isFilm = await Film.findByPk(filmId);

    if(isUser && isFilm){
        const newFavorite = await Favorite.create({userId, filmId});   
        return newFavorite;
    }

    else{
        return({ favoriteCreateController: "User or film don't exits" });
    }

};