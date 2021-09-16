import { useQuery } from "react-query";
import { getTopPicksMovies } from "../../services/TmdbApi";
import MoviesList from "./MoviesList";

const TopPicksMovies = () => {
  const { data } = useQuery(["get-top-rated-movies"], () =>
    getTopPicksMovies()
  );

  return (
    <>
      <h3 className="text-light py-3" id="top-picks-movies-title">
        Top picks
      </h3>
      <MoviesList movies={data} />
    </>
  );
};

export default TopPicksMovies;
