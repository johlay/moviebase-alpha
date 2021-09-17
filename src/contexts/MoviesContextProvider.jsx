import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [value, setValue] = useLocalStorage("recently-viewed");
  const [recentMovies, setRecentMovies] = useState({ results: [] });

  useEffect(() => {
    if (!value) {
      return;
    }

    // when component mounts, check if storage key: "recently-viewed" is stored in local storage. If true, load it to state.
    if (value) {
      return setRecentMovies(value);
    }
  }, []);

  useEffect(() => {
    // as soon as state: "recentMovies" updates then save information to local storage.
    if (recentMovies.results.length > 0) setValue(recentMovies);
  }, [recentMovies]);

  // check the incoming data
  const checkMovieData = (movieData) => {
    // variable for checking if state: "recentMovies" contains the same movie.
    const movieExists = recentMovies?.results?.some(
      (movie) => movie.id === movieData.id
    );

    // check if state: "recentMovies" contains the same movie. If true, replace that existing movie with index position: 0
    if (movieExists) {
      // create a new movie list EXCEPT the already existing movie.
      const newList = recentMovies.results.filter(
        (movie) => movie.id !== movieData.id
      );

      // add the "existing movie" to top position of array (index position: 0)
      newList.unshift(movieData);

      // save new list to state: "recentMovies"
      setRecentMovies({ results: [...newList] });

      return;
    }

    // check if state: "recentMovies" contains more than 10 movies.
    if (recentMovies.results.length >= 10) {
      // only return/save the recently viewed movies (9 movies from this list which consists of 10 movies.)
      const newList = recentMovies.results.filter((movie, index) => {
        if (index < 9) return movie;
        else return "";
      });

      // save new list to state: "recentMovies"
      setRecentMovies({ results: [movieData, ...newList] });

      return;
    }

    // if state: "recentMovies" contains less than 11 movies, then spread out that list of recentMovies and add the "recently viewed movie" to first position of the new array.
    if (recentMovies.results.length < 10) {
      setRecentMovies({ results: [movieData, ...recentMovies.results] });

      return;
    }
  };

  return (
    <MoviesContext.Provider value={{ recentMovies, checkMovieData }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
