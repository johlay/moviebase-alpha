import dayjs from "dayjs";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getImage } from "../../helpers";

const MovieDetails = ({ movie }) => {
  return (
    <>
      <div
        className="container-fluid d-flex flex-row align-items-end text-white mb-5 "
        style={{
          height: "800px",
          backgroundImage: `url(${getImage(500, movie?.backdrop_path)})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row className="my-5">
            <Col xs="auto">
              <img
                src={
                  movie &&
                  `https://image.tmdb.org/t/p/w200${movie?.poster_path}`
                }
                alt="movie poster"
              />
            </Col>

            <Col className="d-flex flex-column justify-content-center">
              <h2 className="h3">{movie?.title}</h2>
              <p className="m-0">
                Genres:{" "}
                <span label="text genres">
                  {movie?.genres.map((genre) => genre.name + ", ")}
                </span>
              </p>
              <p>
                <span
                  aria-label="icon of star with movie rating"
                  className="me-2"
                >
                  <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
                </span>
                {movie?.vote_average}
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="text-white">
        <h3 className="h4 ">Overview:</h3>
        <p className="">{movie?.overview}</p>

        <p>
          Director:{" "}
          <span aria-label="director's name">
            {
              movie?.credits?.crew.find((person) => person?.job === "Director")
                ?.name
            }
          </span>
        </p>

        <p>
          Screenplay:{" "}
          <span aria-label="movie's screenplay">
            {
              movie?.credits?.crew.find(
                (person) => person?.job === "Screenplay"
              )?.name
            }
          </span>
        </p>

        <p>
          Language:{" "}
          <span aria-label="movie's language">
            {movie?.spoken_languages[0]?.name}
          </span>
        </p>

        <p>
          Runtime: <span aria-label="movie's runtime">{movie?.runtime}min</span>
        </p>

        <p>
          Release date:{" "}
          <span aria-label="text release date">
            {" "}
            {dayjs(movie?.release_date).format("D MMM YYYY")}
          </span>
        </p>

        <hr className="bg-white my-5" />
      </Container>
    </>
  );
};

export default MovieDetails;
