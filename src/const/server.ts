const BACKEND_URL = 'https://13.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;
const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

const OfferStatus = {
  Favorite: 1,
  NotFavorite: 0,
} as const;

const APIRoute = {
  Offers: '/offers',
  Login: '/login',
  Logout: '/logout',
  Favorite: '/favorite',
  Offer: {
    Info: (id: string) => `/offers/${id}`,
    NearbyOffers: (id: string) => `/offers/${id}/nearby`,
    Reviews: (id: string) => `/comments/${id}`,
    FavoriteStatus: (id: string, status: typeof OfferStatus[keyof typeof OfferStatus]) => `/favorite/${id}/${status}`,
  },
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

const NameSpace = {
  UserData: 'USER_DATA',
  MainData: 'MAIN_DATA',
  OfferData: 'OFFER_DATA',
  FavoriteData: 'FAVORITE_DATA',
  ReviewForm: 'REVIEW_FORM',
} as const;

export {
  BACKEND_URL,
  REQUEST_TIMEOUT,
  AUTH_TOKEN_KEY_NAME,
  OfferStatus,
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  NameSpace,
};
