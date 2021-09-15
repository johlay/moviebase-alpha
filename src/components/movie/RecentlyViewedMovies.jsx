import Container from "react-bootstrap/Container";
import MoviesList from "../home/MoviesList";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from "react";

const RecentlyViewedMovies = () => {
  // get value from local storage key: "recently-viewed".
  const [value] = useLocalStorage("recently-viewed");

  useEffect(() => {}, [value]);

  return (
    <Container className="my-5">
      <hr className="bg-white my-5" />
      <h3 className="text-white my-3">Recently Viewed Movies</h3>

      {value && <MoviesList movies={value} />}
    </Container>
  );
};

export default RecentlyViewedMovies;
