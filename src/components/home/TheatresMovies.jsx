import { useQuery } from "react-query";
import { getMoviesInTheatres } from "../../services/TmdbApi";
import MoviesList from "./MoviesList";

const TheatresMovies = () => {
  const { data } = useQuery(["get-theatres-movies"], () =>
    getMoviesInTheatres()
  );

  return (
    <>
      <h2 className="text-light py-3 h3" id="theatres-movies-title">
        <u>In theatres</u>
      </h2>
      <MoviesList movies={data} />
    </>
  );
};

export default TheatresMovies;
