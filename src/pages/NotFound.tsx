import React from 'react';
import Header from '../components/Header';
import classes from '../scss/pages/notFound.module.scss';

export default function NotFound() {
  return (
    <div className={classes.notFound}>
      <Header prevSlug="." />
      <div className={classes.content}>
        404 Error: Content not found.
        Return to the homepage or go back to the previous page.
      </div>
      <div className={classes.linkButtonContainer}>
        <div className={classes.button} role="button">Go Back</div>
        <div className={classes.button} role="button">Return Home</div>
      </div>
    </div>
  );
}
