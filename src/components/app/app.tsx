import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const/server';
import { useAppDispatch } from '../../hooks';
import { checkAuthAction, fetchOffersAction } from '../../store/api-action';
import { useEffect } from 'react';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />}></Route>
        <Route path={AppRoute.Login} element={<LoginPage />}></Route>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:offerId`}
          element={<OfferPage />}
        />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
