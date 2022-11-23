/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../scss/components/linkButton.module.scss';

export default function LinkButton(props: {
  text: string;
  target: string;
  greenLight: boolean;
  destination?: string;
}) {
  const {
    text, target, greenLight, destination,
  } = props;

  return greenLight ? (
    <Link
      className={classes.greenLight}
      to={target}
      state={{ to: destination }}
    >
      {text}
    </Link>
  ) : (
    <div className={classes.greyedOut}>{text}</div>
  );
}

LinkButton.defaultProps = {
  destination: '',
};
