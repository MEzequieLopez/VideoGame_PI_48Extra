const axios = require("axios");
const { Genre } = require("../db")

const infoCleaner = (datas) => {
  const videoGamesClear = [];
  for (const dataGames of datas) {
    const { id, name, rating, background_image, platforms, released, genres } = dataGames
    
    const plataformas = platforms.map((nameP) => {
      return nameP.platform.name});
    
    const generos = genres.map((nameG) => {
      return {name:nameG.name,id:nameG.id}
    })
    const GameClear = {
      id,
      name,
      rating,
      image: background_image,
      platforms: plataformas,
      launchDate: released,
      origin:"API",
      genres:generos
    };
    videoGamesClear.push(GameClear);
  }
  return  videoGamesClear;
};
const infoCleanerId = (data) => {
  // const videoGamesClear = [];
    const { id, name, rating, background_image, platforms, released, description_raw, genres } = data
    const genre = genres.map((data) => {
      return data.name
    });
    const plataformas = platforms.map((nameP) => {
      return nameP.platform.name});
      const cleanText = description_raw.replace(/\n/g, '');
    const GameClear = {
      id,
      description:cleanText,
      name,
      rating,
      image: background_image,
      platforms: plataformas,
      launchDate: released,
      genres:genre,
    };
    // videoGamesClear.push(GameClear);
    return GameClear;
  }

  const genresAll = async () => {
    const genres = await Genre.findAll();
    const genresAlls = genres.map((genre) => genre.name);
    return genresAlls;
  };

module.exports = {
    infoCleaner,
    infoCleanerId,
    genresAll,
}

