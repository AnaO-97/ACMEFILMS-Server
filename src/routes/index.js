const { Router } = require("express");
const filmRoutes = require("./filmRoutes");

const routes = Router();

routes.get("/", ( req, res ) => {
    res.status(200).send(" This is the My ACME FILMS server, everything is ready. ")
});

routes.use("/film", filmRoutes);



module.exports = routes;