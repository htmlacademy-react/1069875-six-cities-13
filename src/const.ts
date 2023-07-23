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

const RatingConfig = {
  MaxRating: 5,
  MaxPercent: 100,
} as const;

const CardMode = {
  Default: 'default',
  Favorite: 'favorite',
} as const;

export {
  AppRoute,
  AuthorizationStatus,
  RatingConfig,
  CardMode,
};
