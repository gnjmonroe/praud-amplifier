import { Link } from "react-router-dom";
import { options } from "../data";
import styles from "./CategoryPageProgressBar.module.scss";
import { isSelectionOption } from "../utils";

interface CategoryPageProgressBarProps {
  optionIndex: number;
  confirm: boolean;
}
export default function CategoryPageProgressBar({
  optionIndex,
  confirm,
}: CategoryPageProgressBarProps) {
  function getClassName(category: (typeof options)[number]["category"]) {
    if (category === options[optionIndex].category) return styles.active;
    const categoryQuery = localStorage.getItem(`${category}`);
    if (categoryQuery === "pending") return styles.incomplete;
    if (!isSelectionOption(categoryQuery)) return "";
    if (!categoryQuery) return styles.unvisited;
    return styles.complete;
  }

  function handleClick() {
    if (!localStorage.getItem(`${options[optionIndex].category}`)) {
      localStorage.setItem(`${options[optionIndex].category}`, "pending");
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.connectingLines}>
        {Array.from({ length: options.length - 1 }).map((_, i) => (
          <div className={styles.connectingLine} key={i} />
        ))}
      </div>
      <div className={styles.links}>
        {options.map((section) =>
          localStorage.getItem(section.category) ? (
            <Link
              key={section.category}
              to={`/${section.category.toLowerCase()}`}
              className={styles.link}
              state={{ from: confirm ? "confirm" : "" }}
              onClick={() => handleClick()}
            >
              <p key={section.category} className={styles.label}>
                {section.category}
              </p>
              <div
                className={`${styles.node} ${getClassName(section.category)}`}
              />
            </Link>
          ) : (
            <div className={styles.link} key={section.category}>
              <p key={section.category} className={styles.label}>
                {section.category}
              </p>
              <div
                className={`${styles.node} ${getClassName(section.category)}`}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
