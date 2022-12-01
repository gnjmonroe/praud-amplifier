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

  function conditionallySetPending() {
    if (!localStorage.getItem(`${data[dataIndex].category}`)) {
      localStorage.setItem(`${data[dataIndex].category}`, 'pending');
    }
  }

  return (
    <div className={classes.categoryPageProgressBar}>
      <div className={classes.labels}>
        {data.map((section: any) => (
          <p key={section.category} className={classes.label}>{section.category}</p>
        ))}
      </div>
      <div className={classes.nodes}>
        {data.map((section: any, indicatorIndex: number) => (
          <div key={section.category} className={classes.nodeContainer}>
            <div className={`${classes.node} ${handleClassName(section.category, indicatorIndex)}`} />
          </div>
        ))}
      </div>
      <div className={classes.connectingLines}>
        {/* number of connectingLine divs = number of nodes - 1 */}
        <div className={classes.connectingLine} />
        <div className={classes.connectingLine} />
        <div className={classes.connectingLine} />
        <div className={classes.connectingLine} />
      </div>
      <div className={classes.links}>
        {data.map((section: any) => (
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
