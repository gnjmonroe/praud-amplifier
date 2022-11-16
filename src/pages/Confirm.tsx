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
      <div className={classes.contents}>
        <h2>Confirmation</h2>
        <div className={classes.confirmationModules}>
          {data.map((set: any) => (
            <ConfirmationModule set={set} />
          ))}
        </div>
      </div>
      <div className={classes.linkButtonContainer}>
        <LinkButton text="Confirm" target="/result" />
      </div>
    </div>
  );
}
