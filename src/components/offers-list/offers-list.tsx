import cn from 'classnames';
import OfferCard from '../offer-card/offer-card';
import { OfferT } from '../../types/offer';
import OffersListModeDiffs from './offers-list-mode-diffs';
import { OffersListMode } from '../../const/modes';

type OffersListProps = {
  mode: typeof OffersListMode[keyof typeof OffersListMode];
  offers: OfferT[];
  onMouseMove?: (id: string|null) => void;
};

function OffersList({
  mode,
  offers,
  onMouseMove,
}: OffersListProps): JSX.Element {
  const { StyleClass } = OffersListModeDiffs[mode];
  return (
    <div
      className={
        cn(
          `places__list ${StyleClass}`,
          {'tabs__content': onMouseMove},
        )
      }
      onMouseOut={
        onMouseMove &&
        (() => {
          onMouseMove(null);
        })
      }
    >
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseOver={
            onMouseMove &&
            (() => {
              onMouseMove(offer.id);
            })
          }
        />
      ))}
    </div>
  );
}

export default OffersList;
