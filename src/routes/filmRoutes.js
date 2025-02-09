const { Router } = require("express");
const filmNew = require("../handlers/filmNew");
const filmChange = require("../handlers/filmChange");
const filmGetAll = require("../handlers/filmGetAll");
const filmRemove = require("../handlers/filmRemove");

const filmRoutes = Router();

filmRoutes.put("/:id", filmChange);
filmRoutes.get("/all", filmGetAll)
filmRoutes.post("/create", filmNew);
filmRoutes.delete("/delete/:id", filmRemove);

module.exports = filmRoutes;