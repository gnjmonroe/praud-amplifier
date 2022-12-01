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

  function getRandomColorClass() {
    switch (optionIndex) {
      case 0: return classes.color0;
      case 1: return classes.color1;
      case 2: return classes.color2;
      case 3: return classes.color3;
      case 4: return classes.color4;
      default: throw new Error(`Unexpected value of optionIndex: ${optionIndex}`);
    }
  }

  function handleClassName() {
    if (selection === option) {
      return `${classes.iconFrame} ${classes.activeSelection} ${getRandomColorClass()}`;
    }
    return `${classes.iconFrame}  ${getRandomColorClass()}`;
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
