const { Film, Favorite } = require("../database");

module.exports = async(id) => {
    const allFavorites= await Favorite.findAll({
        where: { userId: id },
        include: [{ model: Film}]
      });
    
      return allFavorites.map(favorite => favorite.Film.id);
}