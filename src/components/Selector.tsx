import React from 'react';
import { ReactComponent as DummySelectorIcon } from '../assets/dummy-selector-icon.svg';
import classes from '../scss/components/selector.module.scss';

export default function Selector(props: {
  option: string
}) {
  const { option } = props;

  return (
    <div className={classes.selector}>
      <DummySelectorIcon className={classes.dummySelectorIcon} />
      <p className={classes.optionLabel}>{option}</p>
    </div>
  );
}
