import cn from 'classnames';
import { useState } from 'react';
import PageHeader from '../../components/page-header/page-header';
import LocationTabs from '../../components/location-tabs/location-tabs';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { City, CityLocation } from '../../const/cities';
import { MapMode, OffersListMode } from '../../const/modes';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import { getOffersByCity } from '../../scripts/offers';

function MainPage(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const offers = getOffersByCity(useAppSelector((state) => state.offers), activeCity);
  const [activeOffer, setActiveOffer] = useState<null | string>(null);

  const dispatch = useAppDispatch();

  const handleLocationTabClick = (city: typeof City[keyof typeof City]) => {
    dispatch(changeCity({ city }));
  };

  return (
    <div className="page page--gray page--main">
      <PageHeader isMainPage />
      <main className={cn('page__main page__main--index', {'page__main--index-empty': !offers.length})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationTabs
            activeCity={activeCity}
            onClick={handleLocationTabClick}
          />
        </div>
        <div className="cities">
          {offers.length ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offers.length} places to stay in {activeCity}
                </b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width={7} height={4}>
                      <use xlinkHref="#icon-arrow-select" />
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li
                      className="places__option places__option--active"
                      tabIndex={0}
                    >
                      Popular
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Price: low to high
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Price: high to low
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Top rated first
                    </li>
                  </ul>
                </form>
                <OffersList
                  mode={OffersListMode.All}
                  offers={offers}
                  onMouseMove={setActiveOffer}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  mode={MapMode.MainPage}
                  city={CityLocation[activeCity]}
                  activePoint={activeOffer}
                  points={offers.map((offer) => ({
                    ...offer.location,
                    id: offer.id,
                  }))}
                />
              </div>
            </div>
          ) : (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in {activeCity}
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
