const { Film } = require("../database");

module.exports = async ( attributes, id ) => {    
    let filmUpdate = await Film.findByPk(id);;

    if(filmUpdate){
        for (const att in attributes){             
            filmUpdate[ att ] = attributes[ att ];
        }
        const filmUpdated = await filmUpdate.save();


        return (filmUpdated);
    }
    else{
        return null;
    }
};