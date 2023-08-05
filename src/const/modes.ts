const CardMode = {
  Default: 'default',
  Favorite: 'favorite',
  Nearby: 'nearby',
} as const;

const LogoMode = {
  Header: 'header',
  Footer: 'footer',
} as const;

const MarkerMode = {
  Active: 'active',
  Default: 'default',
} as const;

const BookmarkMode = {
  Card: 'card',
  Page: 'page',
} as const;

const RatingStarsMode = {
  Card: 'card',
  Page: 'page',
  Review: 'review',
} as const;

const MapMode = {
  MainPage: 'main-page',
  OfferPage: 'offer-page',
} as const;

const OffersListMode = {
  All: 'all',
  Nearby: 'nearby',
} as const;

export { CardMode, LogoMode, MarkerMode, BookmarkMode, RatingStarsMode, MapMode, OffersListMode };
