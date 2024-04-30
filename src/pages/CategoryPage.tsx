import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import CategoryPageProgressBar from "../components/CategoryPageProgressBar";
import SelectorGrid from "../components/SelectorGrid";
import classes from "../scss/pages/categoryPage.module.scss";
import { options } from "../data";
import { isSelectionOption } from "../utils";
import { SelectionOptions } from "../utils/isSelectionOption";
import Selector from "../components/Selector";

export default function CategoryPage(props: {
  optionIndex: number;
  prevSlug: string;
  nextSlug: string;
}) {
  const { optionIndex, prevSlug, nextSlug } = props;
  const location = useLocation();
  const { from } = location.state || "";

  const [selection, setSelection] = useState<SelectionOptions | null>(null);

  // checks for pre-existing localStorage
  // then loads into selection or creates a new localStorage item
  useEffect(() => {
    if (localStorage.getItem(`${options[optionIndex].category}`)) {
      const priorSelection = localStorage.getItem(
        `${options[optionIndex].category}`,
      );
      if (!isSelectionOption(priorSelection))
        throw Error("Unexpected value from localStorage");

      setSelection(priorSelection);
    } else {
      localStorage.setItem(`${options[optionIndex].category}`, "");
    }
  }, [optionIndex]);

  return (
    <div className={classes.categoryPage}>
      <header className={classes.header}>
        <Header prevSlug={prevSlug} />
        <CategoryPageProgressBar
          optionIndex={optionIndex}
          confirm={from === "confirm"}
        />
      </header>
      <div className={classes.content}>
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
