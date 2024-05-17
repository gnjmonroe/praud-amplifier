import { useEffect } from "react";
import { Link } from "react-router-dom";
import PraudLogo from "../assets/praud-logo.svg";
import AmplifierLogo from "../images/original-logo.png";
import styles from "./Home.module.scss";

interface HomeProps {
  destination: string;
}
export const Home = ({ destination }: HomeProps) => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className={styles.root}>
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
          <div className={styles.titleBlock}>
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
};
