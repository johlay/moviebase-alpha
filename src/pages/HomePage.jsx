import Container from "react-bootstrap/Container";
import PopularMovies from "../components/home/PopularMovies";
import TheatresMovies from "../components/home/TheatresMovies";
import TopPicksMovies from "../components/home/TopPicksMovies";

const HomePage = () => {
  return (
    <Container className="my-3">
      <TheatresMovies />
      <hr className="bg-white my-5" />
      <PopularMovies />
      <hr className="bg-white my-5" />
      <TopPicksMovies />
    </Container>
  );
};

export default HomePage;
