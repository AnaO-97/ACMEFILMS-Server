const { Router } = require("express");
const filmNew = require("../handlers/filmNew");

const filmRoutes = Router();

// filmRoutes.get("/all, ")
filmRoutes.post("/create", filmNew);

module.exports = filmRoutes;