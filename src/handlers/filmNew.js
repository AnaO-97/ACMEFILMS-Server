const filmCreate = require("../controllers/filmCreate");

module.exports = async( req, res ) => {
    try {        
        const { 
            title,
            image, synopsis,
            genre, releaseDate,
            actors, score,
            minimumAge, filmStudio,
        } = req.body;

        const newFilm = await filmCreate({ 
            title,
            image, synopsis,
            genre, releaseDate,
            actors, score,
            minimumAge, filmStudio,
        });
        
        res.status(200).json(newFilm);

    } catch (error) {
        res.status(400).json({ filmNewController : error.message })
    }
};