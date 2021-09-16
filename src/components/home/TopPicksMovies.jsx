import { useQuery } from "react-query";
import { getTopPicksMovies } from "../../services/TmdbApi";
import MoviesList from "./MoviesList";

const TopPicksMovies = () => {
  const { data } = useQuery(["get-top-rated-movies"], () =>
    getTopPicksMovies()
  );

  return (
    <>
      <h2 className="text-light py-3 h3" id="top-picks-movies-title">
        <u>Top picks</u>
      </h2>
      <MoviesList movies={data} />
    </>
  );
};

export default TopPicksMovies;
