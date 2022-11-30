import React from 'react';
import ModelPool from '../images/test/model-1.png';
import ModelCinema from '../images/test/model-2.png';
import ModelKitchen from '../images/test/model-3.png';
import ModelLibrary from '../images/test/model-4.png';
import ModelGarden from '../images/test/model-5.png';
import LocationMountain from '../images/test/location-1.png';
import LocationRiver from '../images/test/location-2.png';
import LocationSea from '../images/test/location-3.png';
import LocationRural from '../images/test/location-4.png';
import LocationValley from '../images/test/location-5.png';
import UserSingle from '../images/test/user-1.png';
import UserCouple from '../images/test/user-2.png';
import UserFamily from '../images/test/user-3.png';
import UserPet from '../images/test/user-4.png';
import MoodActive from '../images/test/mood-1.png';
import MoodSilent from '../images/test/mood-2.png';
import FenestrationWindowless from '../images/test/fenestration-1.png';
import FenestrationScenic from '../images/test/fenestration-2.png';
import FenestrationSkylight from '../images/test/fenestration-3.png';
import FenestrationSemiOpen from '../images/test/fenestration-4.png';
import classes from '../scss/components/icon.module.scss';

export default function Icon(props: {
  category: string,
  optionIndex: number,
}) {
  const { category, optionIndex } = props;

  function handleIconPath() {
    switch (true) {
      case (category === 'Model' && optionIndex === 0):
        return ModelPool;
      case (category === 'Model' && optionIndex === 1):
        return ModelCinema;
      case (category === 'Model' && optionIndex === 2):
        return ModelKitchen;
      case (category === 'Model' && optionIndex === 3):
        return ModelLibrary;
      case (category === 'Model' && optionIndex === 4):
        return ModelGarden;
      case (category === 'Location' && optionIndex === 0):
        return LocationMountain;
      case (category === 'Location' && optionIndex === 1):
        return LocationRiver;
      case (category === 'Location' && optionIndex === 2):
        return LocationSea;
      case (category === 'Location' && optionIndex === 3):
        return LocationRural;
      case (category === 'Location' && optionIndex === 4):
        return LocationValley;
      case (category === 'User' && optionIndex === 0):
        return UserSingle;
      case (category === 'User' && optionIndex === 1):
        return UserCouple;
      case (category === 'User' && optionIndex === 2):
        return UserFamily;
      case (category === 'User' && optionIndex === 3):
        return UserPet;
      case (category === 'Mood' && optionIndex === 0):
        return MoodActive;
      case (category === 'Mood' && optionIndex === 1):
        return MoodSilent;
      case (category === 'Opening' && optionIndex === 0):
        return FenestrationWindowless;
      case (category === 'Opening' && optionIndex === 1):
        return FenestrationScenic;
      case (category === 'Opening' && optionIndex === 2):
        return FenestrationSkylight;
      case (category === 'Opening' && optionIndex === 3):
        return FenestrationSemiOpen;
      default:
        throw new Error(`Unexpected value in handleIconPath: ${category} ${optionIndex}`);
    }
  }
  return (
    <img className={classes.icon} src={handleIconPath()} alt="icon" />
  );
}
