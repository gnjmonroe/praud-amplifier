import { Link } from "react-router-dom";
import { options } from "../data";
import styles from "../scss/components/categoryPageProgressBar.module.scss";
import { isSelectionOption } from "../utils";

interface CategoryPageProgressBarProps {
  optionIndex: number;
  confirm: boolean;
}
export default function CategoryPageProgressBar({
  optionIndex: dataIndex,
  confirm,
}: CategoryPageProgressBarProps) {
  function handleClassName(currentCategory: string) {
    if (currentCategory === options[dataIndex].category) return styles.active;
    const currentCategoryQuery = localStorage.getItem(`${currentCategory}`);

    if (currentCategoryQuery === "pending") return styles.incomplete;
    if (!isSelectionOption(currentCategoryQuery)) return "";
    if (!currentCategoryQuery) return styles.unvisited;
    return styles.complete;
  }

  function handleClick() {
    if (!localStorage.getItem(`${options[dataIndex].category}`)) {
      localStorage.setItem(`${options[dataIndex].category}`, "pending");
    }
  }

  return (
    <div className={styles.categoryPageProgressBar}>
      <div className={styles.labels}>
        {options.map((section) => (
          <p key={section.category} className={styles.label}>
            {section.category}
          </p>
        ))}
      </div>
      <div className={styles.nodes}>
        {options.map((section) => (
          <div key={section.category} className={styles.nodeContainer}>
            <div
              className={`${styles.node} ${handleClassName(section.category)}`}
            />
          </div>
        ))}
      </div>
      <div className={styles.connectingLines}>
        {/* number of connectingLine divs = number of nodes - 1 */}
        <div className={styles.connectingLine} />
        <div className={styles.connectingLine} />
        <div className={styles.connectingLine} />
        <div className={styles.connectingLine} />
      </div>
      <div className={styles.links}>
        {options.map((section) => (
          <Link
            key={section.category}
            to={
              localStorage.getItem(`${section.category}`)
                ? `/${section.category.toLowerCase()}`
                : ""
            }
            className={styles.link}
            state={{ from: confirm ? "confirm" : "" }}
            onClick={() => {
              handleClick();
            }}
          />
        ))}
      </div>
    </div>
  );
}
