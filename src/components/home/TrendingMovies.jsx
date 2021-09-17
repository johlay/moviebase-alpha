import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTrendingMoviesByTimeWindow } from "../../services/TmdbApi";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MoviesList from "../movies/MoviesList";
import Pagination from "../partials/Pagination";

const TrendingMovies = () => {
  const [page, setPage] = useState({ page: 1 });
  const [timeWindow, setTimeWindow] = useState("day"); // show day/week.
  const { data, refetch } = useQuery(
    ["get-trending-movies-by-time-window"],
    () => getTrendingMoviesByTimeWindow(timeWindow, page.page)
  );

  useEffect(() => {
    // refetch data when user switches between day/week button by resetting page to 1 which in turn triggers refetch().
    setPage({ page: 1 });
  }, [timeWindow]);

  useEffect(() => {
    // refetch data when user changes page
    refetch();
  }, [page, refetch]);

  return (
    <>
      <div className="py-3">
        <h3 className="text-light py-3 " id="trending-movies-title">
          Trending movies
        </h3>
        <Row>
          <Col className="d-flex align-items-center" xs="auto">
            <p className="text-white fs-5 m-0 ps-2">Show by:</p>
          </Col>
          <Col>
            <ButtonGroup size="lg" role="button-group">
              <Button
                active={timeWindow === "day"}
                className="text-white"
                onClick={() => setTimeWindow("day")}
                variant="outline-dark"
              >
                Day
              </Button>
              <Button
                active={timeWindow === "week"}
                className="text-white"
                onClick={() => setTimeWindow("week")}
                variant="outline-dark"
              >
                Week
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </div>
      <MoviesList movies={data} />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={data?.total_pages}
      />
    </>
  );
};

export default TrendingMovies;
