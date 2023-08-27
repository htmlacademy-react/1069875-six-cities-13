import cn from 'classnames';
import { City } from '../../const/cities';
import { memo } from 'react';
import { useAppDispatch } from '../../hooks';
import { setCity, setActiveSorting } from '../../store/main-data/main-data';
import { SortingType } from '../../const/others';

type LocationTabsProps = {
  activeCity: typeof City[keyof typeof City];
}

function LocationTabs({ activeCity }: LocationTabsProps): JSX.Element {

  const dispatch = useAppDispatch();

  const handleClick = (city: typeof City[keyof typeof City]) => {
    dispatch(setCity(city));
    dispatch(setActiveSorting(SortingType.Default));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(City).map((city) => (
          <li key={`location-${city}`} onClick={() => handleClick(city)} className="locations__item">
            <a className={cn('locations__item-link tabs__item', {'tabs__item--active': activeCity === city})}>
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

const LocationTabsMemo = memo(LocationTabs);

export default LocationTabsMemo;
