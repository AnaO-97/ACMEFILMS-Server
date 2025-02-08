const { Router } = require("express");

const routes = Router();

routes.get("/", ( req, res ) => {
    res.status(200).send(" This is the My ACME FILMS server, everything is ready. ")
});



module.exports = routes;