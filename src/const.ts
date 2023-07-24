const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

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

const LogoMode = {
  Header: 'header',
  Footer: 'footer',
} as const;

export { Cities, AppRoute, AuthorizationStatus, RatingConfig, CardMode, LogoMode };
