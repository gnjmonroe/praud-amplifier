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

interface IconProps {
  option: string | null;
}
export default function Icon({ option: selectedOption }: IconProps) {
  const IconMap: Record<string, JSX.Element> = {
    Pool: <ModelPool className={styles.icon} />,
    Cinema: <ModelCinema className={styles.icon} />,
    Kitchen: <ModelKitchen className={styles.icon} />,
    Library: <ModelLibrary className={styles.icon} />,
    Garden: <ModelGarden className={styles.icon} />,
    Mountain: <LocationMountain className={styles.icon} />,
    River: <LocationRiver className={styles.icon} />,
    Sea: <LocationSea className={styles.icon} />,
    Rural: <LocationRural className={styles.icon} />,
    Valley: <LocationValley className={styles.icon} />,
    Single: <UserSingle className={styles.icon} />,
    Couple: <UserCouple className={styles.icon} />,
    Family: <UserFamily className={styles.icon} />,
    Pet: <UserPet className={styles.icon} />,
    Active: <MoodActive className={styles.icon} />,
    Silent: <MoodSilent className={styles.icon} />,
    Windowless: <FenestrationWindowless className={styles.icon} />,
    Scenic: <FenestrationScenic className={styles.icon} />,
    Skylight: <FenestrationSkylight className={styles.icon} />,
    Folding: <FenestrationSemiOpen className={styles.icon} />,
  };

  if (!selectedOption) return null;
  return IconMap[selectedOption];
}
