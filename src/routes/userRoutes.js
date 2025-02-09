const { Router } = require("express");
const userLogin = require("../handlers/userLogin");

const userRoutes = Router();

userRoutes.post("/login", userLogin);

module.exports = userRoutes;