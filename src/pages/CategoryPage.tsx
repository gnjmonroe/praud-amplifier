import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header, ProgressBar, Selector, SelectorGrid } from "../components";
import { options } from "../data";
import { isSelectionOption, type SelectionOptions } from "../utils";
import styles from "./CategoryPage.module.scss";

interface CategoryPageProps {
  optionIndex: number;
  prevSlug: string;
  nextSlug: string;
}
export const CategoryPage = ({
  optionIndex,
  prevSlug,
  nextSlug,
}: CategoryPageProps) => {
  const location = useLocation();
  const { from } = location.state || "";
  const [selection, setSelection] = useState<SelectionOptions | null>(null);

  /*
   * checks for pre-existing localStorage
   * then loads into selection or creates a new localStorage item
   */
  useEffect(() => {
    const priorSelection = localStorage.getItem(
      `${options[optionIndex].category}`,
    );
    if (priorSelection) {
      if (!isSelectionOption(priorSelection) && priorSelection !== "pending") {
        console.error("priorSelection: ", priorSelection);
        throw Error("Unexpected value from localStorage");
      }
      if (isSelectionOption(priorSelection)) setSelection(priorSelection);
    } else {
      localStorage.setItem(`${options[optionIndex].category}`, "");
    }
  }, [optionIndex]);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Header prevSlug={prevSlug} />
        <ProgressBar optionIndex={optionIndex} confirm={from === "confirm"} />
      </header>
      <div className={styles.content}>
        <SelectorGrid key={optionIndex}>
          {options[optionIndex].options.map((option) => (
            <Selector
              key={option}
              category={options[optionIndex].category}
              option={option}
              selection={selection}
              setSelection={setSelection}
              nextSlug={nextSlug}
              from={from}
            />
          ))}
        </SelectorGrid>
      </div>
    </div>
  );
};
