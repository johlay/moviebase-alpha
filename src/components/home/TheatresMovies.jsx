import { useQuery } from "react-query";
import { getMoviesInTheatres } from "../../services/TmdbApi";
import MoviesList from "./MoviesList";

const TheatresMovies = () => {
  const { data } = useQuery(["get-theatres-movies"], () =>
    getMoviesInTheatres()
  );

  return (
    <>
      <h3 className="text-light py-3" id="theatres-movies-title">
        In theatres
      </h3>
      <MoviesList movies={data} />
    </>
  );
};

export default TheatresMovies;
