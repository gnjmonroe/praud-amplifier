import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AmplifierLogo from "../images/original-logo.png";
import PraudLogo from "../assets/praud-logo.svg";
import classes from "../scss/pages/home.module.scss";

interface HomeProps {
  destination: string;
}
export default function Home({ destination }: HomeProps) {
  // reset selections every visit to the home page
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className={classes.home}>
      <div className={classes.content}>
        <Link
          className={classes.linkBlock}
          to="/model"
          state={{ to: destination }}
        >
          <img
            className={classes.amplifierLogo}
            src={AmplifierLogo}
            alt="PRAUD Amplifier Logo"
          />
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
