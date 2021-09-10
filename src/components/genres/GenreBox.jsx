import styles from "../../css/GenreBox.module.css";
import { useHistory } from "react-router-dom";

const GenreBox = ({ genre, id }) => {
  console.log("genre", genre);
  console.log("id", id);

  const history = useHistory();
  return (
    <>
      <div
        onClick={() => history.push(`/genres/${id}`)}
        className={`bg-secondary rounded ${styles.genre_box}`}
        style={{ height: "80px", width: "100%" }}
      >
        {genre.name}
      </div>
    </>
  );
};

export default GenreBox;
