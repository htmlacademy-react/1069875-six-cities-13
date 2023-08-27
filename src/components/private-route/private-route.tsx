import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const/server';

type PrivateRouteProps = {
  isUserAuth: boolean;
  children: JSX.Element;
};

function PrivateRoute({ isUserAuth, children }: PrivateRouteProps): JSX.Element {
  return (isUserAuth ? children : <Navigate to={AppRoute.Login} />);
}

export default PrivateRoute;
