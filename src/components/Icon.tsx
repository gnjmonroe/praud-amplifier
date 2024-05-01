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
import styles from "./Icon.module.scss";

const IconMap: Record<string, JSX.Element> = {
  Pool: <ModelPool className={styles.root} />,
  Cinema: <ModelCinema className={styles.root} />,
  Kitchen: <ModelKitchen className={styles.root} />,
  Library: <ModelLibrary className={styles.root} />,
  Garden: <ModelGarden className={styles.root} />,
  Mountain: <LocationMountain className={styles.root} />,
  River: <LocationRiver className={styles.root} />,
  Sea: <LocationSea className={styles.root} />,
  Rural: <LocationRural className={styles.root} />,
  Valley: <LocationValley className={styles.root} />,
  Single: <UserSingle className={styles.root} />,
  Couple: <UserCouple className={styles.root} />,
  Family: <UserFamily className={styles.root} />,
  Pet: <UserPet className={styles.root} />,
  Active: <MoodActive className={styles.root} />,
  Silent: <MoodSilent className={styles.root} />,
  Windowless: <FenestrationWindowless className={styles.root} />,
  Scenic: <FenestrationScenic className={styles.root} />,
  Skylight: <FenestrationSkylight className={styles.root} />,
  Folding: <FenestrationSemiOpen className={styles.root} />,
};

interface IconProps {
  option: string | null;
}
export default function Icon({ option: selectedOption }: IconProps) {
  return selectedOption ? IconMap[selectedOption] : null;
}
