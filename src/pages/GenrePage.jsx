import { useHistory, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const GenrePage = () => {
  const history = useHistory();
  const location = useLocation();

  if (!location?.state?.genre) {
    return (
      <div className="alert alert-danger w-50 mx-auto my-5" role="alert">
        <p className="fs-2 text-dark text-center">
          You need to go back and select a genre!
        </p>
        <div className="d-flex justify-content-center">
          <Button onClick={() => history.push("/genres")} variant="dark">
            Go back
          </Button>
        </div>
      </div>
    );
  }

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
        List of movies by genre: "
        <span>{location.state && location?.state?.genre?.name}</span>"
      </p>

      <hr className="bg-white" />
    </Container>
  );
};

export default GenrePage;
