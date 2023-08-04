import Review from '../review/review';

function ReviewsList(): JSX.Element {
  return (
    <ul className="reviews__list">
      <li className="reviews__item">
        <Review />
      </li>
    </ul>
  );
}

export default ReviewsList;
