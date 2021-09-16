import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTrendingMoviesByTimeWindow } from "../../services/TmdbApi";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MoviesList from "./MoviesList";

const TrendingMovies = () => {
  // show day/week.
  const [timeWindow, setTimeWindow] = useState("day");
  const { data, refetch } = useQuery(
    ["get-trending-movies-by-time-window"],
    () => getTrendingMoviesByTimeWindow(timeWindow)
  );

  useEffect(() => {
    // refetch data when user switches between day/week button.
    refetch();
  }, [timeWindow]);

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
    </>
  );
};

export default TrendingMovies;
