import React from 'react';
import mistSrc from '_assets/images/icons/50d.png';
import { IIconsSet } from './interfaces';
import { ReactComponent as Snow } from '_assets/images/animated/13d.svg';
import { ReactComponent as RainDay } from '_assets/images/animated/10d.svg';
import { ReactComponent as FewSkyDay } from '_assets/images/animated/02n.svg';
import { ReactComponent as Cloudy } from '_assets/images/animated/cloudy.svg';
import { ReactComponent as RainNight } from '_assets/images/animated/10n.svg';
import { ReactComponent as FewSkyNight } from '_assets/images/animated/02d.svg';
import { ReactComponent as ClearSkyDay } from '_assets/images/animated/01d.svg';
import { ReactComponent as ThunderStorm } from '_assets/images/animated/10n.svg';
import { ReactComponent as ClearSkyNight } from '_assets/images/animated/01n.svg';
import { ReactComponent as ShowerRainDay } from '_assets/images/animated/09n.svg';
import { ReactComponent as ShowerRainNight } from '_assets/images/animated/09n.svg';

export const parseTemp = (temp: number) => Math.floor(temp / 10);

const Mist: React.FC = () => <img src={mistSrc} alt="" />;

export const iconArr: IIconsSet = {
  '01d': ClearSkyDay,
  '01n': ClearSkyNight,
  '02d': FewSkyDay,
  '02n': FewSkyNight,
  '03d': Cloudy,
  '03n': Cloudy,
  '04d': Cloudy,
  '04n': Cloudy,
  '09d': ShowerRainDay,
  '09n': ShowerRainNight,
  '10d': RainDay,
  '10n': RainNight,
  '11d': ThunderStorm,
  '11n': ThunderStorm,
  '13d': Snow,
  '13n': Snow,
  '50d': Mist,
  '50n': Mist,
};
