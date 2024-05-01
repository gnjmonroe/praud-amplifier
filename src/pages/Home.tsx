import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AmplifierLogo from "../images/original-logo.png";
import PraudLogo from "../assets/praud-logo.svg";
import styles from "./Home.module.scss";

interface HomeProps {
  destination: string;
}
export default function Home({ destination }: HomeProps) {
  // reset selections every visit to the home page
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <Link
          className={styles.linkBlock}
          to="/model"
          state={{ to: destination }}
        >
          <img
            className={styles.amplifierLogo}
            src={AmplifierLogo}
            alt="PRAUD Amplifier Logo"
          />
          <div className={styles.textBlock}>
            <h1 className={styles.title}>AMPLIFIER</h1>
            <p className={styles.subTitle}>LG SMART COTTAGE</p>
          </div>
        </Link>
        <a className={styles.praudLink} href="https://praud.info">
          <img src={PraudLogo} alt="PRAUD Logo" />
        </a>
      </div>
    </div>
  );
}
