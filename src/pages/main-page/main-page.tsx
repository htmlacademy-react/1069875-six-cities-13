import { useState } from 'react';
import PageHeader from '../../components/page-header/page-header';
import LocationsTabs from '../../components/locations-tabs/locations-tabs';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { OfferT } from '../../types/types';
import { Cities } from '../../const/cities';
import { MapMode } from '../../const/modes';

type MainPageProps = {
  offers: OfferT[];
};

function MainPage({ offers }: MainPageProps): JSX.Element {
  const [activeCity, setActiveCity] = useState(Object.keys(Cities)[0]);
  const [activeOffer, setActiveOffer] = useState<null|string>(null);

  const handleLocationTabClick = (city: string) => {
    setActiveCity(city);
  };

  return (
    <div className="page page--gray page--main">
      <PageHeader isMainPage/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsTabs activeCity={activeCity} onClick={handleLocationTabClick}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
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
              <OffersList offers={offers} onOfferOver={setActiveOffer}/>
            </section>
            <div className="cities__right-section">
              <Map mode={MapMode.MainPage} city={Cities[activeCity]} activePoint={activeOffer} points={offers.map((offer) => ({...offer.location, id: offer.id}))} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
