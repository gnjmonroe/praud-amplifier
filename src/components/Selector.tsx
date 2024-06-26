import React from "react";
import { Link } from "react-router-dom";
import { type SelectionOptions } from "../utils/isSelectionOption";
import { Icon } from "./Icon";
import styles from "./Selector.module.scss";

const colorsMap: Record<SelectionOptions, string> = {
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

interface SelectorProps {
  category: string;
  option: SelectionOptions;
  selection: SelectionOptions | null;
  setSelection: React.Dispatch<React.SetStateAction<SelectionOptions | null>>;
  nextSlug: string;
  from: string;
}
export const Selector = ({
  category,
  option,
  selection,
  setSelection,
  nextSlug,
  from,
}: SelectorProps) => {
  function getColorStyle() {
    return colorsMap[option];
    throw new Error(`Unexpected value of option`);
  }

  function handleClassName() {
    if (selection !== option) return getColorStyle();
    return `${styles.activeSelection} ${getColorStyle()}`;
  }

  return (
    <Link
      to={from === "confirm" ? "/confirm" : `/${nextSlug}`}
      className={styles.root}
      role="button"
      tabIndex={0}
      onClick={() => {
        setSelection(option);
        localStorage.setItem(`${category}`, option);
      }}
    >
      <div className={`${styles.iconFrame} ${handleClassName()}`}>
        <Icon option={option} />
      </div>
      {option}
    </Link>
  );
};
