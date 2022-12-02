import React from 'react';
import CategoryPageHeader from '../components/CategoryPageHeader';
import LinkButton from '../components/LinkButton';
import ConfirmationModule from '../components/ConfirmationModule';
import classes from '../scss/confirm.module.scss';

export default function Confirm(props: {
  data: any
}) {
  const { data } = props;

  return (
    <div className={classes.confirmPage}>
      <CategoryPageHeader prevSlug={`${data[data.length - 1].category.toLowerCase()}`} />
      <div className={classes.content}>
        {data.map((set: any, setIndex: number) => (
          <ConfirmationModule
            key={set.category}
            set={set}
            setIndex={setIndex}
            selectedOption={localStorage.getItem(`${set.category}`)}
          />
        ))}
      </div>
      <div className={classes.linkButtonContainer}>
        <LinkButton text="Confirm" target="/result" greenLight />
      </div>
    </div>
  );
}
