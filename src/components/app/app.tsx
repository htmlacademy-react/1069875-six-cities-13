import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const/server';
import UIBlocker from '../../components/ui-blocker/ui-blocker';
import { useAppSelector } from '../../hooks';

function App(): JSX.Element {
  const isDataLoading = useAppSelector((state) => Object.values(state.isDataLoading).some((value) => value));

  return (
    <>
      {isDataLoading ? <UIBlocker /> : null}
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage />}></Route>
          <Route path={AppRoute.Login} element={<LoginPage />}></Route>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path={`${AppRoute.Offer}/:offerId`} element={<OfferPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
