import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getSpecificMovie } from "../services/TmdbApi";
import dayjs from "dayjs";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MoviePage = () => {
  const { movieId } = useParams();
  const { data } = useQuery(["get-specific-movie", movieId], () =>
    getSpecificMovie(movieId)
  );

  console.log(data);

  if (data) {
    const director = data.credits.crew.find(
      (person) => person.job === "Director"
    );

    console.log("director", director);
  }

  return (
    <Container className="text-white">
      <h3 className="h4 ">Overview:</h3>
      <p className="">{data?.overview}</p>

      <p>
        Director:{" "}
        <span aria-label="director's name">
          {
            data?.credits?.crew.find((person) => person?.job === "Director")
              ?.name
          }
        </span>
      </p>

      <p>
        Screenplay:{" "}
        <span aria-label="movie's screenplay">
          {
            data?.credits?.crew.find((person) => person?.job === "Screenplay")
              ?.name
          }
        </span>
      </p>

      <p>
        Language:{" "}
        <span aria-label="movie's language">
          {data?.spoken_languages[0]?.name}
        </span>
      </p>

      <p>
        Runtime: <span aria-label="movie's runtime">{data?.runtime}min</span>
      </p>

      <p>
        Release date:{" "}
        <span aria-label="text release date">
          {" "}
          {dayjs(data?.release_date).format("D MMM YYYY")}
        </span>
      </p>

      <hr className="bg-white my-5" />

      {/* <div
        class="jumbotron text-white jumbotron-image shadow"
        style={{backgroundImage: "url(https://images.unsplash.com/photo-1552152974-19b9caf99137?fit=crop&w=1350&q=80)"}}
      >
        Hello
      </div> */}
    </Container>
  );
};

export default MoviePage;
