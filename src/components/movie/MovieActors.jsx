import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MovieActorDetail from "./MovieActorDetail";

const MovieActors = ({ actors }) => {
  return (
    <Container className="text-white my-5">
      <h3 className="h4 ">Actors</h3>

      <Row className="my-4">
        {actors &&
          actors.map((actor) => {
            if (actor.profile_path === null) return null;

            return (
              <MovieActorDetail key={actor.id} actor={actor} id={actor.id} />
            );
          })}
      </Row>
    </Container>
  );
};

export default MovieActors;
