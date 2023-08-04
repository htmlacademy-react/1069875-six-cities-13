import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import useMap from '../../hooks/useMap';
import useMapMarkers from '../../hooks/useMapMarkers';
import { LocationT } from '../../types/types';
import MarkerIcon from './marker-icon';

type MapProps = {
  city: LocationT;
  activePoint: string|null;
  points: Array<LocationT & {id: string}>;
}

function Map({ city, activePoint, points }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useMapMarkers({map, points, activePoint, icons: MarkerIcon});
  return (
    <section className="cities__map map" ref={mapRef} />
  );
}

export default Map;
