import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const/server';
import { OfferT } from '../../types/types';
import { fullOffer } from '../../mocks/offers';

type AppProps = {
  offers: OfferT[];
};

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage offers={offers} />}></Route>
        <Route path={AppRoute.Login} element={<LoginPage />}></Route>
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        >
        </Route>
        <Route path={AppRoute.Offer} element={<OfferPage offer={fullOffer} />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
