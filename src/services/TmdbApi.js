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
const getMoviesByGenre = async (genreId, page) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?${API_KEY}&sort_by=popularity.desc&with_genres=${genreId}&page=${page}`
  );

  return response.data;
};

/**
 * Movies - services related to movies
 */

const getMoviesInTheatres = async (page = "") => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?${API_KEY}&page=${page}`
  );

  return response.data;
};

const getPopularMovies = async (page = "") => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?${API_KEY}&page=${page}`
  );

  return response.data;
};

const getTopPicksMovies = async (page = "") => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?${API_KEY}&page=${page}`
  );

  return response.data;
};

const getSpecificMovie = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?${API_KEY}&append_to_response=credits`
  );

  return response.data;
};

const getSimiliarMovies = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?${API_KEY}`
  );

  return response.data;
};

const getTrendingMoviesByTimeWindow = async (timeWindow, page = "") => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movies/${timeWindow}?${API_KEY}&page=${page}`
  );

  return response.data;
};

/**
 * Actor - services related to specific actor
 */

const getActorInformation = async (actorId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/person/${actorId}?${API_KEY}`
  );

  return response.data;
};

const getActorFilmography = async (actorId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=3957710d523b2f23506b71db6df8171d`
  );

  // sort returned data from API so that latest release date of movies (as cast) are placed at first position of array.
  const sortCastMoviesByLatestReleaseDate = await response.data.cast.sort(
    (a, b) => {
      // If 'a' or 'b' has an empty string as value. Sort it and place it at the end of the array.
      if (a.release_date === "") return 1;
      if (b.release_date === "") return -1;

      // If there is a 'truthty' value in both a.release_date and b.release_date. Place the latest movie above the other one.
      return parseInt(b.release_date) - parseInt(a.release_date);
    }
  );

  // sort returned data from API so that latest release date of movies (as crew) are placed at first position of array.
  const sortCrewMoviesByLatestReleaseDate = await response.data.crew.sort(
    (a, b) => {
      // If 'a' or 'b' has an empty string as value. Sort it and place it at the end of the array.
      if (a.release_date === "") return 1;
      if (b.release_date === "") return -1;

      // If there is a 'truthty' value in both a.release_date and b.release_date. Place the latest movie above the other one.
      return parseInt(b.release_date) - parseInt(a.release_date);
    }
  );

  return {
    cast: sortCastMoviesByLatestReleaseDate,
    crew: sortCrewMoviesByLatestReleaseDate,
  };
};

/**
 * Search - services related to search
 */

const search = async (query, page) => {
  // checks if query and page is empty strings.
  if (query.length === 0 || page.length === 0) return null;

  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?${API_KEY}&query=${query}&page=${page}`
  );

  return response.data;
};

export {
  getAllGenres,
  getMoviesByGenre,
  getMoviesInTheatres,
  getPopularMovies,
  getTopPicksMovies,
  getSpecificMovie,
  getSimiliarMovies,
  getTrendingMoviesByTimeWindow,
  getActorInformation,
  getActorFilmography,
  search,
};
