import React from 'react';
import Icon from './Icon';
import classes from '../scss/components/selector.module.scss';

export default function Selector(props: {
  category: string,
  optionIndex: number,
  option: string,
  selection: string | null,
  setSelection: any,
}) {
  const {
    category, optionIndex, option, selection, setSelection,
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
      <Icon category={category} optionIndex={optionIndex} />
      {option}
    </div>
  );
}
