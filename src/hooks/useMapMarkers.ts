import { Map, Marker, layerGroup } from 'leaflet';
import { useEffect } from 'react';
import { Location } from '../types/types';

function useMapMarkers(map: Map | null, points: Location[]): void {
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup();
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker.addTo(markerLayer);
      });
      markerLayer.addTo(map);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points]);
}

export default useMapMarkers;
