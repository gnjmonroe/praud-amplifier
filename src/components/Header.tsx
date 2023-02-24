import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBackIcon from '../assets/header-back-icon.svg';
import AmplifierLogo from '../images/amplifier-logo.png';
import classes from '../scss/components/header.module.scss';

export default function Header(props: {
  prevSlug: string,
}) {
  const { prevSlug } = props;

  return (
    <div className={classes.header}>
      <Link to={`/${prevSlug}`}>
        <img
          className={classes.backIcon}
          src={HeaderBackIcon}
          alt="Back button"
        />
      </Link>
      <Link
        className={classes.amplifierLogoLink}
        to="/"
      >
        <img
          className={classes.amplifierLogo}
          src={AmplifierLogo}
          alt="PRAUD Amplifier Logo"
        />
      </Link>
    </div>
  );
}
