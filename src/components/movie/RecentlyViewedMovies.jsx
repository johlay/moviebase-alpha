import Container from "react-bootstrap/Container";
import MoviesList from "../home/MoviesList";
import useMovies from "../../hooks/useMovies";

const RecentlyViewedMovies = () => {
  // get value from useMovies hook: "recentMovies".
  const { recentMovies } = useMovies();

  return (
    <Container className="my-5">
      <hr className="bg-white my-5" />
      <h3 className="h2 text-white my-4">Recently Viewed Movies</h3>

      <MoviesList movies={recentMovies} />
    </Container>
  );
};

export default RecentlyViewedMovies;
