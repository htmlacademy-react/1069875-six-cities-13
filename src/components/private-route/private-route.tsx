import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const/server';
import { useAppSelector } from '../../hooks';
import { isAuthRequesting, isUserAuth } from '../../store/user-data/selectors';
import UIBlocker from '../ui-blocker/ui-blocker';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const isAuth = useAppSelector(isUserAuth);
  const isRequesting = useAppSelector(isAuthRequesting);
  if (isRequesting) {
    return <UIBlocker />;
  }
  return (isAuth ? children : <Navigate to={AppRoute.Login} />);
}

export default PrivateRoute;
