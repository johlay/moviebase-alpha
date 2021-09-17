import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContextProvider";

const useMovies = () => {
  return useContext(MoviesContext);
};

export default useMovies;
