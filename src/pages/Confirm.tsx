import React from 'react';
import Header from '../components/Header';
import LinkButton from '../components/LinkButton';
import ConfirmationModule from '../components/ConfirmationModule';
import classes from '../scss/pages/confirm.module.scss';
import { Dataset } from '../ts/types';

export default function Confirm(props: {
  data: Dataset[]
}) {
  const { data } = props;

  return (
    <div className={classes.confirmPage}>
      <Header prevSlug={`${data[data.length - 1].category.toLowerCase()}`} />
      <div className={classes.content}>
        {data.map((dataSubset: Dataset) => (
          <ConfirmationModule
            key={dataSubset.category}
            dataSubset={dataSubset}
            selectedOption={localStorage.getItem(`${dataSubset.category}`)}
          />
        ))}
      </div>
      <div className={classes.linkButtonContainer}>
        <LinkButton text="Confirm" target="/result" />
      </div>
    </div>
  );
}
