import React from 'react';
import { ReactComponent as ModelPool } from '../assets/pool.svg';
import { ReactComponent as ModelCinema } from '../assets/cinema.svg';
import { ReactComponent as ModelKitchen } from '../assets/kitchen.svg';
import { ReactComponent as ModelLibrary } from '../assets/library.svg';
import { ReactComponent as ModelGarden } from '../assets/garden.svg';
import { ReactComponent as LocationMountain } from '../assets/mountain.svg';
import { ReactComponent as LocationRiver } from '../assets/river.svg';
import { ReactComponent as LocationSea } from '../assets/sea.svg';
import { ReactComponent as LocationRural } from '../assets/rural.svg';
import { ReactComponent as LocationValley } from '../assets/valley.svg';
import { ReactComponent as UserSingle } from '../assets/single.svg';
import { ReactComponent as UserCouple } from '../assets/couple.svg';
import { ReactComponent as UserFamily } from '../assets/family.svg';
import { ReactComponent as UserPet } from '../assets/pet.svg';
import { ReactComponent as MoodActive } from '../assets/active.svg';
import { ReactComponent as MoodSilent } from '../assets/silent.svg';
import { ReactComponent as FenestrationWindowless } from '../assets/windowless.svg';
import { ReactComponent as FenestrationScenic } from '../assets/scenic.svg';
import { ReactComponent as FenestrationSkylight } from '../assets/skylight.svg';
import { ReactComponent as FenestrationSemiOpen } from '../assets/folding.svg';
import classes from '../scss/components/icon.module.scss';

export default function Icon(props: {
  category: string,
  optionIndex: number,
}) {
  const { category, optionIndex } = props;

  function handleIconPath() {
    switch (true) {
      case (category === 'Model' && optionIndex === 0):
        return <ModelPool className={classes.icon} />;
      case (category === 'Model' && optionIndex === 1):
        return <ModelCinema className={classes.icon} />;
      case (category === 'Model' && optionIndex === 2):
        return <ModelKitchen className={classes.icon} />;
      case (category === 'Model' && optionIndex === 3):
        return <ModelLibrary className={classes.icon} />;
      case (category === 'Model' && optionIndex === 4):
        return <ModelGarden className={classes.icon} />;
      case (category === 'Location' && optionIndex === 0):
        return <LocationMountain className={classes.icon} />;
      case (category === 'Location' && optionIndex === 1):
        return <LocationRiver className={classes.icon} />;
      case (category === 'Location' && optionIndex === 2):
        return <LocationSea className={classes.icon} />;
      case (category === 'Location' && optionIndex === 3):
        return <LocationRural className={classes.icon} />;
      case (category === 'Location' && optionIndex === 4):
        return <LocationValley className={classes.icon} />;
      case (category === 'User' && optionIndex === 0):
        return <UserSingle className={classes.icon} />;
      case (category === 'User' && optionIndex === 1):
        return <UserCouple className={classes.icon} />;
      case (category === 'User' && optionIndex === 2):
        return <UserFamily className={classes.icon} />;
      case (category === 'User' && optionIndex === 3):
        return <UserPet className={classes.icon} />;
      case (category === 'Mood' && optionIndex === 0):
        return <MoodActive className={classes.icon} />;
      case (category === 'Mood' && optionIndex === 1):
        return <MoodSilent className={classes.icon} />;
      case (category === 'Opening' && optionIndex === 0):
        return <FenestrationWindowless className={classes.icon} />;
      case (category === 'Opening' && optionIndex === 1):
        return <FenestrationScenic className={classes.icon} />;
      case (category === 'Opening' && optionIndex === 2):
        return <FenestrationSkylight className={classes.icon} />;
      case (category === 'Opening' && optionIndex === 3):
        return <FenestrationSemiOpen className={classes.icon} />;
      default:
        throw new Error(`Unexpected value in handleIconPath: ${category} ${optionIndex}`);
    }
  }

  return (
    handleIconPath()
  );
}
