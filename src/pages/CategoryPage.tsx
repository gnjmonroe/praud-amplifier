import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CategoryPageProgressBar from "../components/CategoryPageProgressBar";
import Header from "../components/Header";
import Selector from "../components/Selector";
import SelectorGrid from "../components/SelectorGrid";
import { options } from "../data";
import styles from "./CategoryPage.module.scss";
import { isSelectionOption, type SelectionOptions } from "../utils";

interface CategoryPageProps {
  optionIndex: number;
  prevSlug: string;
  nextSlug: string;
}
export default function CategoryPage({
  optionIndex,
  prevSlug,
  nextSlug,
}: CategoryPageProps) {
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
      if (!isSelectionOption(priorSelection))
        throw Error("Unexpected value from localStorage");

      setSelection(priorSelection);
    } else {
      localStorage.setItem(`${options[optionIndex].category}`, "");
    }
  }, [optionIndex]);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Header prevSlug={prevSlug} />
        <CategoryPageProgressBar
          optionIndex={optionIndex}
          confirm={from === "confirm"}
        />
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
}
