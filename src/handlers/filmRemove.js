const filmDelete = require("../controllers/filmDelete");

module.exports = async( req, res ) => {
    try {        
        const { id } = req.params;
                        
        const filmDel = await filmDelete( id );

        if(filmDel !== null){
            res.status(200).json( filmDel );
        }
        else{
            res.status(400).json({ filmRemoveHandler: "film not found" })
        }

    } catch (error) {
        res.status(400).json({ RouteError : error.message })
    }
};