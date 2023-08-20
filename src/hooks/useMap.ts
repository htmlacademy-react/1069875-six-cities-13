import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { LocationT } from '../types/location';

function useMap(
  containerRef: MutableRefObject<HTMLElement | null>,
  city: LocationT
): null | Map {
  const [map, setMap] = useState<null | Map>(null);
  const isRendered = useRef<boolean>(false);

  useEffect(() => {
    if (containerRef.current !== null && !isRendered.current) {
      const instance = new Map(containerRef.current).setView([city.latitude, city.longitude], city.zoom);

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );
      instance.addLayer(layer);

      setMap(instance);
      isRendered.current = true;
    }

  }, [containerRef, city]);

  return map;
}

export default useMap;
