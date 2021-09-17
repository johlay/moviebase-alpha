import styles from "../../css/Buttons.module.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const BackTopButton = () => {
  const handleButtonClick = () => {
    window.scroll(0, 0);
  };

  return (
    <Button
      className={`${styles.back_top}`}
      onClick={handleButtonClick}
      variant="dark"
    >
      <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
    </Button>
  );
};

export default BackTopButton;
