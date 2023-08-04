import { MapMode } from '../../const/modes';

type MapModeDiff = {
    StyleClass: string;
};

type MapModeDiffs = {
  [mode: string]: MapModeDiff;
}

const MapModeDiffs: MapModeDiffs = {
  [MapMode.MainPage]: {
    StyleClass: 'cities',
  },
  [MapMode.OfferPage]: {
    StyleClass: 'offer',
  },
};

export default MapModeDiffs;
