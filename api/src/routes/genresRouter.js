const { Router } = require("express");
const {getGenresHandler} = require("../handlers/genresHandlres.js")

const genresRouter = Router();

genresRouter.get("/", getGenresHandler)

module.exports = genresRouter;