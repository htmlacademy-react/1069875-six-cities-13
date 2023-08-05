import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import useMap from '../../hooks/useMap';
import useMapMarkers from '../../hooks/useMapMarkers';
import { LocationT } from '../../types/types';
import MarkerIcon from './marker-icon';
import MapModeDiffs from './map-mode-diffs';
import { MapMode } from '../../const/modes';

type MapProps = {
  mode: typeof MapMode[keyof typeof MapMode];
  city: LocationT;
  activePoint: string|null;
  points: Array<LocationT & {id: string}>;
}

function Map({ mode, city, activePoint, points }: MapProps): JSX.Element {
  const { StyleClass } = MapModeDiffs[mode];
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useMapMarkers({map, points, activePoint, icons: MarkerIcon});
  return (
    <section className={`${StyleClass}__map map`} ref={mapRef} />
  );
}

export default Map;
