/**
 * TMDB API
 */

import axios from "axios";

const API_KEY = "api_key=" + process.env.REACT_APP_TMDB_API_KEY;


/**
 *  Genres - services related to genres
 */

// get all genres for movies
const getAllGenres = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?${API_KEY}`
  );

  return response.data.genres;
};

// get all movies by specific genre
const getMoviesByGenre = async () => {};

export { getAllGenres, getMoviesByGenre };
