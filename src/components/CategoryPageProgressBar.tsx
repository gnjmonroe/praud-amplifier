import React from 'react';
import classes from '../scss/components/categoryPageProgressBar.module.scss';

export default function CategoryPageProgressBar() {
  return (
    <div className={classes.categoryPageProgressBar}>
      <div className={classes.progressChip} />
      <div className={classes.progressChip} />
      <div className={classes.progressChip} />
      <div className={classes.progressChip} />
      <div className={classes.progressChip} />
    </div>
  );
}
