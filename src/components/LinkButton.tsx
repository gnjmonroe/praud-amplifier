import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../scss/components/linkButton.module.scss';

export default function LinkButton(props: {
  text: string,
  target: string
}) {
  const { text, target } = props;
  return (
    <Link className={classes.linkButton} to={target}>{text}</Link>
  );
}
