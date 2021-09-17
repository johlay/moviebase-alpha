import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getSpecificMovie } from "../services/TmdbApi";
import MovieDetails from "../components/movie/MovieDetails";
import MovieActors from "../components/movie/MovieActors";
import SimiliarMovies from "../components/movie/SimiliarMovies";
import useMovies from "../hooks/useMovies";

const MoviePage = () => {
  const { movieId } = useParams();
  const { data } = useQuery(["get-specific-movie", movieId], () =>
    getSpecificMovie(movieId)
  );

  

  const { checkMovieData } = useMovies();

  useEffect(() => {
    if (data) {
      // function for handling incoming movie data - before saving data to "recently-viewed" movies in local storage.
      checkMovieData(data);
    }
  }, [data]);

  // useEffect(() => {
  //   // First check if there is data about movie - if true: as soon as user enters "page for specific movie" then save details about the movie to local storage.
  //   if (data) {
  //     // variable for checking if local storage key: "recently-viewed" contains the same movie.
  //     const movieExists = value?.results?.some((movie) => movie.id === data.id);
  //     // check if local storage key: "recently-viewed" contains the same movie. If true, replace that existing movie with index position: 0.
  //     if (movieExists) {
  //       // create a new movie list EXCEPT the already existing movie.
  //       const newList = value?.results?.filter((movie) => movie.id !== data.id);
  //       // adds the "existing movie" to top position of array (index position: 0)
  //       newList.unshift(data);
  //       // save new list to local storage.
  //       setValue({ results: [...newList] });
  //       return;
  //     }
  //     // check if local storage key: "recently-viewed" has 10 movies.
  //     if (value?.results?.length >= 10) {
  //       // only returns/saves the recently viewed movies (9 movies() from this list which consists of 10 movies.
  //       const newList = value?.results?.filter((movie, index) => {
  //         if (index < 9) return movie;
  //         else return "";
  //       });
  //       // save new list to local storage.
  //       setValue({ results: [data, ...newList] });
  //       return;
  //     }
  //     // If data is found in local storage, then spread out that list of data and add the "recent viewed movie" to first position of the new array.
  //     value
  //       ? setValue({ results: [data, ...value.results] })
  //       : setValue({ results: [data] });
  //   }
  // }, [data]);

  return (
    <>
      <MovieDetails movie={data} />
      <MovieActors actors={data?.credits?.cast} />
      <SimiliarMovies movieTitle={data?.title} movieId={movieId && movieId} />
    </>
  );
};

export default MoviePage;
