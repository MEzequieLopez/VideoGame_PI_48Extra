const { Genre } = require("../db.js");
const { genresAll } = require("../utils");
const { genresNameBd } = require("../controllers/gamesControllers.js")
const getGenresHandler = async (req, res) => {
    try {
        const genresCount = await Genre.count();
        if (genresCount === 0) {
          await  genresNameBd();
        }
        const genresVideoGamesAll = await genresAll();
        res.status(200).json(genresVideoGamesAll);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    };

    module.exports = {
        getGenresHandler,
    }
