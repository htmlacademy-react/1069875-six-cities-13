import PageHeader from '../../components/page-header/page-header';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import FormLogin from '../../components/form-login/form-login';
import { resetLoginData } from '../../store/login-form/login-form';
import { isAuthRequesting, isUserAuth } from '../../store/user-data/selectors';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const/server';
import UIBlocker from '../../components/ui-blocker/ui-blocker';
import { setCity } from '../../store/main-data/main-data';
import { City } from '../../const/cities';
import lodash from 'lodash';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector(isUserAuth);
  const isDataLoading = useAppSelector(isAuthRequesting);

  useEffect(() => {
    dispatch(resetLoginData());
  }, [dispatch]);

  if (isDataLoading) {
    return <UIBlocker />;
  }

  if (isAuth) {
    navigate(AppRoute.Root);
  }

  const cities = Object.values(City);
  const randomCity = cities[lodash.random(cities.length - 1)];

  const handleLinkClick = () => {
    dispatch(setCity(randomCity));
    navigate(AppRoute.Root);
  };

  return (
    <div className="page page--gray page--login">
      <PageHeader isUserMenuActive={false} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <FormLogin />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a onClick={handleLinkClick} className="locations__item-link" href="#">
                <span>{randomCity}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
