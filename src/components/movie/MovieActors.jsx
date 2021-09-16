import styles from "../../css/MovieActors.module.css";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { getImage } from "../../helpers";
// import MovieActorDetail from "./MovieActorDetail";

const MovieActors = ({ actors }) => {
  const history = useHistory();

  return (
    <Container className="text-white my-5">
      <h3 className="h4 ">Actors</h3>

      <Row className="my-4">
        {actors &&
          actors.map((actor) => {
            if (actor.profile_path === null) return null;

            {
              /* <><MovieActorDetail actor={actor} id={actor.id}/></> */
            }
            return (
              <Col xs="auto" key={actor?.id}>
                <Card
                  onClick={() => history.push(`/actors/${actor?.id}`)}
                  className={`${styles.actor_card} text-dark text-center mx-3 mb-3`}
                >
                  <Card.Img
                    variant="top"
                    src={getImage(200, actor?.profile_path)}
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
    </Container>
  );
};

export default MovieActors;
