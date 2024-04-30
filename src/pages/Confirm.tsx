import Header from "../components/Header";
import LinkButton from "../components/LinkButton";
import ConfirmationModule from "../components/ConfirmationModule";
import classes from "../scss/pages/confirm.module.scss";
import { options } from "../data";

export default function Confirm() {
  return (
    <div className={classes.confirmPage}>
      <Header
        prevSlug={`${options[options.length - 1].category.toLowerCase()}`}
      />
      <div className={classes.content}>
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
      <div className={classes.linkButtonContainer}>
        <LinkButton text="Confirm" target="/result" />
      </div>
    </div>
  );
}
