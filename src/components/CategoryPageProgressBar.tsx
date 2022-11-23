import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../scss/components/categoryPageProgressBar.module.scss';

export default function CategoryPageProgressBar(props: {
  data: any,
  dataIndex: number,
  confirm: boolean,
}) {
  const {
    data, dataIndex, confirm,
  } = props;

  function handleClassName(currentCategory: string) {
    if (currentCategory === data[dataIndex].category) return classes.active;
    return localStorage.getItem(`${currentCategory}`)
      ? classes.complete
      : classes.incomplete;
  }

  return (
    <div className={classes.categoryPageProgressBar}>
      {data.map((section: any) => (
        (localStorage.getItem(`${section.category}`) ? (
          <Link className={classes.progressIndicator} to={`/${section.category.toLowerCase()}`} state={{ from: confirm ? 'confirm' : '' }}>
            <p className={classes.progressChipLabel}>{section.category}</p>
            <div className={handleClassName(section.category)} />
          </Link>
        ) : (
          <div className={classes.progressIndicator}>
            <p className={classes.progressChipLabel}>{section.category}</p>
            <div className={handleClassName(section.category)} />
          </div>
        ))
      ))}
    </div>
  );
}
