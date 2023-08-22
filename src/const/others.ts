const REVIEWS_MAX_COUNT = 10;

const DateFormat = {
  Default: 'YYYY-MM-DD',
  ForHuman: 'MMMM YYYY',
} as const;

const SortingType = {
  Default: 'Popular',
  PriceInc: 'Price: low to high',
  PriceDec: 'Price: high to low',
  Rating: 'Top rated first',
} as const;

const ReviewTextLength = {
  Min: 50,
  Max: 300,
} as const;

export { REVIEWS_MAX_COUNT, DateFormat, SortingType, ReviewTextLength };
