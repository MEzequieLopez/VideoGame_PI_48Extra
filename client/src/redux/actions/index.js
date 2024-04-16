import axios from "axios";
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_DETAIL = "GET_BY_DETAIL";
export const POST_VIDEOGAMES = "POST_VIDEOGAMES";


export function getVideoGame() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/videogames");
      console.log(response);
      return dispatch({
        type: GET_VIDEOGAMES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getVideoGameByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/videogames?name=${name}`
      );
      return dispatch({
        type: GET_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getVideoGameByDetail(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/videogames/${id}`
      );
      return dispatch({
        type: GET_BY_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getAllGenres() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/genres");
      return dispatch({
        type: GET_ALL_GENRES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

// export const videogameByApiOrDb = (value) => {
//   return async (dispatch) => {
//     try {
//       return dispatch({
//         type: GET_ALL_VIDEOGAMES_BY_ORIGIN,
//         payload: value,
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

// export const videogamesByOrder = (value) => {
//   return async (dispatch) => {
//     try {
//       return dispatch({
//         type: GET_ALL_VIDEOGAMES_BY_ORDER,
//         payload: value,
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

// export const videogamesByGenre = (value) => {
//   return async (dispatch) => {
//     try {
//       return dispatch({
//         type: GET_VIDEOGAME_BY_GENRE,
//         payload: value,
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };
