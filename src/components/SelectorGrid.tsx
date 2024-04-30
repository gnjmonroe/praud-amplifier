import React from "react";
import classes from "../scss/components/selectorGrid.module.scss";

interface SelectorGridProps {
  children: React.ReactNode | React.ReactNode[];
}
export default function SelectorGrid({ children }: SelectorGridProps) {
  return <div className={classes.selectorGrid}>{children}</div>;
}
