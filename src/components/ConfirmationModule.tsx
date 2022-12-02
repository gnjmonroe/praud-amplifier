import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import classes from '../scss/components/confirmationModule.module.scss';

export default function ConfirmationModule(props: {
  set: any,
  selectedOption: string | null
}) {
  const { set, selectedOption } = props;

  function getColorClass() {
    const optionIndex = set.options.findIndex((option: string) => option === selectedOption);
    switch (true) {
      case (set.category === 'Model' && optionIndex === 0): return classes.color0;
      case (set.category === 'Model' && optionIndex === 1): return classes.color1;
      case (set.category === 'Model' && optionIndex === 2): return classes.color2;
      case (set.category === 'Model' && optionIndex === 3): return classes.color3;
      case (set.category === 'Model' && optionIndex === 4): return classes.color4;
      case (set.category === 'Location' && optionIndex === 0): return classes.color5;
      case (set.category === 'Location' && optionIndex === 1): return classes.color6;
      case (set.category === 'Location' && optionIndex === 2): return classes.color7;
      case (set.category === 'Location' && optionIndex === 3): return classes.color8;
      case (set.category === 'Location' && optionIndex === 4): return classes.color9;
      case (set.category === 'User' && optionIndex === 0): return classes.color10;
      case (set.category === 'User' && optionIndex === 1): return classes.color11;
      case (set.category === 'User' && optionIndex === 2): return classes.color12;
      case (set.category === 'User' && optionIndex === 3): return classes.color13;
      case (set.category === 'Mood' && optionIndex === 0): return classes.color14;
      case (set.category === 'Mood' && optionIndex === 1): return classes.color15;
      case (set.category === 'Opening' && optionIndex === 0): return classes.color16;
      case (set.category === 'Opening' && optionIndex === 1): return classes.color17;
      case (set.category === 'Opening' && optionIndex === 2): return classes.color18;
      case (set.category === 'Opening' && optionIndex === 3): return classes.color19;
      default: throw new Error(`Unexpected value of optionIndex: ${optionIndex}`);
    }
  }

  return (
    <div className={classes.confirmationModule}>
      <div className={`${classes.iconContainer} ${getColorClass()}`}>
        <Icon
          category={set.category}
          optionIndex={set.options.findIndex((option: string) => option === selectedOption)}
        />
      </div>
      <div className={classes.textBlock}>
        <p className={classes.categoryName}>{set.category}</p>
        <p className={classes.selectedOption}>{selectedOption}</p>
      </div>
      <Link className={classes.editButton} to={`/${set.category.toLowerCase()}`} state={{ from: 'confirm' }}>Edit</Link>
    </div>
  );
}
