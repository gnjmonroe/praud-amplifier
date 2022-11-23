import React from 'react';
import { ReactComponent as DummySelectorIcon } from '../assets/dummy-selector-icon.svg';
import classes from '../scss/components/selector.module.scss';

export default function Selector(props: {
  option: string;
  selection: string | null;
  setSelection: any;
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

  function handleKey(event: React.KeyboardEvent<HTMLDivElement>): void {
    if (event.key === 'Enter' || event.key === ' ') {
      setSelection(option);
    }
  }

  return (
    <div
      className={handleClassName()}
      role="button"
      tabIndex={0}
      onKeyDown={handleKey}
      onClick={() => {
        setSelection(option);
      }}
    >
      <DummySelectorIcon className={classes.dummySelectorIcon} />
      <p className={classes.optionLabel}>{option}</p>
    </div>
  );
}
