import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Location } from '../types/types';

function useMap(
  containerRef: MutableRefObject<HTMLElement | null>,
  city: Location
): null | Map {
  const [map, setMap] = useState<null | Map>(null);
  const isRendered = useRef<boolean>(false);

  useEffect(() => {
    if (containerRef.current !== null && !isRendered.current) {
      const instance = new Map(containerRef.current);

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

    map?.setView([city.latitude, city.longitude], city.zoom);

  }, [containerRef, city, map]);

  return map;
}

export default useMap;
