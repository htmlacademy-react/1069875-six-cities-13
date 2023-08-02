const RatingConfig = {
  MaxRating: 5,
  MaxPercent: 100,
} as const;

const Rating = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
} as const;

export { RatingConfig, Rating };
