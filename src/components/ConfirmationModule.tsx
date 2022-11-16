import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DummySelectorIcon } from '../assets/dummy-selector-icon.svg';
import classes from '../scss/components/confirmationModule.module.scss';

export default function ConfirmationModule(props: {
  set: any
}) {
  const { set } = props;

  return (
    <div className={classes.confirmationModule}>
      <DummySelectorIcon className={classes.selectorIcon} />
      <div className={classes.textBlock}>
        <p className={classes.categoryName}>{set.category}</p>
        <p className={classes.selectedOption}>Selected Option</p>
      </div>
      <Link className={classes.editButton} to={`/${set.category.toLowerCase()}`} state={{ from: 'confirm' }}>Edit</Link>
    </div>
  );
}
