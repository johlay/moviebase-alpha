import { NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";

const ActorCrewDetails = ({ crew }) => {
  // If there are no information in the array then return a message.
  if (crew?.length === 0)
    return <p className="text-white fs-4">No results...</p>;
  return (
    <>
      <Table className="text-white" bordered size="sm" variant="dark">
        <thead>
          <tr>
            <th>Release year</th>
            <th>Movie title</th>
            <th>Role</th>
            <th className="text-center">Learn more</th>
          </tr>
        </thead>
        <tbody>
          {crew?.map((movie) => {
            return (
              <tr key={movie?.id}>
                <td>{movie?.release_date}</td>
                <td>{movie?.title}</td>
                <td>{movie?.job}</td>
                <td className="text-center">
                  <NavLink
                    className="btn btn-light text-dark"
                    to={`/movies/${movie?.id}`}
                  >
                    Go to
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ActorCrewDetails;
