import { useQuery } from "react-query";
import { getSimiliarMovies } from "../../services/TmdbApi";
import Container from "react-bootstrap/Container";
import SimiliarMovie from "./SimiliarMovie";

const RelatedMovies = ({ movieId, movieTitle }) => {
  const { data } = useQuery(["get-similiar-movies-by-id", movieId], () =>
    getSimiliarMovies(movieId)
  );

  return (
    <Container className="my-5">
      <hr className="bg-white my-5" />
      <div className="mb-3">
        <h3 className="h4 text-white">
          Similiar movies to: "{movieTitle && movieTitle}"
        </h3>
      </div>

      <SimiliarMovie movies={data} />
    </Container>
  );
};

export default RelatedMovies;
