const { Router } = require("express");
const { getGamesHandler, getDetailHandler, postCreateHandler} = require("../handlers/gamesHandlers");
const gamesRouter = Router();

gamesRouter.get("/", getGamesHandler);

gamesRouter.get("/:id", getDetailHandler);

gamesRouter.post("/", postCreateHandler);

module.exports = gamesRouter;