import { useEffect } from "react";
import { ConfirmationModule, Header, LinkButton } from "../components";
import { options } from "../data";
import styles from "./Confirm.module.scss";

/**
 * @todo remove hard code on imgCount
 */
export const Confirm = () => {
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
};
