import dayjs from 'dayjs';
import { ReviewT } from '../types/review';
import { REVIEWS_MAX_COUNT } from '../const/others';

const getReviewsSorted = (reviews: ReviewT[]): ReviewT[] =>
  [...reviews].sort((itemA, itemB) =>
    dayjs(itemB.date).diff(itemA.date)
  );

export const getLastReviews = (reviews: ReviewT[]): ReviewT[] =>
  getReviewsSorted(reviews).slice(0, REVIEWS_MAX_COUNT);
