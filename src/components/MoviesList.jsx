import styles from "../css/MoviesList.module.css";
import dayjs from "dayjs";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MoviesList = ({ movies }) => {
  return (
    <>
      {movies &&
        movies.results.map((movie) => {
          return (
            <Row className="rounded bg-white g-0 my-4" key={movie.id}>
              <Col xs="auto">
                <img
                  className={`${styles.movie_poster}`}
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt="movie poster"
                />
              </Col>
              <Col className="d-flex flex-column justify-content-center ms-2">
                <h3 className="h5 m-0">{movie.title}</h3>
                <p>
                  {movie.overview.split(" ", 7).map((word) => word + " ")}...
                </p>
                <p className="m-0">
                  <span className="fw-bold" aria-label="text">
                    Original language:{" "}
                  </span>
                  <span aria-label="the movie's language">
                    {movie.original_language.toUpperCase()}
                  </span>
                </p>
                <p>
                  <span className="fw-bold" aria-label="text">
                    Release date:{" "}
                  </span>
                  <span aria-label="date for release date">
                    {dayjs(movie.release_date).format("D MMM YYYY")}
                  </span>
                </p>
              </Col>
              <Col
                className="d-flex align-items-end justify-content-end"
                xs={3}
                s={2}
              >
                <Button variant="dark" className=" mb-2 me-3">
                  Learn more
                </Button>
              </Col>
            </Row>
          );
        })}
    </>
  );
};

export default MoviesList;
