const filmUpdate = require("../controllers/filmUpdate");

module.exports = async ( req, res ) => {
    try {
       const { id } = req.params;
       const editAttributes = req.body;
       const updatedFilm = await filmUpdate( editAttributes, id );
       
       if(updatedFilm !== null){
            res.status(200).json( updatedFilm );
       }
       else{
            res.status(400).json({ filmChangeHandler : "film not found" }) 
       }
    } catch (error) {
        res.status(400).json({ filmChangeHandler: error.message })
    }
};