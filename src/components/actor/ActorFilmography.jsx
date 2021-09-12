import { useQuery } from "react-query";
import { getActorFilmography } from "../../services/TmdbApi";

const ActorFilmography = ({ actorId }) => {
  const { data } = useQuery(["get-actor-filmography", actorId], () =>
    getActorFilmography(actorId)
  );

  console.log("data", data);

  return (
    <>
      <div className="text-white pt-5">
        <h3 className="h4">
          <u>Filmography:</u>
        </h3>
        <hr />
        <h4 className="h5 ps-3 mb-4">Cast:</h4>
        <h4 className="h5 ps-3 mb-4">Crew:</h4>
      </div>
    </>
  );
};

export default ActorFilmography;
