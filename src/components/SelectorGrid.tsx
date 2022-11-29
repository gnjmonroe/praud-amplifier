import React from 'react';
import Selector from './Selector';
import classes from '../scss/components/selectorGrid.module.scss';

export default function SelectorGrid(props: {
  category: string,
  options: string[],
  selection: string | null,
  setSelection: any,
}) {
  const {
    category, options, selection, setSelection,
  } = props;

  return (
    <div className={classes.selectorGrid}>
      {options.map((option: string, optionIndex: number) => (
        <Selector
          category={category}
          optionIndex={optionIndex}
          option={option}
          selection={selection}
          setSelection={setSelection}
        />
      ))}
    </div>
  );
}
