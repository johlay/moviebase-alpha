import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const SimiliarMovie = ({ movies }) => {
  const leftArrowButton = (
    <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" color="white" />
  );

  const rightArrowButton = (
    <FontAwesomeIcon icon={faArrowCircleRight} size="2x" color="white" />
  );

  return (
    <>
      <Carousel
        className="bg-dark rounded my-5"
        indicators={true}
        prevIcon={leftArrowButton}
        nextIcon={rightArrowButton}
      >
        {movies &&
          movies?.results?.map((movie, index) => {
            if (index < 5) {
              return (
                <Carousel.Item key={movie.id}>
                  <img
                    className="d-block w-25 mx-auto"
                    src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <Link
                      className="btn btn-dark btn-lg"
                      to={`/movies/${movie.id}`}
                    >
                      Go to movie
                    </Link>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            } else {
              return null;
            }
          })}
      </Carousel>
    </>
  );
};

export default SimiliarMovie;
