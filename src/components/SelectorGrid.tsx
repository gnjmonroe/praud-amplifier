import React from 'react';
import Selector from './Selector';
import classes from '../scss/components/selectorGrid.module.scss';

export default function SelectorGrid(props: {
  options: string[],
  selection: string | null,
  setSelection: any,
}) {
  const {
    options, selection, setSelection,
  } = props;

  return (
    <div className={classes.selectorGrid}>
      {options.map((option: string) => (
        <Selector
          option={option}
          selection={selection}
          setSelection={setSelection}
        />
      ))}
    </div>
  );
}
