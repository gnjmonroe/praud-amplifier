import { Link } from "react-router-dom";
import { options } from "../data";
import styles from "./ConfirmationModule.module.scss";
import { Icon } from "./Icon";

const colorsMap: Record<string, string> = {
  Pool: styles.color0,
  Cinema: styles.color1,
  Kitchen: styles.color2,
  Library: styles.color3,
  Garden: styles.color4,
  Mountain: styles.color5,
  River: styles.color6,
  Sea: styles.color7,
  Rural: styles.color8,
  Valley: styles.color9,
  Single: styles.color10,
  Couple: styles.color11,
  Family: styles.color12,
  Pet: styles.color13,
  Active: styles.color14,
  Silent: styles.color15,
  Windowless: styles.color16,
  Scenic: styles.color17,
  Skylight: styles.color18,
  Folding: styles.color19,
};

interface ConfirmationModuleProps {
  option: (typeof options)[number];
  selectedOption: string;
}
export const ConfirmationModule = ({
  option,
  selectedOption,
}: ConfirmationModuleProps) => {
  return (
    <div className={styles.root}>
      <div className={`${styles.iconContainer} ${colorsMap[selectedOption]}`}>
        <Icon option={selectedOption} />
      </div>
      <div className={styles.labelBlock}>
        <p className={styles.category}>{option.category}</p>
        <p className={styles.selectedOption}>{selectedOption}</p>
      </div>
      <Link
        className={styles.editButton}
        to={`/${option.category.toLowerCase()}`}
        state={{ from: "confirm" }}
      >
        Edit
      </Link>
    </div>
  );
};
