import { RatingConfig } from '../const/rating';

export function transformRatingToPercent(rating: number): number {
  return Math.round(rating) / RatingConfig.MaxRating * RatingConfig.MaxPercent;
}
