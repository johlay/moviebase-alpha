import Container from "react-bootstrap/Container";
import MoviesList from "../movies/MoviesList";
import useMovies from "../../hooks/useMovies";

const RecentlyViewedMovies = () => {
  // get value from useMovies hook: "recentMovies".
  const { recentMovies } = useMovies();

  return (
    <Container className="my-5">
      <hr className="bg-white my-5" />
      <h3 className="h2 text-white my-4">Recently Viewed Movies</h3>

      {recentMovies.results.length > 0 ? (
        <MoviesList movies={recentMovies} />
      ) : (
        <p className="text-white ps-2">You have not viewed any movies yet.</p>
      )}
    </Container>
  );
};

export default RecentlyViewedMovies;
