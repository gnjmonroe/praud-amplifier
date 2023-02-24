import React from 'react';
import { Link } from 'react-router-dom';
import { Data } from '../ts/data';
import classes from '../scss/components/categoryPageProgressBar.module.scss';

export default function CategoryPageProgressBar(props: {
  data: Data[],
  dataIndex: number,
  confirm: boolean,
}) {
  const {
    data, dataIndex, confirm,
  } = props;

  function handleClassName(currentCategory: string, indicatorIndex: number) {
    const localStorageAtCurrentCategory = localStorage.getItem(currentCategory);

    if (currentCategory === data[dataIndex].category) return classes.active;
    if (data[indicatorIndex].options.includes(localStorageAtCurrentCategory as string)) {
      return classes.complete;
    }
    if (localStorageAtCurrentCategory === 'pending') {
      return classes.incomplete;
    }
    if (!localStorageAtCurrentCategory) {
      return classes.unvisited;
    }
    return '';
  }

  function conditionallySetPending() {
    if (!localStorage.getItem(`${data[dataIndex].category}`)) {
      localStorage.setItem(`${data[dataIndex].category}`, 'pending');
    }
  }

  return (
    <div className={classes.categoryPageProgressBar}>
      <div className={classes.labels}>
        {data.map((section) => (
          <p key={section.category} className={classes.label}>{section.category}</p>
        ))}
      </div>
      <div className={classes.nodes}>
        {data.map((section, indicatorIndex: number) => (
          <div key={section.category} className={classes.nodeContainer}>
            <div className={`${classes.node} ${handleClassName(section.category, indicatorIndex)}`} />
          </div>
        ))}
      </div>
      <div className={classes.connectingLines}>
        {data.map((section, i: number) => {
          if (i < data.length - 1) {
            return (
              <div className={classes.connectingLine} />
            );
          }
          return null;
        })}
      </div>
      <div className={classes.links}>
        {data.map((section) => (
          <Link
            key={section.category}
            to={localStorage.getItem(`${section.category}`) ? `/${section.category.toLowerCase()}` : ''}
            className={classes.link}
            state={{ from: confirm ? 'confirm' : '' }}
            onClick={() => { conditionallySetPending(); }}
          />
        ))}
      </div>
    </div>
  );
}
