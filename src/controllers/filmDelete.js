const { Film } = require("../database");

module.exports = async( id ) => {
    const filmToDelete = await Film.findByPk( id );

    if( filmToDelete !== null ){
        await filmToDelete.destroy();
        return filmToDelete;
    }
    else{
        return null;
    }  
};