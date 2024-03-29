import styles from "../../css/MovieActors.module.css";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { getImage } from "../../helpers";

const MovieActorDetail = ({ actor, id }) => {
  const history = useHistory();

  return (
    <Col xs="auto" key={id}>
      <Card
        onClick={() => history.push(`/actors/${id}`)}
        className={`${styles.actor_card} text-dark text-center mx-3 mb-3`}
      >
        <Card.Img variant="top" src={getImage(200, actor?.profile_path)} />
        <Card.Body>
          <Card.Title>{actor?.name}</Card.Title>
          <Card.Text className="fst-italic text-center">
            {actor?.character}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieActorDetail;
