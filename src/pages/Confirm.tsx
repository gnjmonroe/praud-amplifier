import Header from "../components/Header";
import LinkButton from "../components/LinkButton";
import ConfirmationModule from "../components/ConfirmationModule";
import styles from "./Confirm.module.scss";
import { options } from "../data";

export default function Confirm() {
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
