const { Router } = require("express");
const favoriteNew = require("../handlers/favoriteNew");
const favoriteGetAll = require("../handlers/favoriteGetAll");
// const favoriteRemove = require("../handlers/favoriteRemove");

const favoriteRoutes = Router();

favoriteRoutes.get("/all/:idUser", favoriteGetAll)
favoriteRoutes.post("/add", favoriteNew);
// favoriteRoutes.delete("/delete/:id", favoriteRemove);

module.exports = favoriteRoutes;