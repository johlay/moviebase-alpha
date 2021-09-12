import { useEffect } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMoviesByGenre } from "../services/TmdbApi";
import { useUrlSearchParams } from "use-url-search-params";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import ErrorAlert from "../components/genres/ErrorAlert";
import GenreResults from "../components/genres/GenreResults";
import Pagination from "../components/partials/Pagination";

const GenrePage = () => {
  const history = useHistory();
  const location = useLocation();
  const [page, setPage] = useUrlSearchParams({ page: 1 });

  // destructuring object inside of location state.
  const { state: { genre } = {} } = location ?? null;

  const { data, refetch } = useQuery(
    ["get-movies-by-genre", { genre }],
    () => getMoviesByGenre(genre?.id, page.page),
    { keepPreviousData: true }
  );

  useEffect(() => {
    // refetch data when page is changed.
    refetch();
  }, [page]);

  if (!location?.state?.genre) return <ErrorAlert />;

  return (
    <Container>
      <div className="my-5">
        <NavLink className="btn btn-dark" to="/genres">
          <span aria-label="an arrow left icon" className="me-1">
            <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" color="white" />
          </span>
          Go back
        </NavLink>
      </div>
      <p className="text-white h3">
        List of movies by genre: "<span>{location.state && genre?.name}</span>"
      </p>

      <hr className="bg-white" />

      <GenreResults movies={data} />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={data?.total_pages}
      />
    </Container>
  );
};

export default GenrePage;
