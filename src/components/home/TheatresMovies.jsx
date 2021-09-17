import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getMoviesInTheatres } from "../../services/TmdbApi";
import MoviesList from "../movies/MoviesList";
import Pagination from "../partials/Pagination";

const TheatresMovies = () => {
  const [page, setPage] = useState({ page: 1 });
  const { data, refetch } = useQuery(
    ["get-theatres-movies"],
    () => getMoviesInTheatres(page.page),
    { keepPreviousData: true }
  );

  useEffect(() => {
    // refetch data when page is changed
    refetch();
  }, [page]);

  return (
    <>
      <h3 className="text-light py-3" id="theatres-movies-title">
        In theatres
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

export default TheatresMovies;
