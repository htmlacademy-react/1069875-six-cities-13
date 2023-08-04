const CardMode = {
  Default: 'default',
  Favorite: 'favorite',
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

export { CardMode, LogoMode, MarkerMode, BookmarkMode };
