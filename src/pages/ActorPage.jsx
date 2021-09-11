import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorInformation } from "../services/TmdbApi";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const ActorPage = () => {
  const { actorId } = useParams();
  const history = useHistory();

  const { data } = useQuery(["get-movie-actor-details"], () =>
    getActorInformation(actorId)
  );

  console.log(data);

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
    </Container>
  );
};

export default ActorPage;
