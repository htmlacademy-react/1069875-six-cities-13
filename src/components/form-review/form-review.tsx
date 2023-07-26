import { useState, ChangeEvent, Fragment } from 'react';
import { Rating } from '../../const';

function FormReview(): JSX.Element {
  const [review, setReview] = useState({
    rating: 0,
    comment: '',
  });

  return (
    <form className="reviews__form form" action="#" method="post">
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
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
          setReview({ ...review, comment: target.value });
        }}
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
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormReview;
