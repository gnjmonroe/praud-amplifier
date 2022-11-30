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
    } if (!localStorage.getItem(`${currentCategory}`)) {
      return classes.unvisited;
    }
    return '';
  }

  return (
    // <div className={classes.categoryPageProgressBar}>
    //   {data.map((section: any, indicatorIndex: number) => (
    //     (localStorage.getItem(`${section.category}`) ? (
    //       <Link
    //         key={section.category}
    //         className={`${classes.progressIndicator} ${handleClassName(section.category, indicatorIndex)}`}
    //         to={`/${section.category.toLowerCase()}`}
    //         state={{ from: confirm ? 'confirm' : '' }}
    //       >
    //         {section.category}
    //       </Link>
    //     ) : (
    //       <div
    //         key={section.category}
    //         className={`${classes.progressIndicator} ${handleClassName(section.category, indicatorIndex)}`}
    //       >
    //         {section.category}
    //       </div>
    //     ))
    //   ))}
    // </div>
    <div className={classes.categoryPageProgressBar}>
      <div className={classes.labels}>
        {data.map((section: any, indicatorIndex: number) => (
          <p className={classes.label}>{section.category}</p>
        ))}
      </div>
      <div className={classes.nodes}>
        {data.map((section: any, indicatorIndex: number) => (
          <div className={classes.nodeContainer}>
            <div className={classes.node} />
          </div>
        ))}
      </div>
      <div className={classes.connectingLines}>
        <div className={classes.connectingLine} />
        <div className={classes.connectingLine} />
        <div className={classes.connectingLine} />
        <div className={classes.connectingLine} />
      </div>
      <div className={classes.links}>
        {data.map((section: any, indicatorIndex: number) => (
          <Link to={`/${section.category.toLowerCase()}`} className={classes.link} />
        ))}
      </div>
    </div>
  );
}
