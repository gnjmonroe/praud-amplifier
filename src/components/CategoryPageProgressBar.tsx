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

  function handleClassName(currentCategory: string, indicatorIndex: number) {
    if (currentCategory === data[dataIndex].category) return classes.active;
    if (data[indicatorIndex].options.includes(localStorage.getItem(`${currentCategory}`))) {
      return classes.complete;
    } if (localStorage.getItem(`${currentCategory}`) === 'pending') {
      return classes.incomplete;
    }
    return '';
  }

  return (
    <div className={classes.categoryPageProgressBar}>
      {data.map((section: any, indicatorIndex: number) => (
        (localStorage.getItem(`${section.category}`) ? (
          <Link className={classes.progressIndicator} to={`/${section.category.toLowerCase()}`} state={{ from: confirm ? 'confirm' : '' }}>
            <p className={classes.progressChipLabel}>{section.category}</p>
            <div className={handleClassName(section.category, indicatorIndex)} />
          </Link>
        ) : (
          <div className={classes.progressIndicator}>
            <p className={classes.progressChipLabel}>{section.category}</p>
            <div className={classes.none} />
          </div>
        ))
      ))}
    </div>
  );
}
