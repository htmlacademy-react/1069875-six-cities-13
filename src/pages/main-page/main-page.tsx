import cn from 'classnames';
import { useMemo } from 'react';
import PageHeader from '../../components/page-header/page-header';
import LocationTabs from '../../components/location-tabs/location-tabs';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import Sorting from '../../components/sorting/sorting';
import { CityLocation } from '../../const/cities';
import { CardMode, MapMode, OffersListMode } from '../../const/modes';
import { useAppSelector, useActiveOffer } from '../../hooks';
import { getOffersByCity } from '../../utils/offers';
import { getPointsFromOffers } from '../../utils/map-points';
import { getCurrentCity, getOffers, isOffersLoading } from '../../store/main-data/selectors';
import UIBlocker from '../../components/ui-blocker/ui-blocker';

function MainPage(): JSX.Element {
  const activeCity = useAppSelector(getCurrentCity);
  const allOffers = useAppSelector(getOffers);
  const isDataLoading = useAppSelector(isOffersLoading);

  const offers = useMemo(() => getOffersByCity(allOffers, activeCity), [activeCity, allOffers]);

  if (isDataLoading) {
    return <UIBlocker />;
  }

  return (
    <div className="page page--gray page--main">
      <PageHeader isMainPage />
      <main className={cn('page__main page__main--index', {'page__main--index-empty': !offers.length})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationTabs
            activeCity={activeCity}
          />
        </div>
        <div className="cities">
          {offers.length ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offers.length} place{offers.length > 1 ? 's' : null} to stay in {activeCity}
                </b>
                <Sorting />
                <OffersList
                  mode={OffersListMode.All}
                  cardMode={CardMode.Default}
                  offers={offers}
                  isInteractive
                />
              </section>
              <div className="cities__right-section">
                <Map
                  mode={MapMode.MainPage}
                  city={CityLocation[activeCity]}
                  points={getPointsFromOffers(offers)}
                  currentPoint={useActiveOffer}
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
