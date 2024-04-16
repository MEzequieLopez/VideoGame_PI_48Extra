const {getGamesInfo, getGamesByName, getVideoGameById } = require("../controllers/gamesControllers");
const { postVideoGameBd } = require("../controllers/postGamesControllers");

const postCreateHandler = async (req, res) => {
  const videoGamesInfoBd = req.body;

  try {
    const CreaterVideoGamesBd = await postVideoGameBd(videoGamesInfoBd);
    res.status(200).json(CreaterVideoGamesBd);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getGamesHandler = async (req, res) => {
    const { name } = req.query;
  
    try {
      if (name) {
        const gamesForName = await getGamesByName(name);
        if (gamesForName.length > 0) {
          res.status(200).json(gamesForName);
        } else {
          res.status(404).json({ error: `name: ${name} not found` });
        }
      } else {
        const gamesInfo = await getGamesInfo();
        res.status(200).json(gamesInfo);
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while processing your request." });
    }
  };
  const getDetailHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "db" : "api";
    try {
      const response = await getVideoGameById(id, source);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };


  module.exports = {
    getGamesHandler,
    getDetailHandler,
    postCreateHandler,
  }