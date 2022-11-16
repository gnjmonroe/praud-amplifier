import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBackIcon from '../assets/header-back-icon.svg';
import AmplifierLogo from '../images/amplifier-logo.png';
import Hamburger from './Hamburger';
import classes from '../scss/components/categoryPageHeader.module.scss';

export default function CategoryPageHeader(props: {
  prevSlug: string,
}) {
  const { prevSlug } = props;

  return (
    <div className={classes.categoryPageHeader}>
      <Link to={`/${prevSlug}`}>
        <img className={classes.backIcon} src={HeaderBackIcon} alt="Back button" />
      </Link>
      <Link to="../">
        <img className={classes.amplifierLogo} src={AmplifierLogo} alt="PRAUD Amplifier Logo" />
      </Link>
      <Hamburger />
    </div>
  );
}
