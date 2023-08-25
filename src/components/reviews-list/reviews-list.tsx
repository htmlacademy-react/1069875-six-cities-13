import Review from '../review/review';
import { getReviews } from '../../store/offer-data/selectors';
import { useAppSelector } from '../../hooks';
import { getLastReviews } from '../../utils/reviews';

function ReviewsList(): JSX.Element {
  const reviews = useAppSelector(getReviews);
  const lastReviews = getLastReviews(reviews);
  return (
    <>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {lastReviews.map((review) => (
          <li key={`review-${review.id}`} className="reviews__item">
            <Review review={review} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
