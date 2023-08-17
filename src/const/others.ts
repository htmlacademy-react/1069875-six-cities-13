const DateFormat = {
  Default: 'YYYY-MM-DD',
  ForHuman: 'MMMM YYYY',
} as const;

const SortingType = {
  Default: 'Popular',
  PriceInc: 'Price: low to high',
  PriceDec: 'Price: high to low',
  Rating: 'Top rated first',
};

export { DateFormat, SortingType };
