import cn from 'classnames';
import { Cities } from '../../const';

type LocationsTabsProps = {
  activeCity: typeof Cities[number];
  onClick: (city: typeof Cities[number]) => void;
}

function LocationsTabs({ activeCity, onClick }: LocationsTabsProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Cities.map((city) => (
          <li key={`location-${city}`} onClick={() => onClick(city)} className="locations__item">
            <a className={cn('locations__item-link tabs__item', {'tabs__item--active': activeCity === city})}>
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LocationsTabs;
