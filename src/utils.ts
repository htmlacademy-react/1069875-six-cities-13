import { RatingConfig } from './const/rating';

function transformRatingToPercent(rating: number): number {
  return Math.round(rating) / RatingConfig.MaxRating * RatingConfig.MaxPercent;
}

function startStringWithCapital(str: string): string {
  return str[0].toUpperCase() + str.substring(1);
}

export {
  transformRatingToPercent,
  startStringWithCapital,
};
