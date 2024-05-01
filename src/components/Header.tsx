import React from "react";
import { Link } from "react-router-dom";
import HeaderBackIcon from "../assets/header-back-icon.svg";
import AmplifierLogo from "../images/amplifier-logo.png";
import styles from "./Header.module.scss";

interface HeaderProps {
  prevSlug: string;
}
export default function Header({ prevSlug }: HeaderProps) {
  return (
    <div className={styles.root}>
      <Link to={`/${prevSlug}`}>
        <img
          className={styles.backIcon}
          src={HeaderBackIcon}
          alt="Back button"
        />
      </Link>
      <Link className={styles.homeLink} to="/">
        <img
          className={styles.amplifierLogo}
          src={AmplifierLogo}
          alt="PRAUD Amplifier Logo"
        />
      </Link>
    </div>
  );
}
