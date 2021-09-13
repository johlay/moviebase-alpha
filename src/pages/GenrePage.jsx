import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMoviesByGenre } from "../services/TmdbApi";
import { useUrlSearchParams } from "use-url-search-params";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import ErrorAlert from "../components/genres/ErrorAlert";
import GenreResults from "../components/genres/GenreResults";
import Pagination from "../components/partials/Pagination";
import useLocalStorage from "../hooks/useLocalStorage";

const GenrePage = () => {
  const history = useHistory();
  const location = useLocation();
  const [page, setPage] = useUrlSearchParams({ page: 1 });
  const [value, setValue] = useLocalStorage("genre");

  // destructuring object inside of location state.
  const { state: { genre } = {} } = location ?? null;

  const { data, isSuccess, refetch } = useQuery(
    ["get-movies-by-genre", { genre }, page],
    () => getMoviesByGenre(value?.id, page.page),
    { keepPreviousData: true }
  );

  useEffect(() => {
    // if "genre" can be found in location's state then save it to local storage.
    if (genre) setValue(genre);

    // refetch data when page is changed.
    refetch();
  }, [page]);

  if (!location?.state?.genre && !value)
    return (
      <ErrorAlert
        text="You need to go back and select a genre!"
        url="/genres"
      />
    );

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
        List of movies by genre: "<span>{value?.name}</span>"
      </p>

      <hr className="bg-white" />

      {isSuccess && <GenreResults movies={data} />}
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={data?.total_pages}
      />
    </Container>
  );
};

export default GenrePage;
