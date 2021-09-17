import styles from "../../css/GenresList.module.css";
import Genrebox from "./GenreBox";

const GenresList = ({ genres }) => {
  return (
    <div className={`${styles.genres_container} bg-dark mx-auto py-5`}>
      {genres &&
        genres.map((genre) => {
          return <Genrebox genre={genre} id={genre?.id} key={genre?.id} />;
        })}
    </div>
  );
};

export default GenresList;
