import cn from 'classnames';
import { useState } from 'react';
import PageHeader from '../../components/page-header/page-header';
import LocationTabs from '../../components/location-tabs/location-tabs';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import Sorting from '../../components/sorting/sorting';
import { City, CityLocation } from '../../const/cities';
import { MapMode, OffersListMode } from '../../const/modes';
import { SortingType } from '../../const/others';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCity } from '../../store/action';
import { getOffersByCity, getOffersSorted } from '../../utils/offers';
import { getPointsFromOffers } from '../../utils/map-points';

function MainPage(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const offers = getOffersByCity(useAppSelector((state) => state.offers), activeCity);
  const [activeOffer, setActiveOffer] = useState<null | string>(null);
  const [activeSorting, setActiveSorting] = useState<typeof SortingType[keyof typeof SortingType]>(SortingType.Default);

  const dispatch = useAppDispatch();

  const handleLocationTabClick = (city: typeof City[keyof typeof City]) => {
    dispatch(setCity(city));
    setActiveSorting(SortingType.Default);
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
                <Sorting activeSorting={activeSorting} onClick={setActiveSorting}/>
                <OffersList
                  mode={OffersListMode.All}
                  offers={getOffersSorted(offers, activeSorting)}
                  onMouseMove={setActiveOffer}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  mode={MapMode.MainPage}
                  city={CityLocation[activeCity]}
                  activePoint={activeOffer}
                  points={getPointsFromOffers(offers)}
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
