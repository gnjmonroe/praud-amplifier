import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../scss/components/linkButton.module.scss';

export default function LinkButton(props: {
  text: string,
  target: string,
  greenLight: boolean
}) {
  const { text, target, greenLight } = props;

  return (
    (greenLight ? (
      <Link
        className={classes.greenLight}
        to={target}
      >
        {text}
      </Link>
    ) : (
      <div
        className={classes.greyedOut}
      >
        {text}
      </div>
    ))
  );
}
