import React from 'react';
import classes from '../scss/components/hamburger.module.scss';

export default function Hamburger() {
  return (
    <div className={classes.hamburger}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="10" y1="15" x2="38" y2="15" />
        <line x1="10" y1="24" x2="38" y2="24" />
        <line x1="10" y1="33" x2="38" y2="33" />
      </svg>
    </div>
  );
}
