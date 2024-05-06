import { useEffect } from "react";
import Header from "../components/Header";
import LinkButton from "../components/LinkButton";
import ConfirmationModule from "../components/ConfirmationModule";
import styles from "./Confirm.module.scss";
import { options } from "../data";

/**
 * @todo remove hard code on imgCount
 */
export default function Confirm() {
  // set result image index
  useEffect(() => {
    const imgCount = 20;
    const randomImgIndex = Math.floor(Math.random() * imgCount);
    localStorage.setItem("result", String(randomImgIndex));
  }, []);

  return (
    <div className={styles.root}>
      <Header
        prevSlug={`${options[options.length - 1].category.toLowerCase()}`}
      />
      <div className={styles.content}>
        {options.map((option) => {
          const selectedOption = localStorage.getItem(`${option.category}`);
          if (!selectedOption) throw Error("selectedOption is null!");

          return (
            <ConfirmationModule
              key={option.category}
              option={option}
              selectedOption={selectedOption}
            />
          );
        })}
      </div>
      <div className={styles.linkButtonContainer}>
        <LinkButton text="Confirm" target="/result" />
      </div>
    </div>
  );
}
