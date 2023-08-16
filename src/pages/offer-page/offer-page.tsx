import FormReview from '../../components/form-review/form-review';
import PageHeader from '../../components/page-header/page-header';
import ReviewsList from '../../components/reviews-list/reviews-list';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import RatingStars from '../../components/rating-stars/rating-stars';
import Map from '../../components/map/map';
import { startStringWithCapital } from '../../utils';
import { BookmarkMode, RatingStarsMode, MapMode, OffersListMode } from '../../const/modes';
import { useAppSelector } from '../../hooks';
import OffersList from '../../components/offers-list/offers-list';

function OfferPage(): JSX.Element {
  const offer = useAppSelector((state) => state.fullOffer);
  const reviews = useAppSelector((state) => state.reviews);
  const offersNearby = useAppSelector((state) => state.nearbyOffers);

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
                <BookmarkButton mode={BookmarkMode.Page} isActive={isFavorite}/>
              </div>
              <RatingStars mode={RatingStarsMode.Page} rating={rating}/>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {startStringWithCapital(type)}
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
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
                <FormReview />
              </section>
            </div>
          </div>
          <Map mode={MapMode.OfferPage} city={city.location} activePoint={id} points={[...offersNearby, offer].map((offerNearby) => ({...offerNearby.location, id: offerNearby.id}))} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList mode={OffersListMode.Nearby} offers={offersNearby} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
