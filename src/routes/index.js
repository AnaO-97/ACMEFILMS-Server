const { Router } = require("express");
const filmRoutes = require("./filmRoutes");
const userRoutes = require("./userRoutes");
const favoriteRoutes = require("./favoriteRoutes");

const routes = Router();

routes.get("/", ( req, res ) => {
    res.status(200).send(" This is the My ACME FILMS server, everything is ready. ")
});

routes.use("/film", filmRoutes);
routes.use("/user", userRoutes);
routes.use("/favorite", favoriteRoutes);

module.exports = routes;