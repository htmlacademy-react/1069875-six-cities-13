import PageHeader from '../../components/page-header/page-header';
import OfferCard from '../../components/offer-card/offer-card';
import Logo from '../../components/logo/logo';
import { Offer } from '../../types/offer';
import { Cities } from '../../const/cities';
import { CardMode, LogoMode } from '../../const/modes';

type FavoritesPageProps = {
  offers: Offer[];
};

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
  const favoriteOffers = offers.filter(({ isFavorite }) => isFavorite);

  return (
    <div className="page">
      <PageHeader />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Cities.map((cityName) => {
                const cityOffers = favoriteOffers.filter(
                  ({ city }) => city.name === cityName
                );

                return cityOffers.length ? (
                  <li className="favorites__locations-items" key={cityName}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{cityName}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {cityOffers.map((offer) => (
                        <OfferCard
                          key={offer.id}
                          offer={offer}
                          mode={CardMode.Favorite}
                        />
                      ))}
                    </div>
                  </li>
                ) : null;
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo mode={LogoMode.Footer} />
      </footer>
    </div>
  );
}

export default FavoritesPage;
