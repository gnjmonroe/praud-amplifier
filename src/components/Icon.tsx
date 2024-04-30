import ModelPool from "../assets/pool.svg?react";
import ModelCinema from "../assets/cinema.svg?react";
import ModelKitchen from "../assets/kitchen.svg?react";
import ModelLibrary from "../assets/library.svg?react";
import ModelGarden from "../assets/garden.svg?react";
import LocationMountain from "../assets/mountain.svg?react";
import LocationRiver from "../assets/river.svg?react";
import LocationSea from "../assets/sea.svg?react";
import LocationRural from "../assets/rural.svg?react";
import LocationValley from "../assets/valley.svg?react";
import UserSingle from "../assets/single.svg?react";
import UserCouple from "../assets/couple.svg?react";
import UserFamily from "../assets/family.svg?react";
import UserPet from "../assets/pet.svg?react";
import MoodActive from "../assets/active.svg?react";
import MoodSilent from "../assets/silent.svg?react";
import FenestrationWindowless from "../assets/windowless.svg?react";
import FenestrationScenic from "../assets/scenic.svg?react";
import FenestrationSkylight from "../assets/skylight.svg?react";
import FenestrationSemiOpen from "../assets/folding.svg?react";
import classes from "../scss/components/icon.module.scss";

export default function Icon(props: { category: string; optionIndex: number }) {
  const { category, optionIndex } = props;

  function handleIconPath() {
    switch (true) {
      case category === "Model" && optionIndex === 0:
        return <ModelPool className={classes.icon} />;
      case category === "Model" && optionIndex === 1:
        return <ModelCinema className={classes.icon} />;
      case category === "Model" && optionIndex === 2:
        return <ModelKitchen className={classes.icon} />;
      case category === "Model" && optionIndex === 3:
        return <ModelLibrary className={classes.icon} />;
      case category === "Model" && optionIndex === 4:
        return <ModelGarden className={classes.icon} />;
      case category === "Location" && optionIndex === 0:
        return <LocationMountain className={classes.icon} />;
      case category === "Location" && optionIndex === 1:
        return <LocationRiver className={classes.icon} />;
      case category === "Location" && optionIndex === 2:
        return <LocationSea className={classes.icon} />;
      case category === "Location" && optionIndex === 3:
        return <LocationRural className={classes.icon} />;
      case category === "Location" && optionIndex === 4:
        return <LocationValley className={classes.icon} />;
      case category === "User" && optionIndex === 0:
        return <UserSingle className={classes.icon} />;
      case category === "User" && optionIndex === 1:
        return <UserCouple className={classes.icon} />;
      case category === "User" && optionIndex === 2:
        return <UserFamily className={classes.icon} />;
      case category === "User" && optionIndex === 3:
        return <UserPet className={classes.icon} />;
      case category === "Mood" && optionIndex === 0:
        return <MoodActive className={classes.icon} />;
      case category === "Mood" && optionIndex === 1:
        return <MoodSilent className={classes.icon} />;
      case category === "Opening" && optionIndex === 0:
        return <FenestrationWindowless className={classes.icon} />;
      case category === "Opening" && optionIndex === 1:
        return <FenestrationScenic className={classes.icon} />;
      case category === "Opening" && optionIndex === 2:
        return <FenestrationSkylight className={classes.icon} />;
      case category === "Opening" && optionIndex === 3:
        return <FenestrationSemiOpen className={classes.icon} />;
      default:
        throw new Error(
          `Unexpected value in handleIconPath: ${category} ${optionIndex}`,
        );
    }
  }
  return handleIconPath();
}
