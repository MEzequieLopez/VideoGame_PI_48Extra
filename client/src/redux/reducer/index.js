import { GET_VIDEOGAMES, GET_BY_NAME, GET_BY_DETAIL,GET_ALL_GENRES } from "../actions";


let initialState = { allVideoGames:[],allVideoGamesCopy:[], videoGameDetail:[],allGenres:[], allGenresCopy:[]};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideoGames: action.payload,
        allVideoGamesCopy:action.payload
      };
      case GET_BY_NAME:
      return {
        ...state,
        allVideoGames: action.payload,
      };
      case GET_BY_DETAIL:
      return {
        ...state,
        videoGameDetail: action.payload,

      };
      case GET_ALL_GENRES:
      return {
        ...state,
        allGenres:action.payload,
        allGenresCopy:action.payload,
      };
      default:
            return state;
        }
}
export default rootReducer;
