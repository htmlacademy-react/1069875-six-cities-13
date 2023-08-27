import PageHeader from '../../components/page-header/page-header';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import FormLogin from '../../components/form-login/form-login';
import { resetLoginData } from '../../store/login-form/login-form';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetLoginData());
  }, [dispatch]);

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
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
