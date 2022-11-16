import React from 'react';
import classes from '../scss/components/selectorGrid.module.scss';
import Selector from './Selector';

export default function SelectorGrid(props: {
  options: string[]
}) {
  const { options } = props;

  return (
    <div className={classes.selectorGrid}>
      {options.map((option: string) => (
        <Selector option={option} />
      ))}
    </div>
  );
}
