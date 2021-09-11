import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMoviesByGenre } from "../services/TmdbApi";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import ErrorAlert from "../components/genres/ErrorAlert";
import GenreResults from "../components/genres/GenreResults";

const GenrePage = () => {
  const history = useHistory();
  const location = useLocation();

  // destructuring object inside of location state.
  const { state: { genre } = {} } = location ?? null;

  const { data } = useQuery(["get-movies-by-genre", { genre }], () =>
    getMoviesByGenre(genre?.id)
  );

  if (!location?.state?.genre) return <ErrorAlert />;

  return (
    <Container>
      <div className="my-5">
        <Button variant="dark" onClick={() => history.push("/genres")}>
          <span aria-label="an arrow left icon" className="me-1">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" color="white" />
          </span>
          Go back
        </Button>
      </div>
      <p className="text-white h3">
        List of movies by genre: "<span>{location.state && genre?.name}</span>"
      </p>

      <hr className="bg-white" />

      <GenreResults movies={data} />
    </Container>
  );
};

export default GenrePage;
