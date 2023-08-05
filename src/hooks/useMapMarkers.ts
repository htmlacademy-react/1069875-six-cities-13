import { Map, Marker, layerGroup, Icon } from 'leaflet';
import { useEffect } from 'react';
import { LocationT } from '../types/types';
import { MarkerMode } from '../const/modes';

type useMapMarkersProps = {
  map: Map | null;
  points: Array<LocationT & {id: string}>;
  icons: {[name: string]: Icon};
  activePoint: string|null;
};

function useMapMarkers({map, points, activePoint, icons}: useMapMarkersProps): void {
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup();
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker.setIcon(activePoint !== null && point.id === activePoint ? icons[MarkerMode.Active] : icons[MarkerMode.Default]).addTo(markerLayer);
      });
      markerLayer.addTo(map);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, activePoint, icons]);
}

export default useMapMarkers;
