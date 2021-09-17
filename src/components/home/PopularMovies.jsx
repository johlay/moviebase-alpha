import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPopularMovies } from "../../services/TmdbApi";
import MoviesList from "../movies/MoviesList";
import Pagination from "../partials/Pagination";

const PopularMovies = () => {
  const [page, setPage] = useState({ page: 1 });
  const { data, refetch } = useQuery(
    ["get-popular-movies"],
    () => getPopularMovies(page.page),
    { keepPreviousData: true }
  );

  useEffect(() => {
    // refetch data when page is changed
    refetch();
  }, [page]);

  return (
    <>
      <h3 className="text-light py-3" id="popular-movies-title">
        Popular movies
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

export default PopularMovies;
