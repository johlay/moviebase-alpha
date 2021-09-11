import { useQuery } from "react-query";
import { getPopularMovies } from "../../services/TmdbApi";
import MoviesList from "./MoviesList";

const PopularMovies = () => {
  const { data } = useQuery(["get-popular-movies"], () => getPopularMovies());

  return (
    <>
      <h2 className="text-light py-3">
        <u>Popular movies</u>
      </h2>
      <MoviesList movies={data} />
    </>
  );
};

export default PopularMovies;
