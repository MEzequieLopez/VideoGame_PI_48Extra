
const { Videogame, Genre } = require("../db.js");

const postVideoGameBd = async (videoGamesInfoBd) => {
  const  { name, rating, image, platforms, launchDate, description, genreId, origin } =
  await videoGamesInfoBd;
  const newVideogame = await Videogame.create({ name, rating, image, platforms, launchDate, description, origin });

  const idGenreNumber = genreId.map( id => Number(id))
    
    const dbGenres = await Genre.findAll({ where: { id: idGenreNumber } })
    
    for(let i = 0; i < dbGenres.length; i++){
  await newVideogame.addGenres(dbGenres[i])
    }
  return newVideogame;
    
};

module.exports = { postVideoGameBd };