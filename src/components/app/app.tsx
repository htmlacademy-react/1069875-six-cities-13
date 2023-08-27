import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const/server';
import UIBlocker from '../../components/ui-blocker/ui-blocker';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { isUserAuth } from '../../store/user-data/selectors';
import { isOffersLoading } from '../../store/main-data/selectors';
import { isOfferLoading } from '../../store/offer-data/selectors';
import { isFavoriteOffersLoading } from '../../store/favorite-data/selectors';
import { checkAuthAction, fetchOffersAction } from '../../store/api-action';
import { useEffect } from 'react';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const offersLoading = useAppSelector(isOffersLoading);
  const offerLoading = useAppSelector(isOfferLoading);
  const favoriteLoading = useAppSelector(isFavoriteOffersLoading);
  const isDataLoading = offersLoading || offerLoading || favoriteLoading;
  const authorizationStatus = useAppSelector(isUserAuth);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <>
      {isDataLoading ? <UIBlocker /> : null}
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage />}></Route>
          <Route path={AppRoute.Login} element={<LoginPage />}></Route>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute isUserAuth={authorizationStatus}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path={`${AppRoute.Offer}/:offerId`} element={<OfferPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </HistoryRouter>
    </>
  );
}

export default App;
