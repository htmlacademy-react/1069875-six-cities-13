import cn from 'classnames';
import PageHeader from '../../components/page-header/page-header';
import Logo from '../../components/logo/logo';
import { City } from '../../const/cities';
import { LogoMode } from '../../const/modes';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers, isFavoriteOffersLoading } from '../../store/favorite-data/selectors';
import FavoriteList from '../../components/favorite-list/favorite-list';
import { getOffersByCity } from '../../utils/offers';
import UIBlocker from '../../components/ui-blocker/ui-blocker';

function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isDataLoading = useAppSelector(isFavoriteOffersLoading);

  if (isDataLoading) {
    return <UIBlocker />;
  }

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
                  const cityOffers = getOffersByCity(favoriteOffers, cityName);

                  return cityOffers.length ? (
                    <FavoriteList key={`city${cityName}`} city={cityName} offers={cityOffers} />
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
