import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import classes from '../scss/components/selector.module.scss';

export default function Selector(props: {
  category: string,
  optionIndex: number,
  option: string,
  selection: string | null,
  setSelection: any,
  nextSlug: string
}) {
  const {
    category, optionIndex, option, selection, setSelection, nextSlug,
  } = props;

  function handleClassName() {
    if (selection === option) {
      return `${classes.iconFrame} ${classes.activeSelection}`;
    }
    return classes.iconFrame;
  }

  return (
    <Link
      to={`/${nextSlug}`}
      className={classes.selector}
      role="button"
      tabIndex={0}
      onClick={() => {
        setSelection(option);
        localStorage.setItem(`${category}`, option);
      }}
    >
      <div className={handleClassName()}>
        <Icon category={category} optionIndex={optionIndex} />
      </div>
      {option}
    </Link>
  );
}
