import { ChangeEvent, Fragment, FormEvent } from 'react';
import { Rating } from '../../const/rating';
import { ReviewFormEmpty, ReviewTextLength } from '../../const/others';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/api-action';
import {
  getComment,
  getRating,
  isReviewSending,
} from '../../store/review-form/selectors';
import { setComment, setRating } from '../../store/review-form/review-form';

type FormReviewProps = {
  offerId: string;
};

function FormReview({ offerId }: FormReviewProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isSending = useAppSelector(isReviewSending);
  const comment = useAppSelector(getComment);
  const rating = useAppSelector(getRating);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    dispatch(sendReviewAction({ id: offerId, review: {comment, rating} }));
  };

  const isSubmitAvailable = (): boolean =>
    rating > ReviewFormEmpty.Rating &&
    comment.length >= ReviewTextLength.Min &&
    comment.length <= ReviewTextLength.Max;

  return (
    <form
      onSubmit={handleFormSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(Rating)
          .reverse()
          .map(([numberKey, humanKey]) => (
            <Fragment key={`rating-${numberKey}`}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={numberKey}
                id={`${numberKey}-stars`}
                type="radio"
                onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                  dispatch(setRating(Number(target.value)));
                }}
                disabled={isSending}
                checked={rating === Number(numberKey)}
              />
              <label
                htmlFor={`${numberKey}-stars`}
                className="reviews__rating-label form__rating-label"
                title={humanKey}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
          dispatch(setComment(target.value));
        }}
        disabled={isSending}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">{ReviewTextLength.Min} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isSubmitAvailable() || isSending}
        >
          {isSending ? 'Saving...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default FormReview;
