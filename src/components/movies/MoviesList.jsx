import styles from "../../css/MoviesList.module.css";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getImage } from "../../helpers";

const MoviesList = ({ movies }) => {
  const history = useHistory();

  return (
    <div className={`${styles.movies_container}`}>
      {movies &&
        movies.results.map((movie, index) => {
          if (index < 10) {
            return (
              <Card
                className={`${styles.movie_card}`}
                key={movie?.id}
                onClick={() => history.push(`/movies/${movie.id}`)}
              >
                <Card.Img
                  className={`${styles.movie_poster}`}
                  variant="top"
                  src={getImage(200, movie?.poster_path)}
                  alt="movie poster"
                />
                <Card.Body>
                  <Card.Title>{movie?.title}</Card.Title>
                  <Card.Text>
                    <span
                      aria-label="icon of star with movie rating"
                      className="me-2"
                    >
                      <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
                    </span>
                    {movie?.vote_average}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          } else {
            return null;
          }
        })}
    </div>
  );
};

export default MoviesList;
