import { useEffect } from "react";
import { useQuery } from "react-query";
import { search } from "../services/TmdbApi";
import { useUrlSearchParams } from "use-url-search-params";
import { Container } from "react-bootstrap";
import MoviesResults from "../components/MoviesResults";
import SearchField from "../components/search/SearchField";
import Pagination from "../components/partials/Pagination";

const SearchPage = () => {
  const [page, setPage] = useUrlSearchParams({ query: "", page: "" });

  const { data, isSuccess, refetch } = useQuery(
    ["get-movies-by-search"],
    () => search(page?.query, page?.page),
    { keepPreviousData: true }
  );

  const handleSubmit = (e, text) => {
    e.preventDefault();

    // replace searchParams with new values.
    setPage({ page: 1, query: text });
  };

  useEffect(() => {
    // refetch data when page is changed
    refetch();
  }, [page]);

  return (
    <Container>
      <SearchField handleSubmit={handleSubmit} />
      {isSuccess && <MoviesResults movies={data} />}
      {data && (
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={data?.total_pages}
        />
      )}
    </Container>
  );
};

export default SearchPage;
