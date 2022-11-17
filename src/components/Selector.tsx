import React from 'react';
import { ReactComponent as DummySelectorIcon } from '../assets/dummy-selector-icon.svg';
import classes from '../scss/components/selector.module.scss';

export default function Selector(props: {
  option: string,
  selection: string | null,
  setSelection: any
}) {
  const {
    option, selection, setSelection,
  } = props;

  function handleClassName() {
    if (selection === option) {
      return `${classes.selector} ${classes.activeSelection}`;
    }
    return classes.selector;
  }

  return (
    <div className={handleClassName()} onClick={() => { setSelection(option); }}>
      <DummySelectorIcon className={classes.dummySelectorIcon} />
      <p className={classes.optionLabel}>{option}</p>
    </div>
  );
}
