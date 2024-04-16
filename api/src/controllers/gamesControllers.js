const axios = require("axios");
const { Op } = require("sequelize");
const { Videogame, Genre } = require("../db.js");
const { infoCleaner, infoCleanerId } = require("../utils");

const genresNameBd = async () => {
  const response = await axios.get(`https://api.rawg.io/api/genres?key=0c74b1f59d2d42feaebdee0a0a298e22`);
  const genresVideoGames = response.data.results;
  for (const genresd of genresVideoGames) {
    await Genre.upsert({ name: genresd.name });
  }
  // const genreDb = genresVideoGames.map( genre => ({name: genre.name}))
        
  // const allGernes = await Genres.bulkCreate(genreDb)
  // return allGernes
};



const getGamesInfo = async () => {
  const videoGamesBd = await Videogame.findAll({
    include: [{
       model: Genre,
       as: 'genres', // Asegúrate de usar el mismo alias que definiste en tu asociación
       through: { attributes: [] } // Opcional: excluye los atributos de la tabla de relación
    }]
   });
  const allVideogame = [];
  let nextUrl =
    "https://api.rawg.io/api/games?key=0c74b1f59d2d42feaebdee0a0a298e22";
  let contador = 0;
  while (contador < 5) {
    const response = await axios.get(nextUrl);
    allVideogame.push(...response.data.results);
    nextUrl = response.data.next;
    contador++;
  }
  const infoCleairVideoGameApi = infoCleaner(allVideogame);
  console.log(infoCleairVideoGameApi);
  return [...videoGamesBd, ...infoCleairVideoGameApi];
};

const getGamesByName = async (name) => {
  const videoGameBd = await Videogame.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: [{
      model: Genre,
      as: 'genres', // Asegúrate de usar el mismo alias que definiste en tu asociación
      through: { attributes: [] } // Opcional: excluye los atributos de la tabla de relación
   }]
  });

  let nextUrl = `https://api.rawg.io/api/games?search=${name}&key=0c74b1f59d2d42feaebdee0a0a298e22`;
  const videoGamesApi = [];
  const videoGamesDb = []
  const response = await axios.get(nextUrl)
  response.data.results.forEach(videogame => {
   if(videogame.name.toLowerCase().includes(name.toLowerCase())){
    if(videoGamesApi.length < 15) {
     videoGamesApi.push(videogame)
  }}
})

const videoGamesApiCleair =  infoCleaner(videoGamesApi);
videoGameBd.forEach(videogameDb => {
  if(videogameDb.name.toLowerCase().includes(name.toLowerCase())){
   if(videoGamesDb.length < 15) {
    videoGamesDb.push(videogameDb)
 }}
})
//   while (videoGame.length < 15) {
//     const response = await axios.get(nextUrl);
//     videoGame.push(...response.data.results);
   
// }
// if (videoGame.length > 15) {
//   videoGame.length = 15;
// }
const totalVideoGames = [...videoGamesApiCleair,...videoGamesDb].slice(0, 15);
// const lowerCaseName = name.toLowerCase();
return totalVideoGames;
};



const getVideoGameById = async (id, source) => {
  let videoGameGenre;
  if (source === "api") {
    const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=0c74b1f59d2d42feaebdee0a0a298e22`);

    const videoGameGenreId =  infoCleanerId(response.data);
    videoGameGenre = videoGameGenreId;
  } else {
    videoGameGenre = await Videogame.findByPk(id, {
      include: [
        {
          model: Genre,
          as: "genres",
          attributes: ['name'],
          through: { attributes: [] }
        },
      ],
    });
  }
  return [videoGameGenre];
};
  // const videoGameForName = videoGamesCleair.filter(
  //   (game) => game.name.toLowerCase() === lowerCaseName
  // );
module.exports = {
  getGamesInfo,
  getGamesByName,
  getVideoGameById,
  genresNameBd
};
