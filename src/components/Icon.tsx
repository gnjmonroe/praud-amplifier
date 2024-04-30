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

interface IconProps {
  option: string | null;
}
export default function Icon({ option: selectedOption }: IconProps) {
  const IconMap: Record<string, JSX.Element> = {
    Pool: <ModelPool className={classes.icon} />,
    Cinema: <ModelCinema className={classes.icon} />,
    Kitchen: <ModelKitchen className={classes.icon} />,
    Library: <ModelLibrary className={classes.icon} />,
    Garden: <ModelGarden className={classes.icon} />,
    Mountain: <LocationMountain className={classes.icon} />,
    River: <LocationRiver className={classes.icon} />,
    Sea: <LocationSea className={classes.icon} />,
    Rural: <LocationRural className={classes.icon} />,
    Valley: <LocationValley className={classes.icon} />,
    Single: <UserSingle className={classes.icon} />,
    Couple: <UserCouple className={classes.icon} />,
    Family: <UserFamily className={classes.icon} />,
    Pet: <UserPet className={classes.icon} />,
    Active: <MoodActive className={classes.icon} />,
    Silent: <MoodSilent className={classes.icon} />,
    Windowless: <FenestrationWindowless className={classes.icon} />,
    Scenic: <FenestrationScenic className={classes.icon} />,
    Skylight: <FenestrationSkylight className={classes.icon} />,
    Folding: <FenestrationSemiOpen className={classes.icon} />,
  };

  if (!selectedOption) return null;
  return IconMap[selectedOption];
}
