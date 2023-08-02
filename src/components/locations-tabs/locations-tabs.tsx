import { Cities } from '../../const';

function LocationsTabs(): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Cities.map((city) => (
          <li key={`location-${city}`} className="locations__item">
            <a className="locations__item-link tabs__item">
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LocationsTabs;
