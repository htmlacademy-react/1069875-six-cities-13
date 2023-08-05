import RatingStarsModeDiffs from './rating-stars-mode-diffs';
import { RatingStarsMode } from '../../const/modes';
import { transformRatingToPercent } from '../../utils';

type RatingStarsProps = {
  mode: typeof RatingStarsMode[keyof typeof RatingStarsMode];
  rating: number;
};

function RatingStars({ mode, rating }: RatingStarsProps): JSX.Element {
  const { StyleClass, WithNumber } = RatingStarsModeDiffs[mode];
  return (
    <div className={`${StyleClass}__rating rating`}>
      <div className={`${StyleClass}__stars rating__stars`}>
        <span style={{ width: `${transformRatingToPercent(rating)}%` }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {WithNumber && (<span className={`${StyleClass}__rating-value rating__value`}>{rating}</span>)}
    </div>
  );
}

export default RatingStars;
