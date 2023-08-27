import { City } from '../../const/cities';
import { OfferT } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import { CardMode } from '../../const/modes';

type FavoriteListProps = {
  city: typeof City[keyof typeof City];
  offers: OfferT[];
};

function FavoriteList({ city, offers }: FavoriteListProps): JSX.Element {
  return (
    <li className="favorites__locations-items" key={city}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} mode={CardMode.Favorite} />
        ))}
      </div>
    </li>
  );
}

export default FavoriteList;
