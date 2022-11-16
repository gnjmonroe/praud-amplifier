import React from 'react';
import CategoryPageHeader from '../components/CategoryPageHeader';
import LinkButton from '../components/LinkButton';
import classes from '../scss/result.module.scss';

export default function Result() {
  return (
    <div className={classes.resultPage}>
      <CategoryPageHeader prevSlug="confirm" />
      <div className={classes.contents}>
        <h2 className={classes.title}>Your Amplifier</h2>
        <img className={classes.image} src="" alt="" />
        <p>Selected Options</p>
      </div>
      <div className={classes.linkButtonContainer}>
        <LinkButton text="Share" target="/" />
        <LinkButton text="Done" target="/" />
      </div>
    </div>
  );
}
