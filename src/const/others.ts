const REVIEWS_MAX_COUNT = 10;
const NEARBY_OFFERS_MAX_COUNT = 3;
const PASSWORD_PATTERN = '(?=.*?[0-9])(?=.*?[A-Za-z]).+';

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

const ReviewFormEmpty = {
  Rating: 0,
  Comment: '',
} as const;

const LoginFormEmpty = {
  Email: '',
  Password: '',
} as const;

export { REVIEWS_MAX_COUNT, NEARBY_OFFERS_MAX_COUNT, PASSWORD_PATTERN, DateFormat, SortingType, ReviewTextLength, ReviewFormEmpty, LoginFormEmpty };
