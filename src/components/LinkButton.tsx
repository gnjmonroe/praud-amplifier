import { Link } from "react-router-dom";
import styles from "./LinkButton.module.scss";

interface LinkButtonProps {
  text: string;
  target: string;
  destination?: string;
}
export const LinkButton = ({ text, target, destination }: LinkButtonProps) => {
  return (
    <Link
      className={styles.root}
      to={target}
      state={{ to: destination ?? "" }}
      role="button"
    >
      {text}
    </Link>
  );
};
