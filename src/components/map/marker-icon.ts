import { MarkerMode } from '../../const/modes';
import { Icon } from 'leaflet';

type Config = {
  iconSize: [number, number];
  iconAnchor: [number, number];
};

type MarkerIcon = {
  [mode: string]: Icon;
}

const IconConfig: Config = {
  iconSize: [27, 39],
  iconAnchor: [13, 39],
};

const MarkerIcon: MarkerIcon = {
  [MarkerMode.Active]: new Icon({
    ...IconConfig,
    iconUrl: 'img/pin-active.svg',
  }),
  [MarkerMode.Default]: new Icon({
    ...IconConfig,
    iconUrl: 'img/pin.svg',
  }),
};

export default MarkerIcon;
