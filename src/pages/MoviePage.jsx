import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getSpecificMovie } from "../services/TmdbApi";
import MovieDetails from "../components/movie/MovieDetails";
import MovieActors from "../components/movie/MovieActors";
import SimiliarMovies from "../components/movie/SimiliarMovies";

const MoviePage = () => {
  const { movieId } = useParams();
  const { data } = useQuery(["get-specific-movie", movieId], () =>
    getSpecificMovie(movieId)
  );

  return (
    <>
      <MovieDetails movie={data} />
      <MovieActors actors={data?.credits?.cast} />
      <SimiliarMovies movieTitle={data?.title} movieId={movieId && movieId} />
    </>
  );
};

export default MoviePage;
