const favoriteFindAll = require("../controllers/favoriteFindAll");

module.exports = async( req, res ) => {
    try {                              
        const {idUser} = req.params;

        const allFavoritesFilms= await favoriteFindAll(idUser);        

        res.status(200).json(allFavoritesFilms);

    } catch (error) {
        res.status(400).json({ favoriteGetAllHandler : error.message })
    }
};