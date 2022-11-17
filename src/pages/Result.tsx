import React from 'react';
import CategoryPageHeader from '../components/CategoryPageHeader';
import LinkButton from '../components/LinkButton';
import classes from '../scss/result.module.scss';

export default function Result(props: {
  data: any,
}) {
  const { data } = props;

  function getSelectedOptionsString() {
    return data.map((set: any) => (
      `${set.category}: ${localStorage.getItem(`${set.category}`)}`
    )).join(', ');
  }

  const selectedOptionsString = getSelectedOptionsString();

  return (
    <div className={classes.resultPage}>
      <CategoryPageHeader prevSlug="confirm" />
      <div className={classes.contents}>
        <h2 className={classes.title}>Your Amplifier</h2>
        <img className={classes.image} src="" alt="" />
        <p>{selectedOptionsString}</p>
      </div>
      <div className={classes.linkButtonContainer}>
        <LinkButton text="Share" target="/" greenLight={false} />
        <LinkButton text="Back to Home" target="/" greenLight />
      </div>
    </div>
  );
}
