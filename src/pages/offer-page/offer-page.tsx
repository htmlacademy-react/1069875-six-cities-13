import FormReview from '../../components/form-review/form-review';
import PageHeader from '../../components/page-header/page-header';
import ReviewsList from '../../components/reviews-list/reviews-list';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import RatingStars from '../../components/rating-stars/rating-stars';
import Map from '../../components/map/map';
import {
  BookmarkMode,
  RatingStarsMode,
  MapMode,
  OffersListMode,
} from '../../const/modes';
import { useAppSelector, useAppDispatch, useOfferFavoriteFlag } from '../../hooks';
import { fetchOfferAction } from '../../store/api-action';
import OffersList from '../../components/offers-list/offers-list';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import lodash from 'lodash';
import NotFoundPage from '../not-found-page/not-found-page';
import { getRandomNearbyOffers } from '../../utils/offers';
import { getPointsFromOffers } from '../../utils/map-points';
import { getNearbyOffers, getOffer, hasOfferError } from '../../store/offer-data/selectors';
import { isUserAuth } from '../../store/user-data/selectors';

function OfferPage(): JSX.Element {
  const { offerId } = useParams();

  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);
  const offersNearby = getRandomNearbyOffers(useAppSelector(getNearbyOffers));
  const hasError = useAppSelector(hasOfferError);
  const isAuth = useAppSelector(isUserAuth);

  useEffect(() => {
    dispatch(fetchOfferAction(offerId as string));
  }, [dispatch, offerId]);

  if (hasError) {
    return (<NotFoundPage />);
  }

  const {
    id,
    title,
    isPremium,
    images,
    type,
    bedrooms,
    maxAdults,
    price,
    isFavorite,
    rating,
    goods,
    host,
    description,
    city,
  } = offer;
  const { name, avatarUrl, isPro } = host;

  return (
    <div className="page">
      <PageHeader />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => (
                <div key={`image-${image}`} className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src={image}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <BookmarkButton
                  mode={BookmarkMode.Page}
                  id={id}
                  isActive={useOfferFavoriteFlag}
                />
              </div>
              <RatingStars mode={RatingStarsMode.Page} rating={rating} />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {lodash.capitalize(type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => (
                    <li key={`goods-${good}`} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{name}</span>
                  {isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewsList />
                {isAuth ? <FormReview offerId={id} /> : null}
              </section>
            </div>
          </div>
          <Map
            mode={MapMode.OfferPage}
            city={city.location}
            points={getPointsFromOffers([...offersNearby, offer])}
          />
        </section>
        {city.name ? (
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <OffersList mode={OffersListMode.Nearby} offers={offersNearby} isInteractive={false} />
            </section>
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default OfferPage;
