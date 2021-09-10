import styles from "../../css/GenreBox.module.css";
import { useHistory } from "react-router-dom";

const GenreBox = ({ genre, id }) => {
  const history = useHistory();

  return (
    <>
      <div
        onClick={() =>
          history.push({ pathname: `/genres/${id}`, state: { genre } })
        }
        className={`bg-secondary rounded ${styles.genre_box}`}
      >
        <p className="text-white m-0">{genre.name}</p>
      </div>
    </>
  );
};

export default GenreBox;
