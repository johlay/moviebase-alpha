import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <div className="navbar-brand">
          <h1 className="h2 pe-none">Moviebase Alpha</h1>
        </div>

        <Nav className="me-auto">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>

          <NavLink className="nav-link" to="/genres">
            Genres
          </NavLink>

          <NavLink className="nav-link" to="/search">
            Search
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
