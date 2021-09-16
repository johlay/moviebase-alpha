import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { getImage } from "../../helpers";

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
        className="bg-dark rounded my-5 pt-4"
        indicators={true}
        interval={2000}
        prevIcon={leftArrowButton}
        nextIcon={rightArrowButton}
        slide={false}
      >
        {movies &&
          movies?.results?.map((movie, index) => {
            if (index < 5) {
              return (
                <Carousel.Item key={movie.id}>
                  <img
                    className="d-block w-25 mx-auto rounded"
                    src={getImage(200, movie?.poster_path)}
                    alt="First slide"
                  />

                  <div className="text-center">
                    <Link
                      className="btn btn-secondary my-3 btn-lg"
                      to={`/movies/${movie.id}`}
                    >
                      Go to movie
                    </Link>
                  </div>
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
