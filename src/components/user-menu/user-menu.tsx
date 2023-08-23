import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/server';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-action';
import { getUserData } from '../../store/user-data/selectors';
import { getFavoriteOffersCount } from '../../store/favorite-data/selectors';

function UserMenu(): JSX.Element {
  const userData = useAppSelector(getUserData);
  const favoritesOffersCount = useAppSelector(getFavoriteOffersCount);

  const dispatch = useAppDispatch();

  if (!userData) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  const { email } = userData;

  const handleLogout = (): void => {
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            to={AppRoute.Favorites}
            className="header__nav-link header__nav-link--profile"
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">
              {email}
            </span>
            <span className="header__favorite-count">{favoritesOffersCount}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a onClick={handleLogout} className="header__nav-link" href="#">
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default UserMenu;
