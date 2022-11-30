import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import classes from '../scss/components/confirmationModule.module.scss';

export default function ConfirmationModule(props: {
  set: any,
  selectedOption: string | null
}) {
  const { set, selectedOption } = props;

  return (
    <div className={classes.confirmationModule}>
      <div className={classes.iconContainer}>
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
