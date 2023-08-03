import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import useMap from '../../hooks/useMap';
import useMapMarkers from '../../hooks/useMapMarkers';
import { Location } from '../../types/types';

type MapProps = {
  city: Location;
  points: Location[];
}

function Map({ city, points }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useMapMarkers(map, points);
  return (
    <section className="cities__map map" ref={mapRef} />
  );
}

export default Map;
