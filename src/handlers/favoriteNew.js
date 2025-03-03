const favoriteCreate = require("../controllers/favoriteCreate");

module.exports = async ( req, res ) => {
    try {
        const { userId, filmId } = req.body;
        const newFavorite = await favoriteCreate( userId, filmId );

        if(newFavorite.favoriteCreateController){
            res.status(400).json({favoriteCreateController: newFavorite.favoriteCreateController});
        }

        else{
            res.status(200).json(newFavorite);
        }


    } catch (error) {
        res.status(400).json({ favoriteNewHandler : error.message })
    }
}