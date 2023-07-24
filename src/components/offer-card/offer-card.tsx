import { Offer } from '../../types/offer';
import { startStringWithCapital, transformRatingToPercent } from '../../utils';
import { AppRoute, CardMode } from '../../const';
import CardModeDiffs from './card-mode-diffs';
import { Link } from 'react-router-dom';

type OfferCardProps = {
  offer: Offer;
  onMouseOver?: () => void;
  mode?: typeof CardMode[keyof typeof CardMode];
};

function OfferCard({ offer, mode = CardMode.Default, onMouseOver }: OfferCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    previewImage,
    isPremium,
    isFavorite,
    rating,
  } = offer;

  const {CardClass, ImgBoxClass, ImgSize, InfoBoxClass} = CardModeDiffs[mode];
  return (
    <article
      className={`${CardClass} place-card`}
      id={id}
      onMouseOver={onMouseOver}
    >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={`${ImgBoxClass} place-card__image-wrapper`}>
        <Link to={AppRoute.Offer}>
          <img
            className="place-card__image"
            src={previewImage}
            width={ImgSize.Width}
            height={ImgSize.Height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${InfoBoxClass ?? ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${transformRatingToPercent(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{startStringWithCapital(type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
