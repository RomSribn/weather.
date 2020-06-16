import dotenv from 'dotenv';
import config from '12factor-config';
import { IWeatherConfig } from 'interfaces';

dotenv.config();

export const weatherConfig: IWeatherConfig = config({
  openWeatherApiKey: {
    env: 'REACT_APP_OPENWEATHER_API_KEY',
    type: 'string',
    required: true,
    default: 'REACT_APP_OPENWEATHER_API_KEY REQUIRED',
  },
  ipifyApiKey: {
    env: 'REACT_APP_IPIFY_API_KEY',
    type: 'string',
    required: true,
    default: 'REACT_APP_IPIFY_API_KEY REQUIRED',
  },
});
