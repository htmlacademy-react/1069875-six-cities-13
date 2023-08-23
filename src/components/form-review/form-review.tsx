import { useState, ChangeEvent, Fragment, FormEvent } from 'react';
import { Rating } from '../../const/rating';
import { ReviewTextLength } from '../../const/others';
import { ReviewDataT } from '../../types/review';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/api-action';

type FormReviewProps = {
  offerId: string;
};

const EMPTY_FORM = {
  rating: 0,
  comment: '',
};

function FormReview({ offerId }: FormReviewProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isSending = useAppSelector((state) => state.isReviewSending);

  const [review, setReview] = useState<ReviewDataT>(EMPTY_FORM);
  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    dispatch(sendReviewAction({ id: offerId, review })).then(({payload}) => {
      if (payload) {
        setReview(EMPTY_FORM);
      }
    });
  };

  const isSubmitAvailable = (): boolean => !!review.rating && review.comment.length >= ReviewTextLength.Min;

  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
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
                  setReview({ ...review, rating: Number(target.value) });
                }}
                disabled={isSending}
                checked={review.rating === Number(numberKey)}
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
        value={review.comment}
        minLength={ReviewTextLength.Min}
        maxLength={ReviewTextLength.Max}
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
          setReview({ ...review, comment: target.value });
        }}
        disabled={isSending}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
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
