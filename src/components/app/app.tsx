import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page copy/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { AppRoute } from '../../const';

type AppProps = {
  offersNumber: number;
};

function App({ offersNumber }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage offersNumber={offersNumber} />}></Route>
        <Route path={AppRoute.Login} element={<LoginPage />}></Route>
        <Route path={AppRoute.Favorites} element={<FavoritesPage />}></Route>
        <Route path={AppRoute.Offer} element={<OfferPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
