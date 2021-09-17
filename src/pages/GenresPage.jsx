import GenresList from "../components/genres/GenresList";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { getAllGenres } from "../services/TmdbApi";

const GenresPage = () => {
  const { data } = useQuery(["get-all-genres"], () => getAllGenres());

  return (
    <Container className="my-3">
      <h2 className="text-center text-light py-3">
        Genres
      </h2>
      <GenresList genres={data} />
    </Container>
  );
};

export default GenresPage;
