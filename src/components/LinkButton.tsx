import React from "react";
import { Link } from "react-router-dom";
import classes from "../scss/components/linkButton.module.scss";

export default function LinkButton(props: {
  text: string;
  target: string;
  destination?: string;
}) {
  const { text, target, destination } = props;

  return (
    <Link
      className={classes.greenLight}
      to={target}
      state={{ to: destination }}
    >
      {text}
    </Link>
  );
}

LinkButton.defaultProps = {
  destination: "",
};
