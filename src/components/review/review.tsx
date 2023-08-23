import dayjs from 'dayjs';
import RatingStars from '../rating-stars/rating-stars';
import { ReviewT } from '../../types/review';
import { DateFormat } from '../../const/others';
import { RatingStarsMode } from '../../const/modes';

type ReviewProps = {
  review: ReviewT;
}

function Review({ review }: ReviewProps): JSX.Element {
  const { date, user, comment, rating } = review;
  const { name, avatarUrl } = user;
  return (
    <>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <RatingStars mode={RatingStarsMode.Review} rating={rating} />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(date).format(DateFormat.Default)}>
          {dayjs(date).format(DateFormat.ForHuman)}
        </time>
      </div>
    </>
  );
}

export default Review;
