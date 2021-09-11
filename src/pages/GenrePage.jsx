import { useHistory, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import ErrorAlert from "../components/genres/ErrorAlert";

const GenrePage = () => {
  const history = useHistory();
  const location = useLocation();

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
        List of movies by genre: "
        <span>{location.state && location?.state?.genre?.name}</span>"
      </p>

      <hr className="bg-white" />
    </Container>
  );
};

export default GenrePage;
