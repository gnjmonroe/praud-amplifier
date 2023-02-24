import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import classes from '../scss/components/confirmationModule.module.scss';
import { Data } from '../ts/data';

export default function ConfirmationModule(props: {
  dataSubset: Data,
  selectedOption: string | null
}) {
  const { dataSubset, selectedOption } = props;

  function getColorClass() {
    const optionIndex = dataSubset.options.findIndex((option: string) => option === selectedOption);
    switch (true) {
      case (dataSubset.category === 'Model' && optionIndex === 0): return classes.color0;
      case (dataSubset.category === 'Model' && optionIndex === 1): return classes.color1;
      case (dataSubset.category === 'Model' && optionIndex === 2): return classes.color2;
      case (dataSubset.category === 'Model' && optionIndex === 3): return classes.color3;
      case (dataSubset.category === 'Model' && optionIndex === 4): return classes.color4;
      case (dataSubset.category === 'Location' && optionIndex === 0): return classes.color5;
      case (dataSubset.category === 'Location' && optionIndex === 1): return classes.color6;
      case (dataSubset.category === 'Location' && optionIndex === 2): return classes.color7;
      case (dataSubset.category === 'Location' && optionIndex === 3): return classes.color8;
      case (dataSubset.category === 'Location' && optionIndex === 4): return classes.color9;
      case (dataSubset.category === 'User' && optionIndex === 0): return classes.color10;
      case (dataSubset.category === 'User' && optionIndex === 1): return classes.color11;
      case (dataSubset.category === 'User' && optionIndex === 2): return classes.color12;
      case (dataSubset.category === 'User' && optionIndex === 3): return classes.color13;
      case (dataSubset.category === 'Mood' && optionIndex === 0): return classes.color14;
      case (dataSubset.category === 'Mood' && optionIndex === 1): return classes.color15;
      case (dataSubset.category === 'Opening' && optionIndex === 0): return classes.color16;
      case (dataSubset.category === 'Opening' && optionIndex === 1): return classes.color17;
      case (dataSubset.category === 'Opening' && optionIndex === 2): return classes.color18;
      case (dataSubset.category === 'Opening' && optionIndex === 3): return classes.color19;
      default: throw new Error(`Unexpected value of optionIndex: ${optionIndex}`);
    }
  }

  return (
    <div className={classes.confirmationModule}>
      <div className={`${classes.iconContainer} ${getColorClass()}`}>
        <Icon
          category={dataSubset.category}
          optionIndex={dataSubset.options.findIndex((option: string) => option === selectedOption)}
        />
      </div>
      <div className={classes.textBlock}>
        <p className={classes.categoryName}>{dataSubset.category}</p>
        <p className={classes.selectedOption}>{selectedOption}</p>
      </div>
      <Link className={classes.editButton} to={`/${dataSubset.category.toLowerCase()}`} state={{ from: 'confirm' }}>Edit</Link>
    </div>
  );
}
