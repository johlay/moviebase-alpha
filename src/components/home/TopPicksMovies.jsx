import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTopPicksMovies } from "../../services/TmdbApi";
import MoviesList from "../movies/MoviesList";
import Pagination from "../partials/Pagination";

const TopPicksMovies = () => {
  const [page, setPage] = useState({ page: 1 });
  const { data, refetch } = useQuery(
    ["get-top-rated-movies"],
    () => getTopPicksMovies(page.page),
    { keepPreviousData: true }
  );

  useEffect(() => {
    // refetch data when page is changed
    refetch();
  }, [page, refetch]);

  return (
    <>
      <h3 className="text-light py-3" id="top-picks-movies-title">
        Top picks
      </h3>
      <MoviesList movies={data} />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={data?.total_pages}
      />
    </>
  );
};

export default TopPicksMovies;
