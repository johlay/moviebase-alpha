import { Link, animateScroll } from "react-scroll";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const QuickNavigation = () => {
  return (
    <>
      <nav className="mt-5">
        <Row className="bg-dark rounded text-white py-3 d-flex align-items-center">
          <Col>
            <h2 className="h3 m-0 text-center pe-none">Go to:</h2>
          </Col>
          <Col>
            <p className="h5 m-0">
              <Link to="trending-movies-title" style={{ cursor: "pointer" }}>
                Trending
              </Link>
            </p>
          </Col>
          <Col>
            <p className="h5 m-0">
              <Link to="theatres-movies-title" style={{ cursor: "pointer" }}>
                In theatres
              </Link>
            </p>
          </Col>
          <Col>
            <p className="h5 m-0">
              <Link to="popular-movies-title" style={{ cursor: "pointer" }}>
                Popular movies
              </Link>
            </p>
          </Col>
          <Col>
            <p className="h5 m-0">
              <Link to="top-picks-movies-title" style={{ cursor: "pointer" }}>
                Top picks
              </Link>
            </p>
          </Col>
        </Row>
      </nav>
    </>
  );
};

export default QuickNavigation;
