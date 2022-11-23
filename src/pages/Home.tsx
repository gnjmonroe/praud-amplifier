import React, { useEffect } from 'react';
import LinkButton from '../components/LinkButton';
import classes from '../scss/home.module.scss';
import AmplifierLogo from '../images/amplifier-logo.png';
import PraudLogo from '../assets/praud-logo.svg';

export default function Home(props: {
  destination: string,
}) {
  const { destination } = props;

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className={classes.home}>
      <div className={classes.content}>
        <img src={AmplifierLogo} alt="PRAUD Amplifier Logo" />
        <div className={classes.textBlock}>
          <h1 className={classes.title}>AMPLIFIER</h1>
          <div className={classes.horizontalRule} />
          <p className={classes.subTitle}>LG SMART COTTAGE</p>
        </div>
        <a className={classes.praudLink} href="https://praud.info">
          <img src={PraudLogo} alt="PRAUD Logo" />
        </a>
      </div>
      <div className={classes.linkButtonContainer}>
        <LinkButton text="Start" target="/model" greenLight destination={destination} />
      </div>
    </div>
  );
}
