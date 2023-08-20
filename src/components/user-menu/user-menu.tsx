import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/server';
import { useAppSelector } from '../../hooks';

function UserMenu(): JSX.Element {
  const userData = useAppSelector((state) => state.userData);
  const favoritesOffersCount = useAppSelector((state) => state.favoriteOffersCount);

  if (!userData) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  const { email } = userData;

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
          <a className="header__nav-link" href="#">
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default UserMenu;
