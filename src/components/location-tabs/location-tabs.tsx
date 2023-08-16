import cn from 'classnames';
import { City } from '../../const/cities';

type LocationTabsProps = {
  activeCity: typeof City[keyof typeof City];
  onClick: (city: typeof City[keyof typeof City]) => void;
}

function LocationTabs({ activeCity, onClick }: LocationTabsProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(City).map((city) => (
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

export default LocationTabs;
