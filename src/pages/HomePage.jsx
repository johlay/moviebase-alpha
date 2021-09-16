import Container from "react-bootstrap/Container";
import PopularMovies from "../components/home/PopularMovies";
import TheatresMovies from "../components/home/TheatresMovies";
import TopPicksMovies from "../components/home/TopPicksMovies";
import TrendingMovies from "../components/home/TrendingMovies";
import QuickNavigation from "../components/home/QuickNavigation";

const HomePage = () => {
  return (
    <Container className="my-5">
      <QuickNavigation />
      <hr className="bg-white my-5" />
      <TrendingMovies />
      <hr className="bg-white my-5" />
      <TheatresMovies />
      <hr className="bg-white my-5" />
      <PopularMovies />
      <hr className="bg-white my-5" />
      <TopPicksMovies />
    </Container>
  );
};

export default HomePage;
