import { Map } from 'leaflet';
import { useEffect } from 'react';
import { LocationT } from '../types/types';

function useMapView(
  map: Map|null,
  city: LocationT
): void {

  useEffect(() => {
    if (map !== null && !map.getCenter().equals([city.latitude, city.longitude])) {
      map.setView([city.latitude, city.longitude], city.zoom);
    }

  }, [city, map]);
}

export default useMapView;
