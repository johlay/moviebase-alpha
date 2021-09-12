import { NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";

const ActorCastDetails = ({ cast }) => {
  return (
    <Table className="text-white" bordered size="sm" variant="dark">
      <thead>
        <tr>
          <th>Release year</th>
          <th>Movie title</th>
          <th className="text-center">Learn more</th>
        </tr>
      </thead>
      <tbody>
        {cast?.map((movie) => {
          return (
            <tr key={movie.id}>
              <td>{movie.release_date}</td>
              <td>{movie.title}</td>
              <td className="text-center">
                <NavLink
                  className="btn btn-light text-dark"
                  to={`/movies/${movie.id}`}
                >
                  Go to
                </NavLink>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ActorCastDetails;
