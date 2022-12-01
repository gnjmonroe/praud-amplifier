import React from 'react';
import Selector from './Selector';
import classes from '../scss/components/selectorGrid.module.scss';

export default function SelectorGrid(props: {
  category: string,
  options: string[],
  selection: string | null,
  setSelection: any,
  nextSlug: string,
}) {
  const {
    category, options, selection, setSelection, nextSlug,
  } = props;

  return (
    <div className={classes.selectorGrid}>
      {options.map((option: string, optionIndex: number) => (
        <Selector
          key={option}
          category={category}
          optionIndex={optionIndex}
          option={option}
          selection={selection}
          setSelection={setSelection}
          nextSlug={nextSlug}
        />
      ))}
    </div>
  );
}
