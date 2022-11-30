import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from '../scss/home.module.scss';
import AmplifierLogo from '../images/original-logo.png';
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
        <Link className={classes.link} to="/model" state={{ to: destination }}>
          <img className={classes.amplifierLogo} src={AmplifierLogo} alt="PRAUD Amplifier Logo" />
          <div className={classes.textBlock}>
            <h1 className={classes.title}>AMPLIFIER</h1>
            <p className={classes.subTitle}>LG SMART COTTAGE</p>
          </div>
        </Link>
        <a className={classes.praudLink} href="https://praud.info">
          <img src={PraudLogo} alt="PRAUD Logo" />
        </a>
      </div>
    </div>
  );
}
