import BookmarkButton from '../bookmark-button/bookmark-button';
import RatingStars from '../rating-stars/rating-stars';
import { OfferT } from '../../types/types';
import { startStringWithCapital } from '../../utils';
import { AppRoute } from '../../const/server';
import { CardMode, BookmarkMode, RatingStarsMode } from '../../const/modes';
import CardModeDiffs from './card-mode-diffs';
import { Link } from 'react-router-dom';

type OfferCardProps = {
  offer: OfferT;
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

  const {StyleClass, ImgSize, InfoBoxClass} = CardModeDiffs[mode];
  return (
    <article
      className={`${StyleClass}__card place-card`}
      id={id}
      onMouseOver={onMouseOver}
    >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={`${StyleClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
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
          <BookmarkButton mode={BookmarkMode.Card} isActive={isFavorite}/>
        </div>
        <RatingStars mode={RatingStarsMode.Card} rating={rating}/>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{startStringWithCapital(type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
