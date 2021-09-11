import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const ErrorAlert = () => {
  const history = useHistory();

  return (
    <div className="alert alert-danger w-50 mx-auto my-5" role="alert">
      <p className="fs-2 text-dark text-center">
        You need to go back and select a genre!
      </p>
      <div className="d-flex justify-content-center">
        <Button onClick={() => history.push("/genres")} variant="dark">
          <span aria-label="an arrow left icon" className="me-1">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" color="white" />
          </span>
          Go back
        </Button>
      </div>
    </div>
  );
};

export default ErrorAlert;
