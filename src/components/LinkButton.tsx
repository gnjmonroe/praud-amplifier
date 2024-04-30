import React from "react";
import { Link } from "react-router-dom";
import classes from "../scss/components/linkButton.module.scss";

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
    <Link
      className={classes.greenLight}
      to={target}
      state={{ to: destination ?? "" }}
    >
      {text}
    </Link>
  );
}
