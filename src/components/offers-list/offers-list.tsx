import OfferCard from '../offer-card/offer-card';
import { OfferT } from '../../types/types';

type OffersListProps = {
  offers: OfferT[];
  onOfferOver: (id: string) => void;
};

function OffersList({ offers, onOfferOver }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseOver={() => {
            onOfferOver(offer.id);
          }}
        />
      ))}
    </div>
  );
}

export default OffersList;
