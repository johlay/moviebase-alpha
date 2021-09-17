import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [value, setValue] = useLocalStorage("recently-viewed");
  const [recentMovies, setRecentMovies] = useState("");

  useEffect(() => {
    if (!value) {
      console.log("storage key is NOT found");
    }

    // when component mounts, check if storage key: "recently-viewed" is stored in local storage. If true, load it to state.
    if (value) {
      console.log("storage key 'recently-viewed' is found:", value);

      return setRecentMovies(value);
    }
  }, []);

  return <MoviesContext.Provider value={{}}>{children}</MoviesContext.Provider>;
};

export default MoviesContextProvider;
