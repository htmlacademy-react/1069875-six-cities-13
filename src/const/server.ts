const BACKEND_URL = 'https://13.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const AppRoute = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export { BACKEND_URL, REQUEST_TIMEOUT, AppRoute, AuthorizationStatus };
