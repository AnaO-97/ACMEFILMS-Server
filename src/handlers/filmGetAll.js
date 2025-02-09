const filmFindAll = require("../controllers/filmFindAll");

module.exports = async( req, res ) => {
    try {                              
        const allFilms     = await filmFindAll();        

        res.status(200).json(allFilms);

    } catch (error) {
        res.status(400).json({ filmGetAllHandler : error.message })
    }
};