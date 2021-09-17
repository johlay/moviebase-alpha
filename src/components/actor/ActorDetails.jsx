import { intrepretActorGender } from "../../helpers/index";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { checkInformation, getImage } from "../../helpers/index";

const ActorDetails = ({ actor }) => {
  return (
    <>
      <Row className="my-5">
        <Col xs="auto">
          <img
            className="rounded"
            src={actor && getImage(300, actor?.profile_path)}
            alt="actor profile"
          />
        </Col>

        <Col className="d-flex flex-column justify-content-center text-white">
          <h2 className="h3">{actor?.name}</h2>
          <p className="m-1">
            Occupation:{" "}
            <span label="text occupation">{actor?.known_for_department}</span>
          </p>
          <p className="m-1">
            Gender:{" "}
            <span aria-label="text gender" className="me-2">
              {intrepretActorGender(actor?.gender)}
            </span>
          </p>
          <p className="m-1">
            Birthday:{" "}
            <span aria-label="text birthday" className="me-2">
              {checkInformation(actor?.birthday)}
              {/* (current years old) */}
            </span>
          </p>
          <p className="m-1">
            Place of birth:{" "}
            <span aria-label="text place of birth" className="me-2">
              {checkInformation(actor?.place_of_birth)}
            </span>
          </p>
        </Col>
      </Row>
      <div className="text-white">
        <h3 className="h4">
          <u>Biography:</u>
        </h3>
        <p className="">{checkInformation(actor?.biography)}</p>
      </div>
    </>
  );
};

export default ActorDetails;
