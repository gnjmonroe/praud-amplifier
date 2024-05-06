import ModelPool from "../assets/pool.svg";
import ModelCinema from "../assets/cinema.svg";
import ModelKitchen from "../assets/kitchen.svg";
import ModelLibrary from "../assets/library.svg";
import ModelGarden from "../assets/garden.svg";
import LocationMountain from "../assets/mountain.svg";
import LocationRiver from "../assets/river.svg";
import LocationSea from "../assets/sea.svg";
import LocationRural from "../assets/rural.svg";
import LocationValley from "../assets/valley.svg";
import UserSingle from "../assets/single.svg";
import UserCouple from "../assets/couple.svg";
import UserFamily from "../assets/family.svg";
import UserPet from "../assets/pet.svg";
import MoodActive from "../assets/active.svg";
import MoodSilent from "../assets/silent.svg";
import FenestrationWindowless from "../assets/windowless.svg";
import FenestrationScenic from "../assets/scenic.svg";
import FenestrationSkylight from "../assets/skylight.svg";
import FenestrationSemiOpen from "../assets/folding.svg";
import styles from "./Icon.module.scss";

const IconMap: Record<string, JSX.Element> = {
  Pool: <img className={styles.root} src={ModelPool} />,
  Cinema: <img className={styles.root} src={ModelCinema} />,
  Kitchen: <img className={styles.root} src={ModelKitchen} />,
  Library: <img className={styles.root} src={ModelLibrary} />,
  Garden: <img className={styles.root} src={ModelGarden} />,
  Mountain: <img className={styles.root} src={LocationMountain} />,
  River: <img className={styles.root} src={LocationRiver} />,
  Sea: <img className={styles.root} src={LocationSea} />,
  Rural: <img className={styles.root} src={LocationRural} />,
  Valley: <img className={styles.root} src={LocationValley} />,
  Single: <img className={styles.root} src={UserSingle} />,
  Couple: <img className={styles.root} src={UserCouple} />,
  Family: <img className={styles.root} src={UserFamily} />,
  Pet: <img className={styles.root} src={UserPet} />,
  Active: <img className={styles.root} src={MoodActive} />,
  Silent: <img className={styles.root} src={MoodSilent} />,
  Windowless: <img className={styles.root} src={FenestrationWindowless} />,
  Scenic: <img className={styles.root} src={FenestrationScenic} />,
  Skylight: <img className={styles.root} src={FenestrationSkylight} />,
  Folding: <img className={styles.root} src={FenestrationSemiOpen} />,
};

interface IconProps {
  option: string | null;
}
export default function Icon({ option: selectedOption }: IconProps) {
  return selectedOption ? IconMap[selectedOption] : null;
}
