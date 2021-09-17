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
  }, [checkMovieData, data]);

  return (
    <>
      <MovieDetails movie={data} />
      <MovieActors actors={data?.credits?.cast} />
      <SimiliarMovies movieTitle={data?.title} movieId={movieId && movieId} />
    </>
  );
};

export default MoviePage;
