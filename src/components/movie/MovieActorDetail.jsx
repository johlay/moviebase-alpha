import styles from "../../css/MovieActors.module.css";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MovieActorDetail = () => {
  const history = useHistory();

  return (
    <>
      <Row className="d-flex justify-content-around my-4">
        {actors &&
          actors.map((actor) => {
            console.log("actor", actor);

            if (actor.profile_path === null) return null;

            return (
              <Col xs="auto" key={actor?.id}>
                <Card
                  onClick={() => history.push(`/actors/${actor?.id}`)}
                  className={`${styles.actor_card} text-dark text-center mx-3 mb-3`}
                >
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w200${actor?.profile_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{actor?.name}</Card.Title>
                    <Card.Text className="fst-italic text-center">
                      {actor?.character}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default MovieActorDetail;
