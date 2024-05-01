import React from "react";
import styles from "./SelectorGrid.module.scss";

interface SelectorGridProps {
  children: React.ReactNode | React.ReactNode[];
}
export default function SelectorGrid({ children }: SelectorGridProps) {
  return <div className={styles.selectorGrid}>{children}</div>;
}
