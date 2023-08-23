import cn from 'classnames';
import PageHeader from '../../components/page-header/page-header';
import OfferCard from '../../components/offer-card/offer-card';
import Logo from '../../components/logo/logo';
import { City } from '../../const/cities';
import { CardMode, LogoMode } from '../../const/modes';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchFavoriteOffersAction } from '../../store/api-action';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const isDataActual = useAppSelector((state) => state.isFavoriteOffersActual);
  if (!isDataActual) {
    dispatch(fetchFavoriteOffersAction());
  }
  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);

  return (
    <div
      className={cn('page', {
        'page--favorites-empty': !favoriteOffers.length,
      })}
    >
      <PageHeader />
      <main
        className={cn('page__main page__main--favorites', {
          'page__main--favorites-empty': !favoriteOffers.length,
        })}
      >
        <div className="page__favorites-container container">
          {favoriteOffers.length ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.values(City).map((cityName) => {
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
          ) : (
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          )}
        </div>
      </main>
      <footer className="footer container">
        <Logo mode={LogoMode.Footer} />
      </footer>
    </div>
  );
}

export default FavoritesPage;
