import { useQuery } from "react-query";
import { getActorFilmography } from "../../services/TmdbApi";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ActorCastDetails from "./ActorCastDetails";
import ActorCrewDetails from "./ActorCrewDetails";

const ActorFilmography = ({ actorId }) => {
  const { data } = useQuery(["get-actor-filmography", actorId], () =>
    getActorFilmography(actorId)
  );

  console.log("actor filmography", data);

  return (
    <>
      <div className="text-white pt-5">
        <h3 className="h4">
          <u>Filmography:</u>
        </h3>
        <hr />

        <Tabs id="tab_actor" defaultActiveKey="acting" className="my-5">
          <Tab
            eventKey="acting"
            title="Acting"
            tabClassName="text-white fw-bold bg-dark me-1"
          >
            <ActorCastDetails cast={data?.cast} />
          </Tab>
          <Tab
            eventKey="production"
            title="Production"
            tabClassName="text-white fw-bold bg-dark"
          >
            <ActorCrewDetails crew={data?.crew} />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default ActorFilmography;
