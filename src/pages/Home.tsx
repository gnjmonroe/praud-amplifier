import React from 'react';
import LinkButton from '../components/LinkButton';
import classes from '../scss/home.module.scss';
import AmplifierLogo from '../images/amplifier-logo.png';

export default function Home() {
  return (
    <div className={classes.home}>
      <img src={AmplifierLogo} alt="" />
      <h1>AMPLIFIER</h1>
      <p>LG Smart Cottage</p>
      <LinkButton text="Start" target="/model" />
    </div>
  );
}
