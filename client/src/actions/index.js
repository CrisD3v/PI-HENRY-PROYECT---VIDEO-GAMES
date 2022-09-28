import axios from 'axios'
import {
    GET_VIDEOGAMES,
    GET_GENRES,
    FILTER_BY_GENRE,
    FILTER_BY_API_OR_DB,
    ALPHABETICAL_SORT,
    SORT_BY_RATING,
    GET_VIDEOGAMES_BY_NAME,
    GET_DETAIL_VIDEOGAME,
    RESET_DETAIL,
    GET_PLATFORMS,
    GO_BACK_HOME,
    RESET_VIDEOGAMES,
    MEMORY_CURRENT_PAGE,
    FROM_BY_NAME_TO_ALLVIDEOGAMES,
} from "./types/index";

const LOCALHOST = "http://localhost:3001";

export  function getVideogames(){
  return async  function (dispatch){
      const res = await axios.get(`${LOCALHOST}/videogames`)
      console.log(res)
      dispatch({ type: GET_VIDEOGAMES, payload: res.data });
  }
}

export function getGenres() {
  return async function (dispatch){
    const res = await axios.get(`${LOCALHOST}/genres`)
    dispatch({type: GET_GENRES, payload: res.data})
  }
};


export const getPlatforms = () => (dispatch) => {
    fetch(`${LOCALHOST}/platforms`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GET_PLATFORMS,
          payload: data,
        })
      );
};
  
export const getVideogamesByName = (name) => (dispatch) => {
    fetch(`${LOCALHOST}/videogames?name=${name}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GET_VIDEOGAMES_BY_NAME,
          payload: data,
        })
      );
};
  
export const getDetailVideogame = (id) => (dispatch) => {
    try {
      fetch(`${LOCALHOST}/videogames/${id}`)
        .then((response) => response.json())
        .then((data) =>
          dispatch({
            type: GET_DETAIL_VIDEOGAME,
            payload: data,
          })
        );
    } catch (error) {
      console.log(error);
    }
  };
  
export const postVideogame = (payload) => (dispatch) => {
    fetch(`${LOCALHOST}/videogames`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  
export const filterByGenre = (payload) => ({ type: FILTER_BY_GENRE, payload });
  
export const filterByApiOrDb = (payload) => ({
    type: FILTER_BY_API_OR_DB,
    payload,
  });
  
export const alphabeticalSort = (payload) => ({
    type: ALPHABETICAL_SORT,
    payload,
  });
  
export const sortByRating = (payload) => ({
    type: SORT_BY_RATING,
    payload,
  });
  
export const resetDetail = () => ({ type: RESET_DETAIL });
  
export const goBackHome = () => ({ type: GO_BACK_HOME });
  
export const resetVideogames = () => ({ type: RESET_VIDEOGAMES });
  
export const fromByNameToAllVideogames = () => ({
    type: FROM_BY_NAME_TO_ALLVIDEOGAMES,
  });
  
export const memoryCurrentPage = (page) => ({
    type: MEMORY_CURRENT_PAGE,
    payload: page,
});