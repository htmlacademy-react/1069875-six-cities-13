import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import useMap from '../../hooks/useMap';
import useMapView from '../../hooks/useMapView';
import useMapMarkers from '../../hooks/useMapMarkers';
import { LocationT } from '../../types/location';
import MarkerIcon from './marker-icon';
import MapModeDiffs from './map-mode-diffs';
import { MapMode } from '../../const/modes';
import { useAppSelector } from '../../hooks';
import { getActiveOffer } from '../../store/main-data/selectors';

type MapProps = {
  mode: typeof MapMode[keyof typeof MapMode];
  city: LocationT;
  points: Array<LocationT & {id: string}>;
}

function Map({ mode, city, points }: MapProps): JSX.Element {
  const activePoint = useAppSelector(getActiveOffer);
  const { StyleClass } = MapModeDiffs[mode];
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useMapView(map, city);
  useMapMarkers({map, points, activePoint, icons: MarkerIcon});
  return (
    <section className={`${StyleClass}__map map`} ref={mapRef} />
  );
}

export default Map;
