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
  nextSlug: string,
  from: string
}) {
  const {
    category, optionIndex, option, selection, setSelection, nextSlug, from,
  } = props;

  function getRandomColorClass() {
    switch (true) {
      case (category === 'Model' && optionIndex === 0): return classes.color0;
      case (category === 'Model' && optionIndex === 1): return classes.color1;
      case (category === 'Model' && optionIndex === 2): return classes.color2;
      case (category === 'Model' && optionIndex === 3): return classes.color3;
      case (category === 'Model' && optionIndex === 4): return classes.color4;
      case (category === 'Location' && optionIndex === 0): return classes.color5;
      case (category === 'Location' && optionIndex === 1): return classes.color6;
      case (category === 'Location' && optionIndex === 2): return classes.color7;
      case (category === 'Location' && optionIndex === 3): return classes.color8;
      case (category === 'Location' && optionIndex === 4): return classes.color9;
      case (category === 'User' && optionIndex === 0): return classes.color10;
      case (category === 'User' && optionIndex === 1): return classes.color11;
      case (category === 'User' && optionIndex === 2): return classes.color12;
      case (category === 'User' && optionIndex === 3): return classes.color13;
      case (category === 'Mood' && optionIndex === 0): return classes.color14;
      case (category === 'Mood' && optionIndex === 1): return classes.color15;
      case (category === 'Opening' && optionIndex === 0): return classes.color16;
      case (category === 'Opening' && optionIndex === 1): return classes.color17;
      case (category === 'Opening' && optionIndex === 2): return classes.color18;
      case (category === 'Opening' && optionIndex === 3): return classes.color19;
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
      to={from === 'confirm' ? '/confirm' : `/${nextSlug}`}
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
