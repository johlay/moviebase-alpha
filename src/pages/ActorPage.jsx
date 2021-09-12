import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorInformation } from "../services/TmdbApi";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import ActorDetails from "../components/actor/ActorDetails";

const ActorPage = () => {
  const { actorId } = useParams();
  const history = useHistory();

  const { data } = useQuery(["get-movie-actor-details"], () =>
    getActorInformation(actorId)
  );

  return (
    <Container className="my-5">
      <div className="my-5">
        <Button variant="dark" onClick={() => history.goBack()}>
          <span aria-label="an arrow left icon" className="me-1">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" color="white" />
          </span>
          Go back
        </Button>
      </div>

      <ActorDetails actor={data} />
    </Container>
  );
};

export default ActorPage;
