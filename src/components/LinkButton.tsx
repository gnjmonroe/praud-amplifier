import React from "react";
import { Link } from "react-router-dom";
import styles from "./LinkButton.module.scss";

interface LinkButtonProps {
  text: string;
  target: string;
  destination?: string;
}
export default function LinkButton({
  text,
  target,
  destination,
}: LinkButtonProps) {
  return (
    <Link className={styles.root} to={target} state={{ to: destination ?? "" }}>
      {text}
    </Link>
  );
}
