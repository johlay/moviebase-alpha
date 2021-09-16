import { useQuery } from "react-query";
import { getPopularMovies } from "../../services/TmdbApi";
import MoviesList from "./MoviesList";

const PopularMovies = () => {
  const { data } = useQuery(["get-popular-movies"], () => getPopularMovies());

  return (
    <>
      <h3 className="text-light py-3" id="popular-movies-title">
        Popular movies
      </h3>
      <MoviesList movies={data} />
    </>
  );
};

export default PopularMovies;
