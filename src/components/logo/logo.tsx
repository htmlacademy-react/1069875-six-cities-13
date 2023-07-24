import { Link } from 'react-router-dom';
import { AppRoute, LogoMode } from '../../const';
import LogoModeDiffs from './logo-mode-diffs';

type LogoProps = {
  mode: typeof LogoMode[keyof typeof LogoMode];
  isNotActive?: boolean;
};

function Logo({ mode, isNotActive = false}: LogoProps): JSX.Element {
  return (
    <Link to={AppRoute.Root} className={`${mode}__logo-link ${isNotActive ? '' : ('header__logo-link--active')}`}>
      <img
        className={`${mode}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={LogoModeDiffs[mode].Width}
        height={LogoModeDiffs[mode].Height}
      />
    </Link>
  );
}

export default Logo;
