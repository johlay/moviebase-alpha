import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { search } from "../services/TmdbApi";
import { useUrlSearchParams } from "use-url-search-params";
import { Container } from "react-bootstrap";
import MoviesResults from "../components/movies/MoviesResults";
import SearchField from "../components/search/SearchField";
import Pagination from "../components/partials/Pagination";

const SearchPage = () => {
  const [page, setPage] = useUrlSearchParams(
    { query: "", page: "" },
    { query: String, page: Number }
  );
  const [resultText, setResultText] = useState("");

  const { data, isLoading, isSuccess, refetch } = useQuery(
    ["get-movies-by-search", page],
    () => search(page?.query, page?.page),
    { keepPreviousData: true }
  );

  const handleSubmit = (e, text) => {
    e.preventDefault();

    // show user what they searched for
    setResultText(text);

    // replace searchParams with new values.
    setPage({ page: 1, query: text });
  };

  useEffect(() => {
    // refetch data when page is changed
    refetch();
  }, [page, refetch]);

  return (
    <Container>
      <SearchField handleSubmit={handleSubmit} isLoading={isLoading} />

      {data ? (
        <>
          <p className="text-white h3">Results for: "{resultText}"</p>
          <hr className="bg-white" />
        </>
      ) : (
        <p className="text-white h3">
          Enter at least one character to be able to search.
        </p>
      )}

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
