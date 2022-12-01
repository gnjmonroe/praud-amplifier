import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import classes from '../scss/components/confirmationModule.module.scss';

export default function ConfirmationModule(props: {
  set: any,
  selectedOption: string | null
}) {
  const { set, selectedOption } = props;

  function getRandomColorClass() {
    const randomNumber = Math.floor(Math.random() * 5);
    switch (randomNumber) {
      case 0: return classes.color0;
      case 1: return classes.color1;
      case 2: return classes.color2;
      case 3: return classes.color3;
      case 4: return classes.color4;
      default: throw new Error(`Unexpected value of randomNumber: ${randomNumber}`);
    }
  }

  return (
    <div className={classes.confirmationModule}>
      <div className={`${classes.iconContainer} ${getRandomColorClass()}`}>
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
