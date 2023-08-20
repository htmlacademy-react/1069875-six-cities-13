import Review from '../review/review';
import { ReviewT } from '../../types/review';

type ReviewsListProps = {
  reviews: ReviewT[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <li key={`review-${review.id}`} className="reviews__item">
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
}

export default ReviewsList;
