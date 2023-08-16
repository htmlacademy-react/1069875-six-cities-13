import { LocationT } from '../types/types';

const City = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
} as const;

type CityLocationT = {
  [name in keyof typeof City]: LocationT;
};

const CityLocation: CityLocationT = {
  [City.Paris]: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  [City.Cologne]: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
  [City.Brussels]: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13,
  },
  [City.Amsterdam]: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13,
  },
  [City.Hamburg]: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13,
  },
  [City.Dusseldorf]: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13,
  },
} as const;

export { City, CityLocation };
