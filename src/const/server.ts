const BACKEND_URL = 'https://13.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

type Status = 0 | 1;

const APIRoute = {
  Offers: '/offers',
  Login: '/login',
  Logout: '/logout',
  Favorite: '/favorite',
  Offer: {
    Info: (id: string) => `/offers/${id}`,
    NearbyOffers: (id: string) => `/offers/${id}/nearby`,
    Reviews: (id: string) => `/comments/${id}`,
    FavoriteStatus: (id: string, status: Status) => `/favorite/${id}/${status}`,
  }
} as const;

const AppRoute = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export { BACKEND_URL, REQUEST_TIMEOUT, APIRoute, AppRoute, AuthorizationStatus };
